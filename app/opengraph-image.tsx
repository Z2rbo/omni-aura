import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OMNI AURA — твой ИИ-помощник для тренировок";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#F7F6F0",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Aurora blob */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-150px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(184,161,255,0.55), rgba(129,86,255,0.25), transparent 70%)",
            filter: "blur(20px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-240px",
            left: "-180px",
            width: "620px",
            height: "620px",
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(91,47,209,0.5), transparent 70%)",
            filter: "blur(20px)",
            display: "flex",
          }}
        />

        {/* Top: brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #B8A1FF 0%, #8156FF 50%, #5B2FD1 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 40px rgba(129,86,255,0.4)",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "36px",
                fontWeight: 800,
              }}
            >
              O
            </span>
          </div>
          <span
            style={{
              fontSize: "34px",
              fontWeight: 800,
              color: "#17151F",
              letterSpacing: "-0.02em",
            }}
          >
            OMNI{" "}
            <span
              style={{
                background:
                  "linear-gradient(110deg, #B8A1FF 0%, #8156FF 45%, #5B2FD1 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              AURA
            </span>
          </span>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              padding: "8px 18px",
              borderRadius: "999px",
              background: "rgba(129,86,255,0.1)",
              border: "1px solid rgba(129,86,255,0.2)",
              fontSize: "16px",
              fontWeight: 700,
              color: "#5B2FD1",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ФТМИ ИТМО · 2026
          </div>
        </div>

        {/* Center: headline */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <div
            style={{
              fontSize: "82px",
              fontWeight: 800,
              color: "#17151F",
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>Твой личный&nbsp;</span>
            <span
              style={{
                background:
                  "linear-gradient(110deg, #B8A1FF 0%, #8156FF 45%, #5B2FD1 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              ИИ-помощник
            </span>
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#4A4557",
              maxWidth: "900px",
              lineHeight: 1.3,
              display: "flex",
            }}
          >
            Computer vision разбирает технику в реальном времени, ИИ составляет
            план под цели. Без тренеров, без осуждения.
          </div>
        </div>

        {/* Bottom: chips */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {["93% точность CV", "60 FPS on-device", "Русский стек"].map(
            (chip) => (
              <div
                key={chip}
                style={{
                  display: "flex",
                  padding: "14px 24px",
                  borderRadius: "999px",
                  background: "white",
                  border: "1px solid rgba(23,21,31,0.08)",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#17151F",
                  boxShadow: "0 4px 16px rgba(23,21,31,0.04)",
                }}
              >
                {chip}
              </div>
            )
          )}
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              fontSize: "22px",
              fontWeight: 700,
              color: "#8156FF",
            }}
          >
            omni-aura.vercel.app →
          </div>
        </div>
      </div>
    ),
    size
  );
}
