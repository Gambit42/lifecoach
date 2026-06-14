import { ImageResponse } from "next/og";

// Social share card (Open Graph + Twitter). 1200×630 is the standard size.
export const alt =
  "David Estillore — strengths-based coaching for the quietly stuck";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(120% 120% at 100% 0%, #eef3f3 0%, #ffffff 55%)",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(150deg, #5a878b 0%, #3a5c60 100%)",
              color: "#fff",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            DE
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#527d81",
              fontWeight: 600,
            }}
          >
            The Honest Journeyman
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
              color: "#111827",
            }}
          >
            Coaching for the quietly stuck.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "#4b5563",
              maxWidth: 880,
            }}
          >
            A precise read on where you are — and a next move you can stand
            behind.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(17,24,39,0.12)",
            paddingTop: 28,
            fontSize: 26,
            color: "#111827",
          }}
        >
          <div style={{ fontWeight: 700 }}>David Estillore</div>
          <div style={{ color: "#527d81" }}>
            Gallup Certified Strengths Coach
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
