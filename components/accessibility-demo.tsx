"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  AlertTriangle,
  AlertCircle,
  Scan,
  Globe,
  Download,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  FileText,
  TrendingUp,
  Eye,
  Code
} from "lucide-react"
import { cn } from "@/lib/utils"

// Demo scan data
const demoSite = {
  url: "example-barbershop.com",
  score: 72,
  lastScan: "2 hours ago",
  pagesScanned: 5,
}

const issues = [
  { 
    id: "labels",
    severity: "critical",
    title: "Missing form labels",
    description: "Form fields in booking form lack accessible labels",
    page: "/book",
    impact: "Screen reader users cannot identify form fields",
    count: 4,
    fix: {
      description: "Add a <label> element with a 'for' attribute that matches the input's 'id', or use 'aria-label' directly on the input.",
      code: `<label for="customer-name">
  Your Name
</label>
<input 
  id="customer-name" 
  type="text" 
/>`
    }
  },
  { 
    id: "contrast",
    severity: "critical",
    title: "Low contrast text",
    description: "Submit button text does not meet WCAG AA contrast ratio",
    page: "/book",
    impact: "Users with low vision may not be able to read the button",
    count: 2,
    fix: {
      description: "Change the text color to ensure a contrast ratio of at least 4.5:1 against the background.",
      code: `/* Before: #888 on #ccc = 2.1:1 */
.button {
  color: #888;
  background: #ccc;
}

/* After: #333 on #ccc = 7.5:1 */
.button {
  color: #333;
  background: #ccc;
}`
    }
  },
  { 
    id: "alt",
    severity: "warning",
    title: "Missing alt text",
    description: "Service images do not have descriptive alt attributes",
    page: "/services",
    impact: "Screen reader users won't know what the images show",
    count: 6,
    fix: {
      description: "Add descriptive alt text that conveys the meaning and purpose of each image.",
      code: `<!-- Before -->
<img src="haircut.jpg" />

<!-- After -->
<img 
  src="haircut.jpg"
  alt="Classic men's haircut with 
  scissors and comb styling"
/>`
    }
  },
  { 
    id: "focus",
    severity: "warning",
    title: "Missing focus indicators",
    description: "Interactive elements lack visible focus states",
    page: "/contact",
    impact: "Keyboard users cannot see which element is focused",
    count: 8,
    fix: {
      description: "Ensure all interactive elements have a visible focus indicator when focused.",
      code: `button:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}`
    }
  },
]

const pages = [
  { url: "/", name: "Homepage", issues: 3, score: 85 },
  { url: "/book", name: "Booking", issues: 8, score: 58 },
  { url: "/services", name: "Services", issues: 4, score: 76 },
  { url: "/contact", name: "Contact", issues: 2, score: 89 },
  { url: "/about", name: "About", issues: 1, score: 94 },
]

type View = "scan" | "dashboard" | "issues" | "issue-detail" | "statement" | "statement-done"

