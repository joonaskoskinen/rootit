"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function LiveChatPreview() {
  const { t } = useLanguage()
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const messages = [
    { id: 1, sender: "user", key: "chat.msg1" },
    { id: 2, sender: "support", key: "chat.msg2" },
    { id: 3, sender: "user", key: "chat.msg3" },
    { id: 4, sender: "support", key: "chat.msg4" },
  ]

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const isNextSupport = messages[visibleMessages]?.sender === "support"
      
      if (isNextSupport) {
        setIsTyping(true)
        const typingTimer = setTimeout(() => {
          setIsTyping(false)
          setVisibleMessages(prev => prev + 1)
        }, 1500)
        return () => clearTimeout(typingTimer)
      } else {
        const timer = setTimeout(() => {
          setVisibleMessages(prev => prev + 1)
        }, 1200)
        return () => clearTimeout(timer)
      }
    } else {
      // Reset after all messages shown
      const resetTimer = setTimeout(() => {
        setVisibleMessages(0)
      }, 4000)
      return () => clearTimeout(resetTimer)
    }
  }, [visibleMessages, messages.length])

  return (
    <div className="w-full max-w-sm">
      {/* Chat window */}
      <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/80 shadow-2xl backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-border/50 bg-muted/30 px-4 py-3">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
              R
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-green-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">rootIT</p>
            <p className="text-xs text-muted-foreground">{t("chat.online")}</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex h-64 flex-col gap-3 overflow-hidden p-4">
          {messages.slice(0, visibleMessages).map((message, index) => (
            <div
              key={message.id}
              className={cn(
                "flex animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
                message.sender === "user" ? "justify-end" : "justify-start"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                  message.sender === "user"
                    ? "rounded-br-md bg-primary text-primary-foreground"
                    : "rounded-bl-md bg-muted text-foreground"
                )}
              >
                {t(message.key)}
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start animate-in fade-in-0 slide-in-from-bottom-2 duration-200">
              <div className="flex gap-1 rounded-2xl rounded-bl-md bg-muted px-4 py-3">
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:0ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:300ms]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
