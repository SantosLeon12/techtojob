import type { Metadata } from "next";
import { Sora } from "next/font/google";
import messages from "@/messages/es.json";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Development URL; replace with the production origin before deployment.
const DEVELOPMENT_SITE_URL = "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(DEVELOPMENT_SITE_URL),
  title: {
    default: messages.metadata.title,
    template: "%s | TechToJob",
  },
  description: messages.metadata.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={sora.variable}>
      <body>{children}</body>
    </html>
  );
}
