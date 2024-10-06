import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ipdm",
  description: "documentation for ipdm: global data speeds at unprecedented speed and scale",
  openGraph: {
    title: "IPDM - Interplanetary Data Machine",
    description: "global data speeds at unprecedented speed and scale",
    url: "https://ipdm.tech",
    siteName: "IPDM",
    images: [
      {
        url: "https://ipdm.tech/assets/ipdm-w.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ipdm",
    description: "global data speeds at unprecedented speed and scale",
    images: ["https://ipdm.tech/assets/x.svg"],
    creator: "@ipdm_official",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased hide-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}