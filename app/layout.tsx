import type { Metadata } from "next";
import { generateSEOMetadata } from "@/utils/seo";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./mainwebsite.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = generateSEOMetadata({
  title: "Siama - Main Website",
  description: "Welcome to Siama - Your trusted platform for excellence",
  keywords: ["siama", "platform", "services", "solutions"],
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://siama.com",
  siteName: "Siama",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

