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
  title: "Epic Heart Math | HRV Breath Pacer",
  description:
    "A distraction-free Heart Rate Variability (HRV) breath pacer by Bob Chugani. Pure 5.5s resonant frequency breathing on kraft paper.",
  openGraph: {
    title: "Epic Heart Math",
    description: "Pure HRV breath pacer on kraft paper. 5.5s in, 5.5s out.",
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
