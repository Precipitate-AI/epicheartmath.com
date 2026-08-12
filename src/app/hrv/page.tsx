import React from "react";
import Link from "next/link";
import { KraftBackground } from "@/components/KraftBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Activity, Brain, Shield, Wind, Sparkles, Check } from "lucide-react";

export const metadata = {
  title: "The Science of HRV & Resonant Breathing | Epic Heart Math",
  description:
    "Learn the science of Heart Rate Variability (HRV), resonant frequency breathing (0.1 Hz), and baroreflex coherence.",
};

export default function HRVPage() {
  return (
    <KraftBackground>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16 space-y-16 relative z-10">
        {/* Header */}
        <section className="space-y-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-[#E5D6C2]/80 border border-[#2C2621]/20 px-4 py-1.5 rounded-full text-xs font-mono text-[#5E5347]">
            <Activity className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>0.1 Hz Resonant Frequency Science</span>
          </div>

          <h1 className="font-handwriting text-5xl md:text-6xl font-bold text-[#2C2621]">
            The Science of Resonant HRV Breathing
          </h1>

          <p className="text-base md:text-lg text-[#5E5347] leading-relaxed">
            Why breathing at ~5.5 seconds in and 5.5 seconds out creates physiological coherence between your heart, lungs, and brain.
          </p>
        </section>

        {/* Core Principles Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="sketch-card p-6 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#C85A32]/15 text-[#C85A32] flex items-center justify-center font-mono font-bold text-lg">
              01
            </div>
            <h3 className="font-sans font-bold text-lg text-[#2C2621]">Baroreflex Resonance</h3>
            <p className="text-sm text-[#5E5347] leading-relaxed">
              Breathing at 0.1 Hz (~6 breaths per minute) matches the natural frequency of the baroreflex feedback loop, creating max amplitude oscillations in blood pressure and heart rate.
            </p>
          </div>

          <div className="sketch-card p-6 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#C85A32]/15 text-[#C85A32] flex items-center justify-center font-mono font-bold text-lg">
              02
            </div>
            <h3 className="font-sans font-bold text-lg text-[#2C2621]">Autonomic Coherence</h3>
            <p className="text-sm text-[#5E5347] leading-relaxed">
              Aligning respiratory sinus arrhythmia (RSA) shifts the autonomic nervous system into a state of coherence—balancing sympathetic fight-or-flight with parasympathetic vagal recovery.
            </p>
          </div>

          <div className="sketch-card p-6 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#C85A32]/15 text-[#C85A32] flex items-center justify-center font-mono font-bold text-lg">
              03
            </div>
            <h3 className="font-sans font-bold text-lg text-[#2C2621]">Perceptual Turn Timing</h3>
            <p className="text-sm text-[#5E5347] leading-relaxed">
              Vertical path travel (rather than expanding area) allows the human brain to judge turn distance accurately, reducing anxiety and locking in clean, effortless breath timing.
            </p>
          </div>
        </section>

        {/* Detailed Explanation Section */}
        <section className="sketch-card p-8 space-y-6">
          <h2 className="font-handwriting text-4xl font-bold text-[#2C2621]">
            Why 5.5 Seconds In, 5.5 Seconds Out?
          </h2>

          <div className="space-y-4 text-[#5E5347] leading-relaxed">
            <p>
              In clinical heart rate variability research (developed extensively by the HeartMath Institute and psychophysiologists like Dr. Richard Gevirtz and Dr. Evgeny Vaschillo), every human body has a personal resonant frequency between 4.5 and 6.5 breaths per minute.
            </p>
            <p>
              For the vast majority of adults, <strong className="text-[#2C2621]">5.5 seconds inhale and 5.5 seconds exhale (11 seconds total cycle = ~5.45 breaths/min)</strong> falls directly in the resonant sweet spot.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#2C2621]/15">
            {[
              "Increased Vagal Tone & Parasympathetic Recovery",
              "Lowered Cortisol & Systemic Inflammation",
              "Enhanced Focus & Cognitive Executive Control",
              "Rapid Recovery from Acute Cognitive Stress",
            ].map((benefit, i) => (
              <div key={i} className="flex items-center space-x-2 text-sm text-[#2C2621]">
                <Check className="w-4 h-4 text-[#C85A32] flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA to Practice */}
        <section className="text-center space-y-4 py-8">
          <h2 className="font-handwriting text-4xl font-bold text-[#2C2621]">
            Ready to train your HRV?
          </h2>
          <p className="text-sm text-[#5E5347] max-w-md mx-auto">
            Return to the landing pacer stage for a distraction-free resonant breathing session.
          </p>
          <div>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-[#2C2621] text-[#E5D6C2] font-semibold px-6 py-3 rounded-full hover:bg-[#C85A32] transition-colors shadow-md text-sm"
            >
              <Wind className="w-4 h-4" />
              <span>Launch Breath Pacer</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </KraftBackground>
  );
}
