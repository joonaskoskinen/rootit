import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const { url, userId } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    // Validate URL
    let validUrl: URL
    try {
      validUrl = new URL(url)
      if (!["http:", "https:"].includes(validUrl.protocol)) {
        throw new Error("Invalid protocol")
      }
    } catch {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 })
    }

    const supabase = await createClient()

    // Check user's scan limit
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("plan, scan_count, scan_limit")
      .eq("id", userId)
      .single()

    if (profileError || !profile) {
      return NextResponse.json({ error: "User profile not found" }, { status: 404 })
    }

    // Check if user can scan
    if (profile.plan === "free" && profile.scan_count >= profile.scan_limit) {
      return NextResponse.json({ 
        error: "Scan limit reached. Please upgrade to continue scanning." 
      }, { status: 403 })
    }

    // Perform the scan using axe-core API simulation
    // In production, this would use puppeteer + axe-core or a similar service
    const scanResult = await performAccessibilityScan(validUrl.toString())

    // Calculate issue counts
    const criticalCount = scanResult.violations.filter(v => v.impact === "critical").length
    const seriousCount = scanResult.violations.filter(v => v.impact === "serious").length
    const moderateCount = scanResult.violations.filter(v => v.impact === "moderate").length
    const minorCount = scanResult.violations.filter(v => v.impact === "minor").length
    const totalIssues = scanResult.violations.length

    // Create scan record
    const { data: scan, error: scanError } = await supabase
      .from("scans")
      .insert({
        user_id: userId,
        url: validUrl.toString(),
        status: "completed",
        total_issues: totalIssues,
        critical_count: criticalCount,
        serious_count: seriousCount,
        moderate_count: moderateCount,
        minor_count: minorCount,
        completed_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (scanError) {
      console.error("Error creating scan:", scanError)
      return NextResponse.json({ error: "Failed to save scan" }, { status: 500 })
    }

    // Save individual issues
    if (scanResult.violations.length > 0) {
      const issues = scanResult.violations.map(violation => ({
        scan_id: scan.id,
        rule_id: violation.id,
        impact: violation.impact,
        description: violation.description,
        help_url: violation.helpUrl,
        html_snippet: violation.nodes[0]?.html || null,
        selector: violation.nodes[0]?.target?.join(", ") || null,
      }))

      await supabase.from("scan_issues").insert(issues)
    }

    // Increment user's scan count
    await supabase
      .from("profiles")
      .update({ scan_count: profile.scan_count + 1 })
      .eq("id", userId)

    return NextResponse.json({
      url: validUrl.toString(),
      violations: scanResult.violations,
      passes: scanResult.passes,
      incomplete: scanResult.incomplete,
      scanId: scan.id,
    })
  } catch (error) {
    console.error("Scan error:", error)
    return NextResponse.json({ 
      error: "Failed to perform scan. Please try again." 
    }, { status: 500 })
  }
}

// Simulated accessibility scan function
// In production, use puppeteer + axe-core for real scanning
async function performAccessibilityScan(url: string) {
  // Simulating various accessibility issues that might be found
  // This provides realistic data for the demo
  const possibleViolations = [
    {
      id: "color-contrast",
      impact: "serious" as const,
      description: "Elements must have sufficient color contrast",
      help: "Ensure the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.4/color-contrast",
      nodes: [
        { html: '<p class="light-text">Low contrast text example</p>', target: [".light-text"] }
      ]
    },
    {
      id: "image-alt",
      impact: "critical" as const,
      description: "Images must have alternate text",
      help: "Ensure <img> elements have alternate text or a role of none or presentation",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.4/image-alt",
      nodes: [
        { html: '<img src="hero.jpg">', target: ["img"] }
      ]
    },
    {
      id: "link-name",
      impact: "serious" as const,
      description: "Links must have discernible text",
      help: "Ensure links have text that describes the destination",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.4/link-name",
      nodes: [
        { html: '<a href="/page"><i class="icon"></i></a>', target: ["a.icon-link"] }
      ]
    },
    {
      id: "button-name",
      impact: "critical" as const,
      description: "Buttons must have discernible text",
      help: "Ensure buttons have text that describes their purpose",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.4/button-name",
      nodes: [
        { html: '<button><svg>...</svg></button>', target: ["button.icon-btn"] }
      ]
    },
    {
      id: "label",
      impact: "critical" as const,
      description: "Form elements must have labels",
      help: "Ensure every form element has a label",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.4/label",
      nodes: [
        { html: '<input type="text" placeholder="Enter name">', target: ["input"] }
      ]
    },
    {
      id: "html-has-lang",
      impact: "serious" as const,
      description: "<html> element must have a lang attribute",
      help: "Ensure every HTML document has a lang attribute",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.4/html-has-lang",
      nodes: [
        { html: "<html>", target: ["html"] }
      ]
    },
    {
      id: "landmark-one-main",
      impact: "moderate" as const,
      description: "Document should have one main landmark",
      help: "Ensure the document has a main landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.4/landmark-one-main",
      nodes: [
        { html: "<body>...</body>", target: ["body"] }
      ]
    },
    {
      id: "region",
      impact: "moderate" as const,
      description: "All page content should be contained by landmarks",
      help: "Ensure all page content is contained by landmarks",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.4/region",
      nodes: [
        { html: '<div class="content">...</div>', target: [".content"] }
      ]
    },
  ]

  // Randomly select 0-5 violations to simulate varied results
  const numViolations = Math.floor(Math.random() * 6)
  const shuffled = [...possibleViolations].sort(() => 0.5 - Math.random())
  const violations = shuffled.slice(0, numViolations)

  return {
    url,
    violations,
    passes: Math.floor(Math.random() * 30) + 20,
    incomplete: Math.floor(Math.random() * 5),
  }
}
