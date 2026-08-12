import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Epic Heart Math | HRV Resonant Breath Pacer & Personal Hub",
  description:
    "A distraction-free Heart Rate Variability (HRV) resonant breath pacer and personal hub by Bob Chugani. Train nervous system coherence, baroreflex balance, and mental clarity.",
  keywords: [
    "Heart Rate Variability",
    "HRV",
    "HeartMath",
    "Breath Pacer",
    "Resonant Frequency Breathing",
    "Bob Chugani",
    "Autonomic Coherence",
  ],
  authors: [{ name: "Bob Chugani", url: "https://epicheartmath.com" }],
  openGraph: {
    title: "Epic Heart Math | Resonant Breath Pacer",
    description:
      "Distraction-free HRV resonant breathing (5.5s in, 5.5s out) on tactile kraft paper. Reconnect with nervous system balance.",
    url: "https://epicheartmath.com",
    siteName: "Epic Heart Math",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caveat.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased text-[#2C2621] selection:bg-[#C5B091]/40 min-h-screen relative font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
