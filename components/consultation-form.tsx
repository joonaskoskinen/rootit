"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ConsultationFormProps {
  children: React.ReactNode
  className?: string
}

export function ConsultationForm({ children, className }: ConsultationFormProps) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      website: formData.get("website") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      description: formData.get("description") as string,
    }

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      setIsSubmitted(true)
    } catch {
      setError(t("form.error"))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      // Reset form state when closing
      setTimeout(() => {
        setIsSubmitted(false)
        setError(null)
      }, 200)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <span className={className}>{children}</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {isSubmitted ? (
          <div className="flex flex-col items-center py-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <DialogTitle className="mb-2 text-xl font-bold">
              {t("form.success.title")}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t("form.success.desc")}
            </DialogDescription>
            <Button
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full"
            >
              {t("form.success.close")}
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                Katsotaan yhdessä, mitä sivullasi kannattaa parantaa
              </DialogTitle>
              <DialogDescription>
                Lähetä sivustosi osoite. Käyn sen läpi ja nostan esiin 2–3 konkreettista asiaa, joita parantaisin ensin.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="website">Sivustosi osoite</Label>
                <Input id="website" name="website" type="url" placeholder="https://yrityksesi.fi" className="rounded-xl" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t("form.email")} *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t("form.email.placeholder")}
                  className="rounded-xl"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">{t("form.phone")}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t("form.phone.placeholder")}
                  className="rounded-xl"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">{t("form.description")}</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder={t("form.description.placeholder")}
                  className="min-h-24 rounded-xl resize-none"
                />
              </div>
              
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("form.submitting")}
                  </>
                ) : (
                  <>
                    {t("form.submit")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
