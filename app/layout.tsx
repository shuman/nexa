import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXA Business Park | Premium Commercial Development in Dhaka",
  description:
    "NEXA Business Park is a modern commercial real estate development providing premium office and business spaces in a strategic Dhaka location. A landmark destination for businesses, investors, and entrepreneurs.",
  keywords: [
    "NEXA Business Park",
    "commercial real estate Dhaka",
    "premium office space",
    "Bashundhara commercial",
    "business park Bangladesh",
  ],
  authors: [{ name: "NEXA Land Owners Association" }],
  openGraph: {
    title: "NEXA Business Park",
    description:
      "A premium commercial development in Dhaka. A landmark destination for businesses, investors, and entrepreneurs.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
