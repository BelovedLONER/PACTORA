import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "PACTORA — Agreements That Settle",
  description:
    "Global on-chain escrow platform built on Robinhood Chain. Secure transactions with anyone, anywhere. Agreements that settle.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    siteName: "PACTORA",
    title: "PACTORA — Agreements That Settle",
    description: "Secure transactions with anyone, anywhere. On-chain escrow for global agreements.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PACTORA — Agreements That Settle",
    description: "Secure transactions with anyone, anywhere.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full font-sans">
      <head>
        <link rel="icon" href="/logo.svg" />
        <meta name="theme-color" content="#0B1424" />
      </head>
      <body className="h-full min-h-sw">
        <Providers>
          <div className="flex flex-col h-full">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
