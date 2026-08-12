import React from "react";
import Link from "next/link";
import { KraftBackground } from "@/components/KraftBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cpu, Terminal, Zap, Bot, Shield, Code, Server, GitBranch, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Systems Architecture | Epic Heart Math",
  description:
    "Explore Bob Chugani's live autonomous AI infrastructure, cron engines, video pipelines, and agent skills.",
};

export default function SystemsPage() {
  return (
    <KraftBackground>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16 space-y-16 relative z-10">
        {/* Header */}
        <section className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#E5D6C2]/80 border border-[#2C2621]/20 px-4 py-1.5 rounded-full text-xs font-mono text-[#5E5347]">
            <Terminal className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Production Infrastructure · Precipitateclaw & Guestarclaw</span>
          </div>

          <h1 className="font-handwriting text-5xl md:text-6xl font-bold text-[#2C2621]">
            Systems & Infrastructure Engine
          </h1>

          <p className="text-base md:text-lg text-[#5E5347] leading-relaxed max-w-2xl">
            A deep look under the hood at the 110+ automated background jobs, video generation treadmills, performance loops, and custom agent skills running solo ops.
          </p>
        </section>

        {/* System Architecture Grid */}
        <section className="space-y-6">
          <h2 className="font-handwriting text-4xl font-bold text-[#2C2621]">
            Active Production Engines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Bot,
                title: "Autonomous Reel Engine",
                host: "guestarclaw",
                desc: "Runs scheduled video production jobs (founder formats, kinetic carousels, UGC talking heads) with vision-QA B-roll treadmills, HeyGen voice rendering, and automated Postiz social queues.",
                jobs: ["gen_founder.sh", "broll_topup.sh", "gen_carousel.sh", "gen_podcast.sh"],
              },
              {
                icon: Server,
                title: "SEOnaut & Striking Distance Loop",
                host: "guestarclaw & precipitateclaw",
                desc: "Monitors Google Search Console 28-day striking distance queries, audits site health with SEOnaut, steers future blog generation, and pings IndexNow across search engines.",
                jobs: ["seonaut-crawl.py", "perf-loop.py", "content-eval.py", "index-queue.py"],
              },
              {
                icon: Zap,
                title: "Paid vs. Organic Attribution Engine",
                host: "guestarclaw",
                desc: "Server-side sales and conversion funnel attribution tracking revenue across SaaS and wellness platforms. Generates weekly Telegram digests for operational review.",
                jobs: ["revenue-attribution.py", "slw-attribution-weekly.py", "mmm-eval-weekly.py"],
              },
              {
                icon: Shield,
                title: "Reliability & Lock Layer",
                host: "systemd & flock",
                desc: "Every cron job runs inside linux flock locks with strict per-job execution timeouts, error traps, offsite DB backups, and phone alerts via Telegram bridge.",
                jobs: ["claude-telegram.service", "project-map.js", "lucy-backup.sh", "site-brand-guard.sh"],
              },
            ].map((engine, i) => {
              const Icon = engine.icon;
              return (
                <div key={i} className="sketch-card p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-[#C85A32]">
                      <Icon className="w-5 h-5" />
                      <h3 className="font-sans font-bold text-lg text-[#2C2621]">{engine.title}</h3>
                    </div>
                    <span className="text-[10px] font-mono bg-[#2C2621]/10 px-2 py-0.5 rounded text-[#5E5347]">
                      {engine.host}
                    </span>
                  </div>

                  <p className="text-sm text-[#5E5347] leading-relaxed">{engine.desc}</p>

                  <div className="pt-2 border-t border-[#2C2621]/10 space-y-1">
                    <span className="text-[11px] font-mono font-semibold text-[#2C2621]">Scheduled Jobs:</span>
                    <div className="flex flex-wrap gap-1">
                      {engine.jobs.map((job, idx) => (
                        <span key={idx} className="text-[10px] font-mono bg-[#E5D6C2] text-[#2C2621] px-2 py-0.5 rounded border border-[#2C2621]/10">
                          {job}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Skill Library Section */}
        <section className="sketch-card p-8 space-y-6">
          <h2 className="font-handwriting text-4xl font-bold text-[#2C2621] flex items-center space-x-2">
            <Code className="w-7 h-7 text-[#C85A32]" />
            <span>70+ Custom LLM & Agent Skills</span>
          </h2>
          <p className="text-sm text-[#5E5347] leading-relaxed">
            Custom skill packages built to equip AI agents with specific operational playbooks, video generation workflows, SEO audits, and security defenses.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "property-morph-reel",
              "kinetic-carousel",
              "broll-topup",
              "video-thumbnail-aabrole",
              "ugc-talking-head",
              "heygen-skills",
              "brian-sarah-podcast",
              "scroll-storyteller",
              "scroll-landing-master",
              "prospect-recon",
              "growth-engine-kb",
              "programmatic-seo",
              "seo-audit",
              "prompt-guard",
              "hard-task-playbook",
              "verify-nextjs-site-change",
            ].map((skill, i) => (
              <span key={i} className="text-xs font-mono bg-[#2C2621] text-[#E5D6C2] px-3 py-1 rounded-full shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Navigation Link to About */}
        <section className="text-center py-6">
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 text-sm font-mono text-[#2C2621] hover:text-[#C85A32] underline decoration-[#C85A32]/40 underline-offset-4"
          >
            <span>Learn more about Bob’s background on the About page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </KraftBackground>
  );
}
