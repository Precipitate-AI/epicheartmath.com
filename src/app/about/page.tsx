import React from "react";
import Link from "next/link";
import { KraftBackground } from "@/components/KraftBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  User,
  Heart,
  Cpu,
  Terminal,
  Activity,
  Award,
  Video,
  Sparkles,
  Zap,
  TrendingUp,
  Brain,
  ShieldCheck,
  CheckCircle2,
  Code2,
  ExternalLink,
  Bot,
  Mail,
  GraduationCap,
} from "lucide-react";

export const metadata = {
  title: "About Bob Chugani | Epic Heart Math",
  description:
    "The story, work, interests, and accomplishments of Bob Chugani—Linguist, HeartMath instructor, and AI Systems Architect.",
};

export default function AboutPage() {
  return (
    <KraftBackground>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16 space-y-16 relative z-10">
        {/* Header Hero Section */}
        <section className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#E5D6C2]/80 border border-[#2C2621]/20 px-4 py-1.5 rounded-full text-xs font-mono text-[#5E5347]">
            <Heart className="w-3.5 h-3.5 text-[#C85A32] fill-[#C85A32]" />
            <span>Health Consciousness · Autonomic Balance · Systems Engineering</span>
          </div>

          <h1 className="font-handwriting text-5xl md:text-6xl lg:text-7xl font-bold text-[#2C2621] tracking-tight leading-none">
            Linguist who builds <br />
            <span className="text-[#C85A32] underline decoration-wavy decoration-[#C85A32]/40">
              autonomous machines.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#5E5347] leading-relaxed max-w-2xl font-sans">
            I build AI systems that run entire businesses—so one operator can do the work of a team of ten. 
            <strong className="text-[#2C2621] font-semibold"> epicheartmath.com </strong> is my personal sanctuary: 
            a return to Heart Rate Variability, nervous system coherence, and human balance after years of high-velocity building.
          </p>
        </section>

        {/* Note Card: The Journey */}
        <section className="sketch-card p-6 md:p-8 space-y-6 relative overflow-hidden">
          <div className="absolute top-3 right-4 font-handwriting text-2xl text-[#C85A32]/60 select-none">
            ~ personal log
          </div>

          <h2 className="font-handwriting text-3xl md:text-4xl font-bold text-[#2C2621] flex items-center space-x-2">
            <GraduationCap className="w-6 h-6 text-[#C85A32]" />
            <span>The Journey: From EAP & HeartMath to AI Fleet Ops</span>
          </h2>

          <div className="space-y-4 text-[#5E5347] leading-relaxed">
            <p>
              I came to software engineering sideways. A bachelor’s in Information Technology (American University in Dubai), followed by a master’s in Applied Linguistics (UNSW, Australia), and years teaching English for Academic Purposes (EAP)—focusing on semantic structure, discourse clarity, and how language carries meaning.
            </p>
            <p>
              For years, I also taught breathing coherence using the <strong className="text-[#2C2621]">HeartMath Inner Balance dial</strong>. That deep appreciation for physiological pacing, autonomic feedback, and position-along-a-path judgment shaped how I view both human biology and machine systems.
            </p>
            <p>
              Working with Large Language Models turned out to be half systems engineering and half applied linguistics. Today, I build and operate autonomous multi-agent pipelines, automated trading desks, e-commerce content engines, and SaaS products across my own ventures (<strong className="text-[#2C2621]">Precipitate & Guestar</strong>).
            </p>
          </div>
        </section>

        {/* Telemetry Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Automated Jobs 24/7", val: "110+", sub: "cron runners & pipelines" },
            { label: "Custom LLM Skills", val: "70+", sub: "on guestarclaw & precipitateclaw" },
            { label: "Live Integrated Repos", val: "40+", sub: "Next.js, Python, TS" },
            { label: "Businesses Run Solo", val: "5", sub: "Guestar, Epic, Knowmads, SLW, Quant" },
          ].map((stat, i) => (
            <div key={i} className="sketch-card p-4 text-center space-y-1">
              <div className="font-mono text-3xl font-bold text-[#C85A32]">{stat.val}</div>
              <div className="font-sans text-xs font-semibold text-[#2C2621]">{stat.label}</div>
              <div className="font-mono text-[10px] text-[#5E5347]">{stat.sub}</div>
            </div>
          ))}
        </section>

        {/* Updated Accomplishments & Capabilities */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-handwriting text-4xl font-bold text-[#2C2621] flex items-center space-x-2">
              <Zap className="w-7 h-7 text-[#C85A32]" />
              <span>What I’ve Built & Operate</span>
            </h2>
            <p className="text-sm font-mono text-[#5E5347]">
              Real autonomous production infrastructure live across Precipitateclaw & Guestarclaw.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Capability 1: Autonomous Reel Engine */}
            <div className="sketch-card p-6 space-y-3">
              <div className="flex items-center space-x-2 text-[#C85A32]">
                <Video className="w-5 h-5" />
                <h3 className="font-sans font-bold text-lg text-[#2C2621]">Autonomous AI Reel & Video Engine</h3>
              </div>
              <p className="text-sm text-[#5E5347] leading-relaxed">
                Automated video production system running on <code className="text-xs bg-[#2C2621]/10 px-1 py-0.5 rounded">guestarclaw</code>. Generates founder formats, kinetic carousels, and UGC reels using vision-QA B-roll treadmills, HeyGen integrations, and auto-captioning.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["gen_founder.sh", "broll_topup", "kinetic-carousel", "HeyGen API"].map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono bg-[#2C2621]/10 px-2 py-0.5 rounded text-[#2C2621]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Capability 2: SEOnaut & Striking Distance Loop */}
            <div className="sketch-card p-6 space-y-3">
              <div className="flex items-center space-x-2 text-[#C85A32]">
                <TrendingUp className="w-5 h-5" />
                <h3 className="font-sans font-bold text-lg text-[#2C2621]">SEOnaut & GSC Striking-Distance Loop</h3>
              </div>
              <p className="text-sm text-[#5E5347] leading-relaxed">
                Automated search performance loop that crawls site health via SEOnaut, monitors Google Search Console 28-day striking distance keywords, auto-steers blog generation, and pings IndexNow to Bing/Yandex/Naver.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["perf-loop.py", "content-eval.py", "IndexNow", "GSC API"].map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono bg-[#2C2621]/10 px-2 py-0.5 rounded text-[#2C2621]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Capability 3: Revenue & Attribution Engine */}
            <div className="sketch-card p-6 space-y-3">
              <div className="flex items-center space-x-2 text-[#C85A32]">
                <Activity className="w-5 h-5" />
                <h3 className="font-sans font-bold text-lg text-[#2C2621]">Paid vs. Organic Revenue Attribution</h3>
              </div>
              <p className="text-sm text-[#5E5347] leading-relaxed">
                Server-side attribution engine tracking conversion funnels, subscription lifecycles, and paid-vs-organic revenue channels for Guestar SaaS and Midlife Movement Method (MMM/SLW).
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["revenue-attribution.py", "slw-attribution", "Postiz", "Buffer API"].map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono bg-[#2C2621]/10 px-2 py-0.5 rounded text-[#2C2621]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Capability 4: 70+ Custom LLM Skills Ecosystem */}
            <div className="sketch-card p-6 space-y-3">
              <div className="flex items-center space-x-2 text-[#C85A32]">
                <Brain className="w-5 h-5" />
                <h3 className="font-sans font-bold text-lg text-[#2C2621]">70+ Custom Agent Skills Library</h3>
              </div>
              <p className="text-sm text-[#5E5347] leading-relaxed">
                Extensive library of agent skills for video production, programmatic SEO, prospect recon, prompt-injection defense (577 patterns), UGC synthesis, and automated code audits.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["property-morph-reel", "prospect-recon", "scroll-storyteller", "growth-engine-kb"].map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono bg-[#2C2621]/10 px-2 py-0.5 rounded text-[#2C2621]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-handwriting text-4xl font-bold text-[#2C2621] flex items-center space-x-2">
              <Cpu className="w-7 h-7 text-[#C85A32]" />
              <span>Active Solo Ventures & Products</span>
            </h2>
            <p className="text-sm font-mono text-[#5E5347]">
              End-to-end products designed, built, and operated solo in production.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Guestar AI",
                tag: "CLIENT BUILD · AI SAAS",
                desc: "An AI SaaS answering guest messages across booking platforms (Hostify, OwnerRez, Airbnb). 288-file Next.js app, 177 API endpoints, Stripe billing, multi-tenant with automated marketing machine.",
                stack: ["Next.js", "TypeScript", "Stripe", "Pinecone", "Postgres", "Inngest"],
                link: "https://guestar.ai",
              },
              {
                title: "Epic Supply",
                tag: "OWN VENTURE · B2C E-COMMERCE",
                desc: "Muslin cotton kids clothing brand with a 100% automated software marketing department. 365 social posts + 1,800 multilingual articles/year generated & published automatically.",
                stack: ["Next.js", "Claude", "Gemini", "Scenario", "Resend", "Postgres"],
                link: "https://epic.supply",
              },
              {
                title: "Knowmads Bali",
                tag: "OWN VENTURE · MEDIA & RAG CHAT",
                desc: "Family guide site writing itself in 7 languages (639+ articles live) with grounded vector RAG AI assistant and automated GTM / GA4 event tracking.",
                stack: ["Next.js", "Claude", "pgvector", "GA4 / GTM", "Grok / Veo"],
                link: "https://knowmadsbali.com",
              },
              {
                title: "The Midlife Movement Method (MMM / SLW)",
                tag: "OWN VENTURE · WELLNESS & MOVEMENT",
                desc: "Health & bio-movement platform featuring automated kinetic reels, Pinterest queues, defect-gated hero images, and weekly organic sales attribution.",
                stack: ["Python", "Buffer", "Postiz", "Pinterest API", "Next.js"],
                link: "https://themidlifemovementmethod.com",
              },
              {
                title: "Trade Automation & Prediction Desk",
                tag: "OWN VENTURE · QUANT EXECUTION",
                desc: "Autonomous trading desk executing 24/7 across perpetual futures & prediction markets. Includes whale wallet tracking and token-gated streaming research chat.",
                stack: ["TypeScript", "Hyperliquid", "Polymarket", "Claude", "Telegram"],
                link: "https://automate.precipitate.ai",
              },
            ].map((project, i) => (
              <div key={i} className="sketch-card p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#C85A32] uppercase">
                      {project.tag}
                    </span>
                    <h3 className="font-sans font-bold text-xl text-[#2C2621]">{project.title}</h3>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-mono text-[#2C2621] hover:text-[#C85A32] underline decoration-[#2C2621]/30"
                    >
                      <span>{project.link.replace("https://", "")}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-[#5E5347] leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((s, idx) => (
                    <span key={idx} className="text-[11px] font-mono bg-[#2C2621]/10 text-[#2C2621] px-2.5 py-0.5 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skill Matrix */}
        <section className="space-y-6">
          <h2 className="font-handwriting text-4xl font-bold text-[#2C2621]">Technical & Operational Competencies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                group: "Languages & Core Stack",
                items: ["TypeScript", "Python 3", "Bash", "SQL (Postgres & SQLite)"],
              },
              {
                group: "AI, Agents & Video Gen",
                items: ["Claude Agent SDK & CLI", "Multi-model Routing (Gemini/OpenRouter)", "RAG & Vector Memory", "HeyGen / Scenario Video Engines"],
              },
              {
                group: "Web & Product Engineering",
                items: ["Next.js 15/16 (App Router)", "Prisma & Supabase", "Stripe & Midtrans Billing", "Multi-tenant i18n (7 Languages)"],
              },
              {
                group: "Data, Infra & Automation",
                items: ["Postgres (Neon + Docker)", "Upstash Redis / KV", "Systemd & Nginx Fleet", "110+ Flock-locked Cron Runners"],
              },
            ].map((group, idx) => (
              <div key={idx} className="sketch-card p-5 space-y-2">
                <h3 className="font-sans font-semibold text-base text-[#2C2621] border-b border-[#2C2621]/15 pb-2">
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.items.map((item, i) => (
                    <span key={i} className="text-xs font-mono bg-[#E5D6C2] text-[#2C2621] px-2.5 py-1 rounded-md border border-[#2C2621]/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="sketch-card p-8 text-center space-y-4 bg-gradient-to-b from-[#E5D6C2]/80 to-[#D7C4A7]">
          <h2 className="font-handwriting text-4xl font-bold text-[#2C2621]">Let’s Connect</h2>
          <p className="text-sm text-[#5E5347] max-w-md mx-auto">
            Whether you want to discuss autonomic HRV pacing, autonomous AI systems, or contract work.
          </p>
          <div className="pt-2">
            <a
              href="mailto:precipitate.protocol@gmail.com?subject=Hello%20Bob%20-%20epicheartmath"
              className="inline-flex items-center space-x-2 bg-[#2C2621] text-[#E5D6C2] font-semibold px-6 py-3 rounded-full hover:bg-[#C85A32] transition-colors shadow-md text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Email precipitate.protocol@gmail.com</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </KraftBackground>
  );
}
