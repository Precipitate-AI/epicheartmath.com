"use client";

import React, { useEffect, useRef } from "react";
import { paceKeyframes, rimKeyframes, SEGMENTS } from "@/lib/pace";

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
  const css = paceKeyframes(inhaleMs, exhaleMs) + rimKeyframes(inhaleMs, exhaleMs);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play a soft, warm singing bowl chime at turns
  const playTurnChime = (pitch: "top" | "bottom") => {
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
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 2.9);
    } catch (e) {
      console.warn("Audio chime error:", e);
    }
  };

  // Precise sound sync loop aligned with the CSS cycle
  useEffect(() => {
    if (!soundEnabled) return;

    let timeoutTop: NodeJS.Timeout | null = null;
    let cycleInterval: NodeJS.Timeout | null = null;

    const startSync = () => {
      // Play bottom turn immediately at start of cycle
      playTurnChime("bottom");

      // Schedule top turn chime at exact inhaleMs
      timeoutTop = setTimeout(() => {
        playTurnChime("top");
      }, inhaleMs);

      // Repeat loop every cycle
      cycleInterval = setInterval(() => {
        playTurnChime("bottom");
        timeoutTop = setTimeout(() => {
          playTurnChime("top");
        }, inhaleMs);
      }, cycle);
    };

    startSync();

    return () => {
      if (timeoutTop) clearTimeout(timeoutTop);
      if (cycleInterval) clearInterval(cycleInterval);
    };
  }, [soundEnabled, inhaleMs, exhaleMs, cycle]);

  return (
    <>
      <style>{css}</style>
      <div
        className="pacer"
        style={{
          ["--cycle" as string]: `${cycle}ms`,
          ...(size ? { ["--dial" as string]: size } : {}),
        }}
      >
        {/* Crown marker at 12 o'clock */}
        <span className="pacer-crown" aria-hidden="true" />

        <div className="pacer-dial">
          {/* Well clipping the travelling band */}
          <div className="pacer-well">
            <div className="pacer-band">
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
