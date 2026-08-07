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
        fontFamily: "Arial",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Frame */}
      <div
        style={{
          position: "absolute",
          inset: 48,
          display: "flex",
<<<<<<< Updated upstream
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px",
          border: "1px solid rgba(255,255,255,.08)",
=======
          border: "1px solid rgba(255,255,255,.05)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 48,
          display: "flex",
          alignItems: "center",
          padding: "72px",
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            maxWidth: 820,
=======
            justifyContent: "center",
            alignItems: "flex-start",
>>>>>>> Stashed changes
          }}
        >
          <div
            style={{
              display: "flex",
<<<<<<< Updated upstream
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.055em",
=======
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.055em",
              color: "#F4F4F5",
>>>>>>> Stashed changes
            }}
          >
            Engenharia de software para empresas de serviços
          </div>

<<<<<<< Updated upstream
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
=======
          {/* Spacer */}
          <div
            style={{
              display: "flex",
              height: 34,
            }}
          />

          {/* Line 1 */}
          <div
            style={{
              display: "flex",
              fontSize: 50,
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              color: "rgba(244,244,245,.92)",
            }}
          >
            Engenharia de software
          </div>

          {/* Line 2 */}
          <div
            style={{
              display: "flex",
              marginTop: 6,
              fontSize: 50,
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              color: "rgba(244,244,245,.92)",
            }}
          >
            para empresas de serviços
>>>>>>> Stashed changes
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
