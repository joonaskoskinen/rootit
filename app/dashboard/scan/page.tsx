import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { ScannerClient } from "@/components/dashboard/scanner-client"
import type { Profile } from "@/lib/types"

export default async function ScanPage() {
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

  const typedProfile = profile as Profile | null
  const canScan = typedProfile?.plan !== "free" || (typedProfile?.scan_count || 0) < (typedProfile?.scan_limit || 2)
  const scansRemaining = typedProfile?.plan === "free" 
    ? Math.max(0, (typedProfile?.scan_limit || 2) - (typedProfile?.scan_count || 0))
    : -1 // unlimited

  return (
    <div className="max-w-4xl mx-auto">
      <ScannerClient 
        canScan={canScan} 
        scansRemaining={scansRemaining}
        plan={typedProfile?.plan || "free"}
        userId={user.id}
      />
    </div>
  )
}
