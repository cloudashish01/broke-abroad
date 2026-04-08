import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Broke Abroad | Budget Travel Guides",
    template: "%s | Broke Abroad",
  },
  description: "Budget travel guides, destination tips, and money-saving hacks for travelers who want to see the world without going broke.",
  openGraph: {
    siteName: "Broke Abroad",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J39N5J7XRW" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J39N5J7XRW');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0f]">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
