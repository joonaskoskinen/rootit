import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Scan, 
  AlertTriangle, 
  AlertCircle, 
  Info, 
  CheckCircle2,
  ArrowRight,
  Crown,
  Clock,
  ExternalLink
} from "lucide-react"
import type { Profile, Scan as ScanType } from "@/lib/types"

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single()

  const { data: scans } = await supabase
    .from("scans")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(10)

  const recentScans = (scans || []) as ScanType[]
  const typedProfile = profile as Profile | null

  const canScan = typedProfile?.plan !== "free" || (typedProfile?.scan_count || 0) < (typedProfile?.scan_limit || 2)
  const scansUsed = typedProfile?.scan_count || 0
  const scansLimit = typedProfile?.scan_limit || 2
  const isUnlimited = typedProfile?.plan !== "free"

  // Calculate totals from recent scans
  const totalIssues = recentScans.reduce((acc, scan) => acc + scan.total_issues, 0)
  const criticalIssues = recentScans.reduce((acc, scan) => acc + scan.critical_count, 0)
  const seriousIssues = recentScans.reduce((acc, scan) => acc + scan.serious_count, 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back{typedProfile?.full_name ? `, ${typedProfile.full_name.split(" ")[0]}` : ""}! Here&apos;s your accessibility overview.
          </p>
        </div>
        <Button asChild size="lg" disabled={!canScan}>
          <Link href="/dashboard/scan">
            <Scan className="mr-2 h-5 w-5" />
            New Scan
          </Link>
        </Button>
      </div>

      {/* Usage & Plan Card */}
      <Card className={typedProfile?.plan === "free" ? "border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/20" : ""}>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">
              {isUnlimited ? "Your Plan" : "Scan Usage"}
            </CardTitle>
            <Badge variant={typedProfile?.plan === "pro" ? "default" : "secondary"}>
              {typedProfile?.plan === "pro" && <Crown className="mr-1 h-3 w-3" />}
              {typedProfile?.plan?.charAt(0).toUpperCase()}{typedProfile?.plan?.slice(1)} Plan
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {isUnlimited ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Unlimited scans available</span>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Scans used</span>
                <span className="font-medium">{scansUsed} / {scansLimit}</span>
              </div>
              <Progress value={(scansUsed / scansLimit) * 100} className="h-2" />
              {!canScan && (
                <div className="flex items-center justify-between pt-2">
                  <p className="text-sm text-amber-600 dark:text-amber-400">
                    You&apos;ve used all your free scans
                  </p>
                  <Button size="sm" asChild>
                    <Link href="/#pricing">
                      Upgrade
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Scans</CardTitle>
            <Scan className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentScans.length}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalIssues}</div>
            <p className="text-xs text-muted-foreground">Across all scans</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Critical Issues</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{criticalIssues}</div>
            <p className="text-xs text-muted-foreground">Need immediate attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Serious Issues</CardTitle>
            <Info className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">{seriousIssues}</div>
            <p className="text-xs text-muted-foreground">Should be fixed soon</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Scans */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Scans</CardTitle>
          <CardDescription>Your latest accessibility scans and their results</CardDescription>
        </CardHeader>
        <CardContent>
          {recentScans.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-muted p-4 mb-4">
                <Scan className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-1">No scans yet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Start by scanning a website to check for accessibility issues
              </p>
              <Button asChild>
                <Link href="/dashboard/scan">
                  <Scan className="mr-2 h-4 w-4" />
                  Run Your First Scan
                </Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {recentScans.map((scan) => (
                <div
                  key={scan.id}
                  className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium truncate max-w-[200px] sm:max-w-[300px]">
                        {scan.url}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {new Date(scan.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2">
                      {scan.critical_count > 0 && (
                        <Badge variant="destructive" className="gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          {scan.critical_count}
                        </Badge>
                      )}
                      {scan.serious_count > 0 && (
                        <Badge variant="secondary" className="gap-1 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                          {scan.serious_count}
                        </Badge>
                      )}
                      {scan.total_issues === 0 && (
                        <Badge variant="secondary" className="gap-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                          <CheckCircle2 className="h-3 w-3" />
                          Clean
                        </Badge>
                      )}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/dashboard/scan/${scan.id}`}>
                        View
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
