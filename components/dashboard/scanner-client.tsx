"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Scan, 
  Loader2, 
  AlertTriangle, 
  AlertCircle, 
  Info, 
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Lock
} from "lucide-react"
import type { Plan } from "@/lib/types"

interface ScannerClientProps {
  canScan: boolean
  scansRemaining: number
  plan: Plan
  userId: string
}

interface ScanResult {
  url: string
  violations: Array<{
    id: string
    impact: "critical" | "serious" | "moderate" | "minor"
    description: string
    help: string
    helpUrl: string
    nodes: Array<{
      html: string
      target: string[]
    }>
  }>
  passes: number
  incomplete: number
}

export function ScannerClient({ canScan, scansRemaining, plan, userId }: ScannerClientProps) {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<ScanResult | null>(null)
  const router = useRouter()

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!canScan) {
      setError("You've reached your scan limit. Please upgrade to continue scanning.")
      return
    }

    setError(null)
    setResult(null)
    setLoading(true)

    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, userId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to scan website")
      }

      setResult(data)
      router.refresh() // Refresh to update scan count
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const impactColors = {
    critical: "text-red-600 bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-900",
    serious: "text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-900",
    moderate: "text-yellow-600 bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-900",
    minor: "text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-900",
  }

  const impactIcons = {
    critical: <AlertTriangle className="h-4 w-4" />,
    serious: <AlertCircle className="h-4 w-4" />,
    moderate: <Info className="h-4 w-4" />,
    minor: <Info className="h-4 w-4" />,
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Accessibility Scanner</h1>
        <p className="text-muted-foreground">
          Enter a URL to scan for WCAG accessibility issues
        </p>
      </div>

      {/* Scan Limit Warning */}
      {!canScan && (
        <Alert variant="destructive">
          <Lock className="h-4 w-4" />
          <AlertTitle>Scan limit reached</AlertTitle>
          <AlertDescription className="flex items-center justify-between">
            <span>You&apos;ve used all your free scans. Upgrade to continue scanning.</span>
            <Button size="sm" variant="outline" asChild className="ml-4">
              <Link href="/#pricing">
                View Plans
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Remaining scans indicator */}
      {canScan && plan === "free" && (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Free Plan</AlertTitle>
          <AlertDescription>
            You have {scansRemaining} scan{scansRemaining !== 1 ? "s" : ""} remaining. 
            <Link href="/#pricing" className="text-primary hover:underline ml-1">
              Upgrade for unlimited scans
            </Link>
          </AlertDescription>
        </Alert>
      )}

      {/* Scanner Form */}
      <Card>
        <CardHeader>
          <CardTitle>Scan a Website</CardTitle>
          <CardDescription>
            We&apos;ll analyze the page for WCAG 2.1 accessibility violations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleScan} className="flex gap-4">
            <Input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              disabled={loading || !canScan}
              className="flex-1"
            />
            <Button type="submit" disabled={loading || !canScan}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <Scan className="mr-2 h-4 w-4" />
                  Scan
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Error Display */}
      {error && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Summary Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Scan Results</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <ExternalLink className="h-3 w-3" />
                    {result.url}
                  </CardDescription>
                </div>
                {result.violations.length === 0 ? (
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    No Issues Found
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    {result.violations.length} Issue{result.violations.length !== 1 ? "s" : ""} Found
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-red-600">
                    {result.violations.filter(v => v.impact === "critical").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Critical</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-amber-600">
                    {result.violations.filter(v => v.impact === "serious").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Serious</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-yellow-600">
                    {result.violations.filter(v => v.impact === "moderate").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Moderate</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-blue-600">
                    {result.violations.filter(v => v.impact === "minor").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Minor</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Violations List */}
          {result.violations.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Issues</CardTitle>
                <CardDescription>
                  Issues are sorted by severity. Click each to see affected elements.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {result.violations
                  .sort((a, b) => {
                    const order = { critical: 0, serious: 1, moderate: 2, minor: 3 }
                    return order[a.impact] - order[b.impact]
                  })
                  .map((violation, index) => (
                    <details
                      key={`${violation.id}-${index}`}
                      className={`rounded-lg border p-4 ${impactColors[violation.impact]}`}
                    >
                      <summary className="cursor-pointer flex items-center gap-3 font-medium">
                        {impactIcons[violation.impact]}
                        <span className="flex-1">{violation.description}</span>
                        <Badge variant="outline" className="ml-auto">
                          {violation.impact}
                        </Badge>
                      </summary>
                      <div className="mt-4 space-y-3 text-sm">
                        <p>{violation.help}</p>
                        {violation.helpUrl && (
                          <a
                            href={violation.helpUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            Learn more
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        {violation.nodes.length > 0 && (
                          <div className="mt-3">
                            <p className="font-medium mb-2">
                              Affected elements ({violation.nodes.length}):
                            </p>
                            <div className="space-y-2">
                              {violation.nodes.slice(0, 5).map((node, nodeIndex) => (
                                <pre
                                  key={nodeIndex}
                                  className="p-2 rounded bg-background/50 overflow-x-auto text-xs"
                                >
                                  {node.html}
                                </pre>
                              ))}
                              {violation.nodes.length > 5 && (
                                <p className="text-muted-foreground">
                                  And {violation.nodes.length - 5} more...
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </details>
                  ))}
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  )
}
