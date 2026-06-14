import { ImageResponse } from "next/og";

// Branded favicon — generated at build so the monogram renders crisply with a
// reliable font (no dependency on whatever font the browser has for SVG text).
export const size = { width: 32, height: 32 };
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
          background: "linear-gradient(150deg, #5a878b 0%, #3a5c60 100%)",
          color: "#ffffff",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: -1.2,
          borderRadius: 7,
        }}
      >
        DE
      </div>
    ),
    { ...size },
  );
}