export function AccessibilityDemo() {
  const searchParams = useSearchParams()
  const [view, setView] = useState<View>("scan")
  const [urlInput, setUrlInput] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [selectedIssue, setSelectedIssue] = useState<typeof issues[0] | null>(null)
  const [generatingStatement, setGeneratingStatement] = useState(false)
  const [statementProgress, setStatementProgress] = useState(0)
  
  // Check for URL param on mount and auto-start scan
  useEffect(() => {
    const urlParam = searchParams.get("url")
    if (urlParam) {
      setUrlInput(urlParam)
      // Auto-start scan after a brief delay
      setTimeout(() => {
        startScan(urlParam)
      }, 500)
    }
  }, [searchParams])
  
  const startScan = (url: string) => {
    if (!url.trim()) return
    setIsScanning(true)
    setScanProgress(0)
    
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsScanning(false)
            setView("dashboard")
          }, 500)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const handleScan = () => {
    startScan(urlInput)
  }

  const handleGenerateStatement = () => {
    setGeneratingStatement(true)
    setStatementProgress(0)
    setView("statement")
    
    const interval = setInterval(() => {
      setStatementProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setGeneratingStatement(false)
            setView("statement-done")
          }, 500)
          return 100
        }
        return prev + 15
      })
    }, 300)
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col p-4 lg:flex-row lg:gap-8 lg:p-8">
      {/* Sidebar */}
      <aside className="mb-6 lg:mb-0 lg:w-80">
        <Link 
          href="/" 
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-lg">
          <div className="mb-6">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary">
              <Scan className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="font-display text-xl font-bold">Rune Access</h1>
            <p className="text-sm text-muted-foreground">Accessibility Scanner Demo</p>
          </div>

          {view !== "scan" && (
            <>
              <div className="mb-4 flex items-center gap-2 rounded-xl border border-border bg-muted/30 p-3">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="truncate text-sm font-medium">{urlInput || demoSite.url}</span>
              </div>

              <div className="mb-4 text-center">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                  <svg className="absolute h-full w-full -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="8"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="8"
                      strokeDasharray={`${demoSite.score * 2.51} 251`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{demoSite.score}</div>
                    <div className="text-xs text-muted-foreground">Score</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-sm">
                <div className="rounded-xl bg-muted/30 p-2">
                  <div className="font-semibold">{demoSite.pagesScanned}</div>
                  <div className="text-xs text-muted-foreground">Pages</div>
                </div>
                <div className="rounded-xl bg-muted/30 p-2">
                  <div className="font-semibold">{issues.length}</div>
                  <div className="text-xs text-muted-foreground">Issues</div>
                </div>
              </div>

              <div className="mt-4 text-center text-xs text-muted-foreground">
                Last scan: {demoSite.lastScan}
              </div>
            </>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-lg lg:p-8">
          
          {/* Scan View */}
          {view === "scan" && (
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h2 className="mb-2 font-display text-2xl font-bold">Scan your website</h2>
              <p className="mb-8 max-w-md text-muted-foreground">
                Enter your website URL to scan for accessibility issues. We&apos;ll analyze your key pages and provide actionable fixes.
              </p>
              
              <div className="w-full max-w-md">
                <div className="mb-4 flex gap-2">
                  <Input
                    type="url"
                    placeholder="https://your-website.com"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    className="rounded-xl"
                    disabled={isScanning}
                  />
                  <Button
                    onClick={handleScan}
                    disabled={!urlInput.trim() || isScanning}
                    className="shrink-0 rounded-xl bg-primary px-6 text-primary-foreground hover:bg-primary/90"
                  >
                    {isScanning ? "Scanning..." : "Scan"}
                  </Button>
                </div>
                
                {isScanning && (
                  <div className="rounded-xl border border-border bg-muted/30 p-4">
                    <div className="mb-2 flex justify-between text-sm">
                      <span>Scanning pages...</span>
                      <span>{scanProgress}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div 
                        className="h-full rounded-full bg-primary transition-all duration-300"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </div>
                )}
                
                <p className="mt-4 text-xs text-muted-foreground">
                  Try: example-barbershop.com or any URL
                </p>
              </div>
            </div>
          )}

          {/* Dashboard View */}
          {view === "dashboard" && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold">Site Overview</h2>
                <Button variant="outline" size="sm" className="gap-2 rounded-full">
                  <RefreshCw className="h-4 w-4" />
                  Rescan
                </Button>
              </div>

              {/* Stats Cards */}
              <div className="mb-6 grid grid-cols-4 gap-3">
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-center">
                  <div className="text-2xl font-bold text-red-400">2</div>
                  <div className="text-xs text-muted-foreground">Critical</div>
                </div>
                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">2</div>
                  <div className="text-xs text-muted-foreground">Warnings</div>
                </div>
                <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">42</div>
                  <div className="text-xs text-muted-foreground">Passed</div>
                </div>
                <div className="rounded-2xl border border-border bg-muted/30 p-4 text-center">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-xs text-muted-foreground">Pages</div>
                </div>
              </div>

              {/* Pages Table */}
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-medium text-muted-foreground">Pages Scanned</h3>
                <div className="space-y-2">
                  {pages.map((page) => (
                    <div 
                      key={page.url}
                      className="flex items-center justify-between rounded-xl border border-border bg-muted/20 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold",
                          page.score >= 90 ? "bg-green-500/20 text-green-400" :
                          page.score >= 70 ? "bg-yellow-500/20 text-yellow-400" :
                          "bg-red-500/20 text-red-400"
                        )}>
                          {page.score}
                        </div>
                        <div>
                          <div className="text-sm font-medium">{page.name}</div>
                          <div className="text-xs text-muted-foreground">{page.url}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{page.issues} issues</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={() => setView("issues")}
className="flex-1 gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Eye className="h-4 w-4" />
                  View All Issues
                </Button>
                <Button
                  variant="outline"
                  onClick={handleGenerateStatement}
                  className="flex-1 gap-2 rounded-full"
                >
                  <FileText className="h-4 w-4" />
                  Generate Statement
                </Button>
              </div>
            </div>
          )}

          {/* Issues List View */}
          {view === "issues" && (
            <div>
              <div className="mb-6 flex items-center gap-3">
                <button 
                  onClick={() => setView("dashboard")}
                  className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <h2 className="font-display text-xl font-semibold">All Issues</h2>
              </div>

              <div className="mb-4 flex gap-2">
                <button className="rounded-full bg-red-500/20 px-3 py-1.5 text-sm font-medium text-red-400">
                  Critical (2)
                </button>
                <button className="rounded-full bg-yellow-500/20 px-3 py-1.5 text-sm font-medium text-yellow-400">
                  Warning (2)
                </button>
              </div>

              <div className="space-y-3">
                {issues.map((issue) => (
                  <button
                    key={issue.id}
                    onClick={() => {
                      setSelectedIssue(issue)
                      setView("issue-detail")
                    }}
                    className="flex w-full items-center gap-4 rounded-2xl border border-border bg-muted/20 p-4 text-left transition-all hover:border-primary/30 hover:bg-muted/40"
                  >
                    {issue.severity === "critical" ? (
                      <AlertCircle className="h-6 w-6 shrink-0 text-red-400" />
                    ) : (
                      <AlertTriangle className="h-6 w-6 shrink-0 text-yellow-400" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{issue.title}</span>
                        <span className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-medium",
                          issue.severity === "critical" 
                            ? "bg-red-500/20 text-red-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        )}>
                          {issue.count} occurrences
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">{issue.description}</div>
                      <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <Globe className="h-3 w-3" />
                        {issue.page}
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Issue Detail View */}
          {view === "issue-detail" && selectedIssue && (
            <div>
              <div className="mb-6 flex items-center gap-3">
                <button 
                  onClick={() => setView("issues")}
                  className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <h2 className="font-display text-xl font-semibold">Issue Details</h2>
              </div>

              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2">
                  {selectedIssue.severity === "critical" ? (
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                  )}
                  <span className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-medium",
                    selectedIssue.severity === "critical" 
                      ? "bg-red-500/20 text-red-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  )}>
                    {selectedIssue.severity}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{selectedIssue.title}</h3>
                <p className="mt-1 text-muted-foreground">{selectedIssue.description}</p>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-muted/30 p-3">
                  <div className="text-xs text-muted-foreground">Page</div>
                  <div className="flex items-center gap-1 font-medium">
                    <Globe className="h-4 w-4" />
                    {selectedIssue.page}
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-muted/30 p-3">
                  <div className="text-xs text-muted-foreground">Occurrences</div>
                  <div className="font-medium">{selectedIssue.count} elements</div>
                </div>
              </div>

              <div className="mb-4 rounded-xl border border-border bg-muted/30 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  Impact
                </div>
                <p className="text-sm text-muted-foreground">{selectedIssue.impact}</p>
              </div>

              <div className="mb-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-primary">
                  <Check className="h-4 w-4" />
                  How to Fix
                </div>
                <p className="text-sm">{selectedIssue.fix.description}</p>
              </div>

              <div className="mb-6 rounded-xl border border-border bg-black/50 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Code className="h-4 w-4" />
                  Code Example
                </div>
                <pre className="overflow-x-auto text-sm">
                  <code className="text-green-400">{selectedIssue.fix.code}</code>
                </pre>
              </div>

              <Button className="w-full gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Check className="h-4 w-4" />
                Mark as Fixed
              </Button>
            </div>
          )}

          {/* Statement Generating View */}
          {view === "statement" && (
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <h2 className="mb-2 font-display text-2xl font-bold">Generating Statement</h2>
              <p className="mb-8 max-w-md text-muted-foreground">
                Creating your accessibility statement based on scan results...
              </p>
              
              <div className="w-full max-w-xs">
                <div className="mb-2 flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{statementProgress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div 
                    className="h-full rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${statementProgress}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Statement Done View */}
          {view === "statement-done" && (
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                <Check className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="mb-2 font-display text-2xl font-bold">Statement Ready!</h2>
              <p className="mb-8 max-w-md text-muted-foreground">
                Your accessibility statement has been generated. Download it and add it to your website.
              </p>
              
              <div className="w-full max-w-md rounded-2xl border border-border bg-muted/30 p-4 text-left">
                <div className="mb-3 flex items-center gap-3">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-medium">accessibility-statement.pdf</div>
                    <div className="text-xs text-muted-foreground">Generated just now</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="gap-2 rounded-full">
                    <ExternalLink className="h-4 w-4" />
                    Preview
                  </Button>
                </div>
              </div>

              <Button 
                variant="ghost" 
                onClick={() => setView("dashboard")}
                className="mt-6 gap-2"
              >
                <ArrowRight className="h-4 w-4" />
                Back to Dashboard
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
