import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Set NEXT_PUBLIC_SITE_URL in the deploy env (e.g. Vercel) to the canonical
// domain so OG images and canonical URLs resolve to absolute paths.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://davidestillore.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "David Estillore — Coaching for the quietly stuck",
    template: "%s · David Estillore",
  },
  description:
    "Strengths-based coaching for the quietly stuck. A precise read on where you are and a next move you can stand behind — guided by CliftonStrengths.",
  applicationName: "David Estillore Coaching",
  authors: [{ name: "David Estillore" }],
  creator: "David Estillore",
  keywords: [
    "life coach",
    "career coaching",
    "strengths-based coaching",
    "CliftonStrengths",
    "Gallup Certified Strengths Coach",
    "career change",
    "purpose coaching",
    "David Estillore",
    "The Honest Journeyman",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "David Estillore",
    title: "David Estillore — Coaching for the quietly stuck",
    description:
      "Strengths-based coaching for the quietly stuck. A precise read on where you are and a next move you can stand behind.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Estillore — Coaching for the quietly stuck",
    description:
      "Strengths-based coaching for the quietly stuck. A precise read on where you are and a next move you can stand behind.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", "font-sans", inter.variable)}>
      <body>{children}</body>
    </html>
  );
}
