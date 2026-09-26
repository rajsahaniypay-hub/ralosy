import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Ralosy — Indian Tech, Education & Civic Empowerment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [display, body] = await Promise.all([
    readFile(join(process.cwd(), "src/fonts/BricolageGrotesque-ExtraBold.woff")),
    readFile(join(process.cwd(), "src/fonts/Figtree-SemiBold.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#EEF3F1",
          color: "#0F1C1A",
          padding: "68px 76px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 76,
              height: 76,
              background: "#0A3F3C",
              color: "#F7FAF8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Bricolage",
              fontSize: 52,
              fontWeight: 800,
            }}
          >
            R
          </div>
          <div
            style={{
              fontFamily: "Bricolage",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            Ralosy
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontFamily: "Bricolage",
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.92,
            }}
          >
            Indian Tech,
          </div>
          <div
            style={{
              fontFamily: "Bricolage",
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.92,
            }}
          >
            Education & Civic.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontFamily: "Figtree",
              fontSize: 28,
              fontWeight: 600,
              color: "#5A6B67",
            }}
          >
            ralosy.com
          </div>
          <div style={{ width: 120, height: 10, background: "#9A5410" }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: display, weight: 800, style: "normal" },
        { name: "Figtree", data: body, weight: 600, style: "normal" },
      ],
    },
  );
}
