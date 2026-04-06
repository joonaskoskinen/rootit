export type Plan = 'free' | 'starter' | 'pro'

export interface Profile {
  id: string
  email: string
  full_name: string | null
  plan: Plan
  scan_count: number
  scan_limit: number
  created_at: string
  updated_at: string
}

export interface Scan {
  id: string
  user_id: string
  url: string
  status: 'pending' | 'completed' | 'failed'
  total_issues: number
  critical_count: number
  serious_count: number
  moderate_count: number
  minor_count: number
  created_at: string
  completed_at: string | null
}

export interface ScanIssue {
  id: string
  scan_id: string
  rule_id: string
  impact: 'critical' | 'serious' | 'moderate' | 'minor'
  description: string
  help_url: string | null
  html_snippet: string | null
  selector: string | null
  created_at: string
}

export interface ScanResult {
  scan: Scan
  issues: ScanIssue[]
}

export const PLAN_LIMITS: Record<Plan, number> = {
  free: 2,
  starter: -1, // unlimited
  pro: -1, // unlimited
}

export const PLAN_FEATURES: Record<Plan, string[]> = {
  free: ['2 total scans', 'Basic issue detection', 'WCAG 2.1 checks'],
  starter: ['Unlimited scans', 'Full issue detection', 'WCAG 2.1 & 2.2 checks', 'Email support'],
  pro: ['Unlimited scans', 'Full issue detection', 'WCAG 2.1 & 2.2 checks', 'Scan history', 'Scheduled monitoring', 'Priority support'],
}
