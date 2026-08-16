import { createClient } from "@/lib/supabase/server"
import { redirect, notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  ExternalLink, 
  AlertTriangle, 
  AlertCircle, 
  Info, 
  CheckCircle2,
  Clock
} from "lucide-react"
import type { Scan, ScanIssue } from "@/lib/types"

export default async function ScanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: scan } = await supabase
    .from("scans")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single()

  if (!scan) {
    notFound()
  }

  const { data: issues } = await supabase
    .from("scan_issues")
    .select("*")
    .eq("scan_id", id)
    .order("impact", { ascending: true })

  const typedScan = scan as Scan
  const typedIssues = (issues || []) as ScanIssue[]

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

  const impactOrder = { critical: 0, serious: 1, moderate: 2, minor: 3 }
  const sortedIssues = [...typedIssues].sort(
    (a, b) => impactOrder[a.impact] - impactOrder[b.impact]
  )

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight">Scan Results</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <ExternalLink className="h-3 w-3" />
            <a 
              href={typedScan.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline truncate max-w-md"
            >
              {typedScan.url}
            </a>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Scan Summary</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1">
                <Clock className="h-3 w-3" />
                {new Date(typedScan.created_at).toLocaleString()}
              </CardDescription>
            </div>
            {typedScan.total_issues === 0 ? (
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                No Issues Found
              </Badge>
            ) : (
              <Badge variant="destructive">
                {typedScan.total_issues} Issue{typedScan.total_issues !== 1 ? "s" : ""} Found
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-red-600">
                {typedScan.critical_count}
              </div>
              <div className="text-sm text-muted-foreground">Critical</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-amber-600">
                {typedScan.serious_count}
              </div>
              <div className="text-sm text-muted-foreground">Serious</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-yellow-600">
                {typedScan.moderate_count}
              </div>
              <div className="text-sm text-muted-foreground">Moderate</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-blue-600">
                {typedScan.minor_count}
              </div>
              <div className="text-sm text-muted-foreground">Minor</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Issues List */}
      {sortedIssues.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Accessibility Issues</CardTitle>
            <CardDescription>
              Issues found during the scan, sorted by severity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {sortedIssues.map((issue) => (
              <div
                key={issue.id}
                className={`rounded-lg border p-4 ${impactColors[issue.impact]}`}
              >
                <div className="flex items-start gap-3">
                  {impactIcons[issue.impact]}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">{issue.description}</span>
                      <Badge variant="outline">{issue.impact}</Badge>
                    </div>
                    {issue.help_url && (
                      <a
                        href={issue.help_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-2"
                      >
                        Learn how to fix
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    {issue.html_snippet && (
                      <pre className="mt-2 p-2 rounded bg-background/50 overflow-x-auto text-xs">
                        {issue.html_snippet}
                      </pre>
                    )}
                    {issue.selector && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        Selector: <code>{issue.selector}</code>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Empty state */}
      {typedIssues.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-green-100 p-4 mb-4 dark:bg-green-900">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold mb-1">Congratulations!</h3>
            <p className="text-sm text-muted-foreground">
              No accessibility issues were found on this page.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-center gap-4">
        <Button variant="outline" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard/scan">
            Run Another Scan
          </Link>
        </Button>
      </div>
    </div>
  )
}
