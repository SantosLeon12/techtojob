import { ImageResponse } from "next/og";
import messages from "@/messages/es.json";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE_NAME}: ${messages.foundation.description}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "88px 100px",
        backgroundColor: "#2f3436",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 72,
          height: 10,
          marginBottom: 54,
          borderRadius: 5,
          backgroundColor: "#84c0bf",
        }}
      />
      <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -5 }}>
        {SITE_NAME}
      </div>
      <div
        style={{
          display: "flex",
          maxWidth: 900,
          marginTop: 32,
          color: "#84c0bf",
          fontSize: 37,
          lineHeight: 1.35,
        }}
      >
        {messages.foundation.description.replace(/\.$/, "")}
      </div>
    </div>,
    size,
  );
}
