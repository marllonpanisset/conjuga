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
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#0a0a0c",
          color: "#f2f2f4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(148, 163, 184, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.09) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 72,
            right: 72,
            width: 300,
            height: 300,
            display: "flex",
            borderTop: "1px solid rgba(148, 163, 184, 0.24)",
            borderRight: "1px solid rgba(148, 163, 184, 0.24)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -5,
              right: -5,
              width: 9,
              height: 9,
              display: "flex",
              borderRadius: 9,
              background: "#4c6fff",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: 48,
            right: 48,
            bottom: 48,
            left: 48,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "44px 52px 48px",
            border: "1px solid rgba(148, 163, 184, 0.22)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 29,
              letterSpacing: "-0.04em",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                display: "flex",
                borderRadius: 10,
                background: "#4c6fff",
              }}
            />
            {siteConfig.name}
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 920,
              fontSize: 62,
              lineHeight: 1.06,
              letterSpacing: "-0.045em",
            }}
          >
            Engenharia digital para empresas de serviços
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: 180,
              height: 1,
              background: "#4c6fff",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
