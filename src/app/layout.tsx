import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rescue Pharma - Trusted Medical Solutions",
  description: "Providing high-quality pharmaceutical products with trust and care.",
  keywords: "pharmacy, medical supplies, healthcare, pharmaceutical products",
  metadataBase: new URL("https://www.rescuepharma.in"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0066ff",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Rescue Pharma - Trusted Medical Solutions",
    description: "Providing high-quality pharmaceutical products with trust and care.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rescue Pharma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rescue Pharma - Trusted Medical Solutions",
    description: "Providing high-quality pharmaceutical products with trust and care.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased min-h-screen w-full bg-background text-foreground">
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
