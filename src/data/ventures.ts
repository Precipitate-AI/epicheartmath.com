export interface Venture {
  id: string;
  kicker: string;
  title: string;
  role: string;
  problem: string;
  whatWasBuilt: string[];
  result: string;
  stack: string[];
  link?: { label: string; href: string };
}

export const TELEMETRY = [
  { value: "197", label: "Scheduled jobs 24/7" },
  { value: "78", label: "Live integrations" },
  { value: "16", label: "Always-on services" },
  { value: "5", label: "Businesses run solo" },
];

export const VENTURES: Venture[] = [
  {
    id: "guestar",
    kicker: "CLIENT BUILD · AI SAAS",
    title: "An entire AI SaaS, built and run solo",
    role: "Sole Architect & Operator",
    problem: "A short-term-rental software company needed an end-to-end product—AI that auto-answers guest messages across Airbnb/VRBO/Direct—plus the marketing machine to sell it with no engineering team.",
    whatWasBuilt: [
      "Built full product: 288-file Next.js app, 177 API endpoints, 3 booking platform integrations, Stripe billing, multi-tenant",
      "AI that auto-answers guest messages with confidence scoring and self-building knowledge base",
      "20-pipeline automated marketing & growth machine (blog, SEO, cold email, social)",
    ],
    result: "A multi-tenant SaaS live in production, plus the entire growth engine—product and marketing department built and run by one person.",
    stack: ["Next.js", "TypeScript", "Stripe", "Pinecone", "PostgreSQL", "Inngest"],
    link: { label: "guestar.ai", href: "https://guestar.ai" },
  },
  {
    id: "quant-desk",
    kicker: "OWN VENTURE · AUTONOMOUS TRADING",
    title: "A quant desk running live across multiple venues",
    role: "Architect & Systems Engineer",
    problem: "Markets move 24/7 and no single operator can monitor smart-money flows, perps, and prediction markets concurrently without automated execution and risk guards.",
    whatWasBuilt: [
      "Fleet of autonomous strategies executing live across perpetual futures (Hyperliquid) and prediction markets (Polymarket)",
      "Whale-tracking intelligence watching large on-chain wallets to synthesize daily positioning briefs",
      "Token-gated streaming AI research chat grounded in real-time briefs",
      "Flock-locked scheduled jobs with per-job timeouts, health/anomaly alerts to phone, live ops dashboard",
    ],
    result: "Platform trading unattended 24/7 across multiple venues with real capital, plus a subscriber-facing research product.",
    stack: ["TypeScript", "Hyperliquid", "Polymarket", "Claude", "Upstash KV", "systemd", "Telegram"],
    link: { label: "automate.precipitate.ai", href: "https://automate.precipitate.ai" },
  },
  {
    id: "epic-supply",
    kicker: "OWN VENTURE · E-COMMERCE",
    title: "A kids-clothing brand whose marketing is software",
    role: "Founder & Automation Engineer",
    problem: "Running a B2C brand with no marketing team still requires daily posting, writing multi-language content, wholesale B2B outreach, and programmatic SEO.",
    whatWasBuilt: [
      "Daily Instagram post + reel generated automatically from real product photos and auto-captioned",
      "5-language blog that researches, writes, edits, and publishes itself daily (~1,800 articles/year)",
      "B2B wholesale outreach in 4 languages with a 5-touch follow-up sequence",
    ],
    result: "365 social posts and ~1,800 blog articles a year, multilingual, with B2B outreach running daily—a full marketing department for API costs.",
    stack: ["Next.js", "Claude", "Gemini", "Scenario", "Resend", "PostgreSQL"],
    link: { label: "epic.supply", href: "https://epic.supply" },
  },
  {
    id: "knowmads",
    kicker: "OWN VENTURE · MEDIA & AI RAG",
    title: "A media site that writes itself in 7 languages",
    role: "Architect & Lead",
    problem: "An ad-monetized family-guide site requires massive fresh search-optimized content across 7 languages, plus instant grounded answers for visitors.",
    whatWasBuilt: [
      "Daily article auto-translated into 7 languages and deployed in minutes (639+ articles live)",
      "On-site AI assistant grounded in vector knowledge base (pgvector / RAG hybrid retrieval)",
      "Server-side GA4 + Meta CAPI event taxonomy with automated TikTok/FB social generation",
    ],
    result: "Content, SEO, analytics, and visitor support team replaced by one unified autonomous pipeline.",
    stack: ["Next.js", "Claude", "pgvector", "GTM / GA4", "Grok / Veo", "PostgreSQL"],
    link: { label: "knowmadsbali.com", href: "https://knowmadsbali.com" },
  },
];

export const TECH_CAPABILITIES = [
  {
    category: "AI & Multi-Agent Architecture",
    skills: ["Claude Agent SDK / CLI", "Multi-model Routing (Gemini · OpenRouter · Groq)", "Vector Memory / RAG (Pinecone · pgvector)", "Offline Prompt-Injection Defense", "Structured Tool Calling & Agentic Loops"],
  },
  {
    category: "Full-Stack Web & SaaS",
    skills: ["Next.js 15/16 App Router", "React 19 Server Components", "TypeScript", "Prisma · Supabase · PostgreSQL", "Stripe & Midtrans Payments", "i18n Multilingual Engines (5–7 languages)"],
  },
  {
    category: "Automation & Infrastructure",
    skills: ["24/7 Flocked Cron Runners", "Durable Inngest Jobs", "Anti-bot Web Scraping & Ingestion", "VPS Fleet Ops & Docker Compose", "Telegram Bot Remote Ops", "Real-time Telemetry & Anomaly Alerts"],
  },
];
