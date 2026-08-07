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
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* Brand */}
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.055em",
              color: "#F4F4F5",
            }}
          >
            {siteConfig.name.toUpperCase()}
          </div>

          <div
            style={{
              display: "flex",
              height: 34,
            }}
          />

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
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
