import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Accessibility } from "lucide-react"

function getErrorMessage(error: string | null, errorDescription: string | null): { title: string; description: string } {
  if (error === "otp_expired" || errorDescription?.includes("expired")) {
    return {
      title: "Link Expired",
      description: "Your confirmation link has expired. Please request a new one by signing up again or signing in."
    }
  }
  if (error === "access_denied") {
    return {
      title: "Access Denied",
      description: "The authentication request was denied. This may happen if the link was already used."
    }
  }
  return {
    title: "Authentication Error",
    description: "Something went wrong during authentication. Please try again."
  }
}

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; error_description?: string }>
}) {
  const params = await searchParams
  const { title, description } = getErrorMessage(params.error ?? null, params.error_description ?? null)

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            If you continue to have issues, please try signing up with a new account.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button asChild className="w-full">
            <Link href="/auth/login">Try signing in</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/auth/sign-up">Create new account</Link>
          </Button>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Accessibility className="h-4 w-4" />
            Return to AccessiScan
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
