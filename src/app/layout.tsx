import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaqrFlow | The Agentic Operating System for Enterprise AI",
  description:
    "SaqrFlow is the enterprise artificial intelligence software company delivering the agentic operating system, applications, and platform for real-time decision making.",
  icons: {
    icon: "/brand/saqrflow-mark.png",
  },
  openGraph: {
    title: "SaqrFlow | The Agentic Operating System for Enterprise AI",
    description:
      "Turn operational data into real-time decision making and autonomous execution at scale.",
    url: "https://saqrflow.com",
    siteName: "SaqrFlow",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
