import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Syed Moin Uddin - Software Engineer";
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b", // zinc-950
          fontSize: 64,
          fontWeight: 600,
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "32px",
            padding: "80px",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            width: "90%",
            height: "85%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            Syed Moin Uddin
          </div>
          <div
            style={{
              fontSize: 42,
              color: "#A1A1AA", // zinc-400
              marginBottom: 60,
              maxWidth: "85%",
              lineHeight: 1.4,
            }}
          >
            Backend-focused software engineer who designs distributed systems, solves hard architectural problems, and builds products real users rely on.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 32px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#22c55e", // green-500
                }}
              />
              <span style={{ fontSize: 36, color: "#e4e4e7" }}>Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
