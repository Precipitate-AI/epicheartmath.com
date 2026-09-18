import type { Metadata } from "next";
import { Kalam, Architects_Daughter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const kalam = Kalam({
  weight: ["300", "400", "700"],
  variable: "--font-marker",
  subsets: ["latin"],
  display: "swap",
});

const architectsDaughter = Architects_Daughter({
  weight: "400",
  variable: "--font-sketch",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://epicheartmath.com"),
  title: {
    default: "Epic Heart Math | 5.5s HRV Breath Pacer",
    template: "%s | Epic Heart Math",
  },
  description:
    "A distraction-free Heart Rate Variability (HRV) resonant breath pacer by Bob Chugani. Pure 5.5s resonant frequency breathing on handcrafted kraft paper.",
  keywords: [
    "HeartMath",
    "HRV",
    "Heart Rate Variability",
    "Breath Pacer",
    "Resonant Breathing",
    "0.1 Hz Breathing",
    "Vagus Nerve Stimulation",
    "Bob Chugani",
    "Nervous System Regulation",
    "Coherence",
  ],
  authors: [{ name: "Bob Chugani", url: "https://precipitate.ai" }],
  creator: "Bob Chugani",
  publisher: "Precipitate.ai",
  openGraph: {
    title: "Epic Heart Math | 5.5s HRV Breath Pacer",
    description:
      "A distraction-free Heart Rate Variability (HRV) resonant breath pacer on handcrafted kraft paper. 5.5s in, 5.5s out.",
    url: "https://epicheartmath.com",
    siteName: "Epic Heart Math",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Epic Heart Math - Pure 5.5s Resonant Frequency Breath Pacer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epic Heart Math | 5.5s HRV Breath Pacer",
    description:
      "Distraction-free Heart Rate Variability (HRV) resonant breathing. 5.5s in, 5.5s out by Bob Chugani.",
    images: ["/og-image.png"],
    creator: "@bobchugani",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#a38363",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kalam.variable} ${architectsDaughter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased text-[#231A12] selection:bg-[#C29F78]/40 min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
