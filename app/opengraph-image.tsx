import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.openGraphImage.alt;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#08090A",
        color: "#F4F4F5",
        fontFamily: "sans-serif",
      }}
    >
      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Frame */}
      <div
        style={{
          position: "absolute",
          inset: 48,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px",
          border: "1px solid rgba(255,255,255,.08)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.18em",
            color: "rgba(244,244,245,.72)",
          }}
        >
          {siteConfig.name.toUpperCase()}
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 820,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.055em",
            }}
          >
            Engenharia de software para empresas de serviços
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 34,
              fontSize: 30,
              lineHeight: 1.45,
              color: "rgba(244,244,245,.66)",
            }}
          >
            <span>Organizamos processos.</span>
            <span>Fortalecemos a presença digital.</span>
            <span>Preparamos empresas para evoluir.</span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            fontSize: 22,
            color: "rgba(244,244,245,.42)",
            letterSpacing: "0.06em",
          }}
        >
          <span>conjuga.com.br</span>

          <span>Brasil · 2026</span>
        </div>
      </div>
    </div>,
    size,
  );
}
