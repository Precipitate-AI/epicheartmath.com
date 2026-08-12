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
    <KraftBackground className="real-kraft-bg flex flex-col min-h-screen justify-between items-center p-6 select-none">
      {/* Floating Top-Right "about bob" Button (Reveals on interaction) */}
      <div
        className={`fixed top-6 right-6 z-40 transition-all duration-500 ${
          showControls || aboutOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setAboutOpen(true)}
          className="marker-btn px-4 py-2 text-xl font-marker font-bold text-[#231A12] flex items-center space-x-2"
        >
          <User className="w-5 h-5 stroke-[2.5]" />
          <span>about bob</span>
        </button>
      </div>

      {/* Main Centered Omni-HRV Pacer Stage */}
      <main className="flex-1 flex flex-col items-center justify-center w-full my-auto z-10">
        <PacerDial
          inhaleMs={paceSeconds * 1000}
          exhaleMs={paceSeconds * 1000}
          soundEnabled={soundEnabled}
        />

        {/* Minimal Pace & Sound Controls (Reveals on interaction) */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 ${
            showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          {/* Breath Pace Controller */}
          <div className="flex items-center space-x-3 bg-[#E0C9AD]/80 border-2 border-[#231A12]/80 px-4 py-1.5 rounded-full shadow-[2px_3px_0px_#231A12]">
            <button
              onClick={decreasePace}
              className="p-1 text-[#231A12] hover:scale-110 active:scale-95 transition-transform"
              aria-label="Decrease breath pace"
            >
              <Minus className="w-5 h-5 stroke-[3]" />
            </button>

            <span className="font-mono text-sm font-bold text-[#231A12] tracking-wider min-w-[70px] text-center">
              {paceSeconds.toFixed(1)}s pace
            </span>

            <button
              onClick={increasePace}
              className="p-1 text-[#231A12] hover:scale-110 active:scale-95 transition-transform"
              aria-label="Increase breath pace"
            >
              <Plus className="w-5 h-5 stroke-[3]" />
            </button>
          </div>

          {/* Turn-Synced Audio Chime Button */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`marker-btn px-4 py-1.5 text-base font-marker font-bold flex items-center space-x-2 ${
              soundEnabled ? "bg-[#C85A32] text-white border-[#231A12]" : "text-[#231A12]"
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
