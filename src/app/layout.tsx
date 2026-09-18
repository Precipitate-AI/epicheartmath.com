import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Kalam, Architects_Daughter, JetBrains_Mono } from "next/font/google";
import { INSIGHT_COURSES } from "@/data/courses";
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

const SITE_URL = "https://epicheartmath.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-EHM2026BREATH";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const viewport: Viewport = {
  themeColor: "#a88868",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Epic HeartMath | 5.5s HRV Resonant Breath Pacer",
    template: "%s | Epic HeartMath",
  },
  description:
    "A distraction-free Heart Rate Variability (HRV) resonant breath pacer on handcrafted kraft paper by Bob Chugani. Pure 5.5s resonant frequency breathing (0.1 Hz) for nervous system coherence.",
  keywords: [
    "HeartMath",
    "HRV",
    "Heart Rate Variability",
    "Breath Pacer",
    "Resonant Frequency Breathing",
    "0.1 Hz Breathing",
    "Vagus Nerve Stimulation",
    "Bob Chugani",
    "Heart Coherence",
    "Autonomic Nervous System Regulation",
    "Coherent Breathing",
    "Mindfulness Pacer",
  ],
  authors: [{ name: "Bob Chugani", url: "https://www.linkedin.com/in/bobchugani" }],
  creator: "Bob Chugani",
  publisher: "EPIC Resilience",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Epic HeartMath | 5.5s HRV Resonant Breath Pacer",
    description:
      "A distraction-free Heart Rate Variability (HRV) resonant breath pacer on handcrafted kraft paper. 5.5s in, 5.5s out.",
    url: SITE_URL,
    siteName: "Epic HeartMath",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Epic HeartMath - Pure 5.5s Resonant Frequency Breath Pacer by Bob Chugani",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epic HeartMath | 5.5s HRV Breath Pacer",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Schema.org Structured Data
const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Epic HeartMath",
      url: SITE_URL,
      applicationCategory: "HealthApplication",
      operatingSystem: "All",
      browserRequirements: "Requires modern web browser with HTML5 Canvas/SVG support",
      description:
        "A distraction-free, full-screen Heart Rate Variability (HRV) resonant breath pacer with 5.5-second cycles (0.1 Hz) on handcrafted kraft paper texture.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@id": `${SITE_URL}/#bobchugani`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Epic HeartMath",
      description: "Distraction-free Heart Rate Variability (HRV) 5.5s breath pacer on handcrafted kraft paper.",
      publisher: {
        "@id": `${SITE_URL}/#org`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "EPIC Resilience",
      url: SITE_URL,
      founder: {
        "@id": `${SITE_URL}/#bobchugani`,
      },
      sameAs: [
        "https://precipitate.ai",
        "https://github.com/Precipitate-AI",
        "https://www.linkedin.com/in/bobchugani",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#bobchugani`,
      name: "Bob Chugani",
      jobTitle: "Certified HeartMath Mentor & Systems Architect",
      url: SITE_URL,
      sameAs: [
        "https://www.linkedin.com/in/bobchugani",
        "https://precipitate.ai",
        "https://insighttimer.com/bobchugani",
      ],
      description:
        "Certified HeartMath Mentor and applied linguist who designs autonomous AI systems and builds grounded human health protocols.",
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#courses`,
      name: "Insight Timer Courses by Bob Chugani",
      numberOfItems: INSIGHT_COURSES.length,
      itemListElement: INSIGHT_COURSES.map((course, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Course",
          name: course.title,
          description: course.description,
          url: course.url,
          inLanguage: course.lang,
          provider: {
            "@type": "Person",
            name: "Bob Chugani",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: course.avgRating,
            reviewCount: course.ratingsCount,
          },
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Resonant Frequency Breathing (0.1 Hz)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Resonant frequency breathing is paced respiration at approximately 5.5 to 6 breaths per minute (~0.1 Hz). At this frequency, respiration, blood pressure rhythms (Mayer waves), and heart rate variability (HRV) synchronize, maximizing vagal tone and parasympathetic activation.",
          },
        },
        {
          "@type": "Question",
          name: "How does the 5.5-second pacer create HeartMath coherence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Breathing at an even 5.5-second inhale and 5.5-second exhale rhythm engages the baroreflex mechanism, creating a smooth sinusoidal HRV pattern known as physiological coherence. This state optimizes cognitive function, emotional stability, and nervous system recovery.",
          },
        },
        {
          "@type": "Question",
          name: "Why is the interface designed on kraft paper without distractions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Epic HeartMath is intentionally stripped of digital noise, gamification, and intrusive popups. Handcrafted kraft paper textures and organic analog pacing allow the visual cortex to relax, providing an effortless somatic anchor for daily nervous system regulation.",
          },
        },
      ],
    },
  ],
};

// Consent Mode v2 Default
const CONSENT_DEFAULT = `(function(){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted',wait_for_update:500});})();`;

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
      <head>
        <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="antialiased text-[#231A12] selection:bg-[#C29F78]/40 min-h-screen relative overflow-x-hidden">
        {children}

        {/* Google Analytics 4 Script */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Google Tag Manager (if configured) */}
        {GTM_ID && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
