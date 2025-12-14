import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://liftoff.design"),
  title: {
    default: "LIFTOFF™ — Strategic Digital Product Design & Development Studio",
    template: "%s | LIFTOFF™"
  },
  description:
    "LIFTOFF™ is a strategic design and engineering studio crafting premium digital products, systems, and growth platforms for modern brands. Expert UI/UX design, web development, and product strategy.",
  keywords: [
    "digital product design",
    "UI/UX design agency",
    "product design studio",
    "web development",
    "design systems",
    "product strategy",
    "SaaS design",
    "startup design",
    "enterprise design",
    "growth platforms",
    "design engineering",
    "premium digital products"
  ],
  authors: [{ name: "LIFTOFF™ Studio", url: "https://liftoff.design" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://liftoff.design",
    title: "LIFTOFF™ — Strategic Digital Product Design & Development Studio",
    description:
      "Strategic design and engineering studio crafting premium digital products, systems, and growth platforms. Expert UI/UX design, web development, and product strategy for startups and enterprises.",
    siteName: "LIFTOFF™",
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
    title: "LIFTOFF™ — Strategic Digital Product Design & Development Studio",
    description:
      "Strategic design and engineering studio crafting premium digital products, systems, and growth platforms. Expert UI/UX design, web development, and product strategy.",
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
      <body className="antialiased bg-[#F2F2F2] text-zinc-900 dark:bg-[#050505] dark:text-white">
        {children}
      </body>
    </html>
  );
}



