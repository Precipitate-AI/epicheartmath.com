import React from "react";
import Link from "next/link";
import { KraftBackground } from "@/components/KraftBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Sparkles, BookOpen, Clock } from "lucide-react";

export const metadata = {
  title: "Reflections & Notes | Epic Heart Math",
  description:
    "Essays and reflections by Bob Chugani on health consciousness, operator longevity, and autonomic coherence.",
};

export default function ReflectionsPage() {
  const posts = [
    {
      title: "Reclaiming Health Consciousness in an Age of Autonomous AI",
      date: "August 2026",
      readTime: "4 min read",
      excerpt:
        "When your software is running 110+ automated background jobs and multi-agent pipelines around the clock, it's easy to mistake high-output building for personal vitality. Rebuilding epicheartmath.com is a reminder that internal state determines long-term longevity.",
    },
    {
      title: "Position Along a Path vs. Area Expansion: Why Breathing Dials Work",
      date: "July 2026",
      readTime: "5 min read",
      excerpt:
        "Why the HeartMath Inner Balance dial relies on vertical bar movement rather than expanding circles. Human visual perception judges position along a linear path far more accurately than radial area expansion, enabling precise turn anticipation.",
    },
    {
      title: "0.1 Hz Resonant Breathing for Solo Operators",
      date: "June 2026",
      readTime: "6 min read",
      excerpt:
        "How 5.5-second inhales and 5.5-second exhales stimulate the vagus nerve, increase baroreflex sensitivity, and keep executive decision-making sharp under cognitive load.",
    },
  ];

  return (
    <KraftBackground>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16 space-y-12 relative z-10">
        <section className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#E5D6C2]/80 border border-[#2C2621]/20 px-4 py-1.5 rounded-full text-xs font-mono text-[#5E5347]">
            <BookOpen className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Essays & Operator Notes</span>
          </div>

          <h1 className="font-handwriting text-5xl md:text-6xl font-bold text-[#2C2621]">
            Reflections on Health & Longevity
          </h1>

          <p className="text-base md:text-lg text-[#5E5347] leading-relaxed max-w-2xl">
            Notes on physiological coherence, bio-hacking for solo software builders, and taking care of the nervous system.
          </p>
        </section>

        <section className="space-y-6">
          {posts.map((post, i) => (
            <article key={i} className="sketch-card p-6 md:p-8 space-y-4 hover:border-[#C85A32]/40 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono text-[#5E5347]">
                <span>{post.date}</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <h2 className="font-sans font-bold text-2xl text-[#2C2621] hover:text-[#C85A32] transition-colors cursor-pointer">
                {post.title}
              </h2>

              <p className="text-sm text-[#5E5347] leading-relaxed">{post.excerpt}</p>

              <div className="pt-2">
                <span className="font-handwriting text-xl text-[#C85A32] underline decoration-wavy decoration-[#C85A32]/30 cursor-pointer">
                  Read full essay ~
                </span>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </KraftBackground>
  );
}
