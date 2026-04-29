import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { Breadcrumbs } from "@/components/dashboard/breadcrumbs"

export const metadata: Metadata = {
  title: {
    template: '%s | rootIT Dashboard',
    default: 'Dashboard | rootIT',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
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

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardNav user={user} profile={profile} />
      <main className="container mx-auto px-4 py-6 pb-24 md:py-8 md:pb-8">
        <Breadcrumbs />
        {children}
      </main>
    </div>
  )
}
