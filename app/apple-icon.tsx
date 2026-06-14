import { ImageResponse } from "next/og";

// Apple touch icon (home-screen). Full-bleed background — iOS applies its own
// rounded mask, so we don't round the corners ourselves.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(150deg, #5a878b 0%, #3a5c60 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -5 }}>DE</div>
        <div
          style={{
            marginTop: 6,
            fontSize: 14,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.82)",
          }}
        >
          Coaching
        </div>
      </div>
    ),
    { ...size },
  );
}
