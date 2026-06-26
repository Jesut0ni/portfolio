import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Jesutoni Omiye — Product Manager & Founder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const portrait = await readFile(
    join(process.cwd(), "public", "og-portrait.jpg")
  );
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#1c1a16",
          color: "#f4efe6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "72px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#3a9b6e",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 99,
                background: "#3a9b6e",
              }}
            />
            Product Manager & Founder
          </div>

          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.02,
              marginTop: 26,
              letterSpacing: -3,
            }}
          >
            Jesutoni Omiye
          </div>

          <div
            style={{
              fontSize: 34,
              color: "#cfc8ba",
              marginTop: 26,
              lineHeight: 1.32,
              maxWidth: 560,
            }}
          >
            I build AI products that make complicated things simple.
          </div>

          <div style={{ fontSize: 24, color: "#857d6f", marginTop: 44 }}>
            jesutoniomiye.vercel.app
          </div>
        </div>

        <div style={{ display: "flex", width: 440, position: "relative" }}>
          <img
            src={portraitSrc}
            width={440}
            height={630}
            style={{ width: 440, height: 630, objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 80,
              height: 630,
              background: "linear-gradient(90deg, #1c1a16, rgba(28,26,22,0))",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
