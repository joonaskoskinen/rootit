"use client"

import { useEffect, useRef } from "react"

/**
 * Ambient root/node -verkosto Heron taustalle.
 * Jatkaa logon ja phone-mockupin visuaalista kieltä: solmut + yhteydet,
 * hitaasti ajelehtien. Tarkoituksella hillitty — yksi harkittu efekti,
 * ei huomion vievä.
 *
 * Kunnioittaa prefers-reduced-motion: piirtää tällöin vain staattisen kehyksen.
 */

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const NODE_COUNT = 26
const LINK_DISTANCE = 150
const TEAL = "232, 168, 138" // soft peach — approx oklch(0.82 0.09 35) for canvas
const VIOLET = "232, 158, 168" // soft rose — approx oklch(0.83 0.08 10) for canvas

export function HeroAmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let nodes: Node[] = []
    let animationFrame: number
    let mouseX = 0
    let mouseY = 0
    let hasPointer = false

    function resize() {
      const parent = canvas!.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function initNodes() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.4 + 1,
      }))
    }

    function step() {
      ctx!.clearRect(0, 0, width, height)

      // Update positions (skip if reduced motion — static composition)
      if (!reduceMotion) {
        for (const n of nodes) {
          n.x += n.vx
          n.y += n.vy

          // subtle drift toward pointer for depth, very soft pull
          if (hasPointer) {
            const dx = mouseX - n.x
            const dy = mouseY - n.y
            const dist = Math.hypot(dx, dy)
            if (dist < 260 && dist > 0) {
              n.x += (dx / dist) * 0.04
              n.y += (dy / dist) * 0.04
            }
          }

          if (n.x < -20) n.x = width + 20
          if (n.x > width + 20) n.x = -20
          if (n.y < -20) n.y = height + 20
          if (n.y > height + 20) n.y = -20
        }
      }

      // Draw links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DISTANCE) {
            const opacity = (1 - dist / LINK_DISTANCE) * 0.26
            ctx!.strokeStyle = `rgba(${TEAL}, ${opacity})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach((n, i) => {
        const color = i % 5 === 0 ? VIOLET : TEAL
        ctx!.fillStyle = `rgba(${color}, 0.7)`
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fill()
      })

      if (!reduceMotion) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      hasPointer = true
    }
    function handlePointerLeave() {
      hasPointer = false
    }

    resize()
    initNodes()
    step()

    window.addEventListener("resize", resize)
    canvas.addEventListener("pointermove", handlePointerMove)
    canvas.addEventListener("pointerleave", handlePointerLeave)

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("pointermove", handlePointerMove)
      canvas.removeEventListener("pointerleave", handlePointerLeave)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-70"
      aria-hidden="true"
    />
  )
}
