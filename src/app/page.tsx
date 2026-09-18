"use client";

import React, { useState, useEffect, useRef } from "react";
import { KraftBackground } from "@/components/KraftBackground";
import { PacerDial } from "@/components/PacerDial";
import { AboutBobModal } from "@/components/AboutBobModal";
import { Volume2, VolumeX, Minus, Plus, User } from "lucide-react";

export default function Home() {
  const [paceSeconds, setPaceSeconds] = useState(5.5);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const idleTimer = useRef<NodeJS.Timeout | null>(null);

  // Reveal controls & "about bob" button on mouse movement, scroll, or touch swipe
  useEffect(() => {
    const handleInteraction = () => {
      setShowControls(true);

      if (idleTimer.current) clearTimeout(idleTimer.current);

      idleTimer.current = setTimeout(() => {
        if (!aboutOpen) {
          setShowControls(false);
        }
      }, 4500);
    };

    window.addEventListener("mousemove", handleInteraction);
    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("keydown", handleInteraction);

    return () => {
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [aboutOpen]);

  const decreasePace = () => {
    setPaceSeconds((prev) => Math.max(4.0, parseFloat((prev - 0.5).toFixed(1))));
  };

  const increasePace = () => {
    setPaceSeconds((prev) => Math.min(8.0, parseFloat((prev + 0.5).toFixed(1))));
  };

  return (
    <KraftBackground className="real-kraft-bg flex flex-col min-h-screen justify-between items-center p-4 sm:p-8 select-none">
      {/* Floating Top-Right "about bob" Button (Reveals on interaction) */}
      <div
        className={`fixed top-6 right-6 z-40 transition-all duration-500 ${
          showControls || aboutOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setAboutOpen(true)}
          className="marker-btn px-4 py-2 text-xl font-marker font-bold text-[#1F160E] flex items-center space-x-2"
        >
          <User className="w-5 h-5 stroke-[2.5]" />
          <span>about bob</span>
        </button>
      </div>

      {/* Main Heroic Screen-Filling Pacer Dial with Flanking Breathe Prompts */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl my-auto z-10 py-6">
        <div className="relative flex items-center justify-center w-full">
          {/* Left Prompt: breathe in */}
          <div className="absolute left-2 sm:left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 select-none pointer-events-none text-center">
            <span className="font-marker text-base sm:text-2xl md:text-3xl lg:text-4xl text-[#4a3424]/40 tracking-wider">
              breathe in
            </span>
          </div>

          <PacerDial
            inhaleMs={paceSeconds * 1000}
            exhaleMs={paceSeconds * 1000}
            soundEnabled={soundEnabled}
          />

          {/* Right Prompt: breathe out */}
          <div className="absolute right-2 sm:right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 select-none pointer-events-none text-center">
            <span className="font-marker text-base sm:text-2xl md:text-3xl lg:text-4xl text-[#4a3424]/40 tracking-wider">
              breathe out
            </span>
          </div>
        </div>

        {/* Pace & Sound Controls (Reveals on interaction) */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 ${
            showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          {/* Pace Controller */}
          <div className="flex items-center space-x-3 bg-[#D8BA96]/90 border-2 border-[#1F160E]/85 px-4 py-1.5 rounded-full shadow-[2.5px_3.5px_0px_#1F160E]">
            <button
              onClick={decreasePace}
              className="p-1 text-[#1F160E] hover:scale-110 active:scale-95 transition-transform"
              aria-label="Decrease breath pace"
            >
              <Minus className="w-5 h-5 stroke-[3]" />
            </button>

            <span className="font-mono text-sm font-bold text-[#1F160E] tracking-wider min-w-[70px] text-center">
              {paceSeconds.toFixed(1)}s pace
            </span>

            <button
              onClick={increasePace}
              className="p-1 text-[#1F160E] hover:scale-110 active:scale-95 transition-transform"
              aria-label="Increase breath pace"
            >
              <Plus className="w-5 h-5 stroke-[3]" />
            </button>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`marker-btn px-4 py-1.5 text-base font-marker font-bold flex items-center space-x-2 ${
              soundEnabled ? "bg-[#B8572A] text-white border-[#1F160E]" : "text-[#1F160E]"
            }`}
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            <span>{soundEnabled ? "Sound Synced" : "Sound Muted"}</span>
          </button>
        </div>
      </main>

      {/* About Bob Modal */}
      <AboutBobModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </KraftBackground>
  );
}
