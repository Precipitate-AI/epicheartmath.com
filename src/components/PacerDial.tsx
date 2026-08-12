"use client";

import React, { useEffect, useState, useRef } from "react";
import { rimKeyframes, SEGMENTS, breathHeight } from "@/lib/pace";

const BARS = [1, 0.8, 0.55, 0.3, 0.12];
const SEG_R_INNER = 84.5;
const SEG_R_OUTER = 93;
const SEG_WIDTH = 7.6;

export interface PacerDialProps {
  inhaleMs?: number;
  exhaleMs?: number;
  size?: string;
  soundEnabled?: boolean;
}

export function PacerDial({
  inhaleMs = 5500,
  exhaleMs = 5500,
  size,
  soundEnabled = false,
}: PacerDialProps) {
  const cycle = inhaleMs + exhaleMs;
  const turnFrac = inhaleMs / cycle;
  const rimCss = rimKeyframes(inhaleMs, exhaleMs);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Transition dot state highlights
  const [topActive, setTopActive] = useState(false);
  const [bottomActive, setBottomActive] = useState(false);

  // Direct element ref for hardware-accelerated 60fps translateY motion
  const bandRef = useRef<HTMLDivElement>(null);

  // Resonant audio chime generator
  const playChime = (pitch: "top" | "bottom") => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          audioCtxRef.current = new AudioCtx();
        }
      }

      const ctx = audioCtxRef.current;
      if (!ctx) return;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Top turn = 432 Hz (resonant warm bell); Bottom turn = 360 Hz (deep grounding bell)
      const freq = pitch === "top" ? 432 : 360;

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.14, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 2.9);
    } catch (e) {
      console.warn("Audio chime error:", e);
    }
  };

  // Frame-accurate clock loop driving translateY, transition dots, and turn-synced sound
  useEffect(() => {
    let animId: number;
    const startTime = performance.now();
    let hasPlayedTop = false;
    let hasPlayedBottom = false;

    const tick = () => {
      const now = performance.now();
      const elapsed = (now - startTime) % cycle;
      const tNorm = elapsed / cycle;

      // 1. Calculate exact sinusoidal breath height (0 = bottom, 1 = top)
      const h = breathHeight(tNorm, turnFrac);

      // 2. Hardware-accelerated translateY offset
      // translateY runs downward: top of stroke = 0 offset, bottom = 100% travel
      if (bandRef.current) {
        const offsetPct = ((1 - h) * 100).toFixed(4);
        bandRef.current.style.transform = `translateY(calc(var(--travel) * ${1 - h}))`;
      }

      // 3. Exact Turn Event & Transition Dot triggers
      const isNearTop = Math.abs(elapsed - inhaleMs) < 180;
      const isNearBottom = elapsed < 180 || elapsed > cycle - 180;

      if (isNearTop) {
        setTopActive(true);
        if (!hasPlayedTop) {
          hasPlayedTop = true;
          if (soundEnabled) playChime("top");
        }
      } else {
        setTopActive(false);
        hasPlayedTop = false;
      }

      if (isNearBottom) {
        setBottomActive(true);
        if (!hasPlayedBottom) {
          hasPlayedBottom = true;
          if (soundEnabled) playChime("bottom");
        }
      } else {
        setBottomActive(false);
        hasPlayedBottom = false;
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animId);
  }, [cycle, turnFrac, inhaleMs, soundEnabled]);

  return (
    <>
      <style>{rimCss}</style>
      <div
        className="pacer"
        style={{
          ["--cycle" as string]: `${cycle}ms`,
          ...(size ? { ["--dial" as string]: size } : {}),
        }}
      >
        {/* Top Transition Dot (12 o'clock) */}
        <span
          className={`transition-dot-top ${topActive ? "active" : ""}`}
          aria-hidden="true"
        />

        {/* Bottom Transition Dot (6 o'clock) */}
        <span
          className={`transition-dot-bottom ${bottomActive ? "active" : ""}`}
          aria-hidden="true"
        />

        <div className="pacer-dial">
          {/* Well clipping the travelling band */}
          <div className="pacer-well">
            <div ref={bandRef} className="pacer-band" style={{ animation: "none" }}>
              {BARS.map((opacity, i) => (
                <span key={i} className="pacer-bar" style={{ opacity }} />
              ))}
            </div>
          </div>

          {/* SVG rim with 40 segments */}
          <svg className="pacer-rim" viewBox="0 0 200 200" aria-hidden="true">
            {Array.from({ length: SEGMENTS }, (_, k) => (
              <rect
                key={k}
                className="pacer-seg"
                x={100 - SEG_WIDTH / 2}
                y={100 - SEG_R_OUTER}
                width={SEG_WIDTH}
                height={SEG_R_OUTER - SEG_R_INNER}
                rx="1.6"
                fill="currentColor"
                transform={`rotate(${((k / SEGMENTS) * 360).toFixed(3)} 100 100)`}
                style={{ animationName: `omni-seg-${k}` }}
              />
            ))}
          </svg>
        </div>
      </div>
    </>
  );
}
