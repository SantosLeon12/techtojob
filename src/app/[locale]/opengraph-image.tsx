import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = SITE_NAME;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const symbol = await readFile(join(process.cwd(), "public/brand/symbol-negative.svg"));
  const symbolDataUrl = `data:image/svg+xml;base64,${symbol.toString("base64")}`;
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
      <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 92, fontWeight: 700, letterSpacing: -5 }}>
        {/* ImageResponse needs a native image element for the official SVG. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={symbolDataUrl} alt="" width={70} height={70} />
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
