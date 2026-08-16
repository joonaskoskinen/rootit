"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    $crisp: unknown[]
    CRISP_WEBSITE_ID: string
  }
}

export function CrispChat() {
  useEffect(() => {
    // Check if Crisp ID is configured
    const crispId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
    if (!crispId) {
      console.log("[v0] Crisp chat: No CRISP_WEBSITE_ID configured")
      return
    }

    // Initialize Crisp
    window.$crisp = []
    window.CRISP_WEBSITE_ID = crispId

    // Load Crisp script
    const script = document.createElement("script")
    script.src = "https://client.crisp.chat/l.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}
