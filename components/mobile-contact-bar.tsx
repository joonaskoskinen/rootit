"use client"

import { RequestReviewButton } from "@/components/request-review-button"

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/95 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.24)] backdrop-blur-md sm:hidden safe-area-bottom">
      <RequestReviewButton
        label="Ota yhteyttä"
        className="w-full rounded-xl py-3.5 text-base"
      />
      <p className="sr-only">Avaa yhteydenottolomake</p>
    </div>
  )
}

export function MobileContactBarSpacer() {
  return <div aria-hidden="true" className="h-20 sm:hidden" />
}
