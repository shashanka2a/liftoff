import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://liftoff.design"),
  title: {
    default: "LIFTOFF™ OS — Strategic Product Studio",
    template: "%s | LIFTOFF™ OS"
  },
  description:
    "LIFTOFF™ is a strategic design and engineering studio crafting premium digital products, systems, and growth platforms for modern brands.",
  keywords: [
    "Next.js",
    "Tailwind CSS",
    "Product design",
    "Digital agency",
    "Design systems",
    "UI/UX",
    "Engineering",
    "Growth"
  ],
  authors: [{ name: "LIFTOFF™ Studio", url: "https://liftoff.design" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://liftoff.design",
    title: "LIFTOFF™ OS — Strategic Product Studio",
    description:
      "We build strategic digital products, systems, and growth platforms for modern brands.",
    siteName: "LIFTOFF™ OS",
    images: [
      {
        url: "https://liftoff.design/og.png",
        width: 1200,
        height: 630,
        alt: "LIFTOFF™ OS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@liftoff",
    creator: "@liftoff",
    title: "LIFTOFF™ OS — Strategic Product Studio",
    description:
      "We build strategic digital products, systems, and growth platforms for modern brands.",
    images: ["https://liftoff.design/og.png"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f2f2" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-[#F2F2F2] text-zinc-900 dark:bg-[#050505] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}


