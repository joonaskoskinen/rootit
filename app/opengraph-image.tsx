import { ImageResponse } from "next/og"

export const alt = "rootIT – verkkosivut, jotka kasvavat mukana"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "radial-gradient(circle at 0% 0%, rgba(114, 228, 203, 0.16), transparent 34%), #05080f",
        color: "#f4f7fb",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
        <span>root</span><span style={{ color: "#72e4cb" }}>IT</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 900 }}>
        <div style={{ display: "flex", fontSize: 64, lineHeight: 1.08, fontWeight: 700 }}>
          Verkkosivut, jotka kasvavat mukana.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#aeb8c8" }}>
          Ylläpito ja pienet muutokset samassa palvelussa.
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", fontSize: 22, color: "#72e4cb" }}>rootit.fi</div>
        <div style={{ display: "flex", borderRadius: 12, padding: "16px 24px", background: "#f7b49b", color: "#241711", fontSize: 22, fontWeight: 700 }}>
          Pyydä ilmainen sivustoarvio
        </div>
      </div>
    </div>,
    { ...size },
  )
}
