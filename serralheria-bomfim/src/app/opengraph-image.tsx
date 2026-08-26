import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — soluções em serralheria industrial`;
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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#17191B",
          backgroundImage:
            "radial-gradient(circle at 85% 30%, rgba(30,107,44,0.35), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 10,
              backgroundColor: "#1E6B2C",
              color: "#F5F4F0",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            SB
          </div>
          <div style={{ display: "flex", flexDirection: "column", color: "#F5F4F0" }}>
            <span style={{ fontSize: 28, fontWeight: 700, textTransform: "uppercase" }}>
              Serralheria
            </span>
            <span style={{ fontSize: 18, color: "#A4A9AE" }}>Bomfim</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#F5F4F0",
            fontSize: 56,
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          <span>Soluções em</span>
          <span style={{ color: "#1E6B2C" }}>serralheria industrial</span>
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 24, color: "#CBCED1" }}>
          Estruturas metálicas · Porta-paletes · Portões automatizados · {siteConfig.address.area}
        </div>
      </div>
    ),
    { ...size },
  );
}
