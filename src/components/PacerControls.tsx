"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Sun, Sparkles } from "lucide-react";

interface PacerControlsProps {
  paceSeconds: number;
  setPaceSeconds: (s: number) => void;
}

export function PacerControls({ paceSeconds, setPaceSeconds }: PacerControlsProps) {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [wakeLockActive, setWakeLockActive] = useState(false);

  // Screen WakeLock API integration
  useEffect(() => {
    let wakeLock: any = null;

    const requestWakeLock = async () => {
      if ("wakeLock" in navigator) {
        try {
          wakeLock = await (navigator as any).wakeLock.request("screen");
          setWakeLockActive(true);
        } catch (err) {
          console.warn("WakeLock request failed:", err);
        }
      }
    };

    requestWakeLock();

    return () => {
      if (wakeLock) {
        wakeLock.release().catch(() => {});
      }
    };
  }, []);

  // Web Audio chime generator
  const playBreathBell = (freq = 432) => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 2.6);
    } catch (e) {
      console.warn("Web Audio chime error:", e);
    }
  };

  // Audio cycle trigger
  useEffect(() => {
    if (!audioEnabled) return;
    const intervalMs = paceSeconds * 1000 * 2;
    playBreathBell(432); // initial chime

    const interval = setInterval(() => {
      playBreathBell(432);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [audioEnabled, paceSeconds]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 bg-[#E5D6C2]/60 backdrop-blur-sm border border-[#2C2621]/15 px-4 py-2 rounded-full shadow-sm">
      {/* Pace Presets */}
      <div className="flex items-center space-x-1 border-r border-[#2C2621]/15 pr-3">
        {[5.0, 5.5, 6.0].map((s) => (
          <button
            key={s}
            onClick={() => setPaceSeconds(s)}
            className={`px-2.5 py-1 text-xs font-mono rounded-full transition-all ${
              paceSeconds === s
                ? "bg-[#2C2621] text-[#E5D6C2] font-semibold"
                : "text-[#5E5347] hover:bg-[#2C2621]/10"
            }`}
          >
            {s}s
          </button>
        ))}
      </div>

      {/* Audio Bell Toggle */}
      <button
        onClick={() => {
          const next = !audioEnabled;
          setAudioEnabled(next);
          if (next) playBreathBell(528);
        }}
        className={`p-1.5 rounded-full transition-all flex items-center space-x-1.5 text-xs font-mono ${
          audioEnabled
            ? "bg-[#C85A32] text-white"
            : "text-[#5E5347] hover:bg-[#2C2621]/10"
        }`}
        title={audioEnabled ? "Sound Enabled" : "Sound Muted"}
      >
        {audioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        <span className="hidden sm:inline">{audioEnabled ? "Sound On" : "Mute"}</span>
      </button>

      {/* Screen Keep Awake Status */}
      <div className="flex items-center space-x-1 text-[10px] font-mono text-[#5E5347]/80 pl-1">
        <Sun className="w-3 h-3 text-[#C85A32]" />
        <span className="hidden md:inline">Keep Awake</span>
      </div>
    </div>
  );
}
