import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #B8A1FF 0%, #8156FF 50%, #5B2FD1 100%)",
          borderRadius: "14px",
          color: "white",
          fontSize: "42px",
          fontWeight: 800,
          letterSpacing: "-0.04em",
        }}
      >
        O
      </div>
    ),
    size
  );
}
