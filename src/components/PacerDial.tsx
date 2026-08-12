"use client";

import React, { useEffect, useState } from "react";
import { paceKeyframes, rimKeyframes, SEGMENTS } from "@/lib/pace";

const BARS = [1, 0.8, 0.55, 0.3, 0.12];
const SEG_R_INNER = 84.5;
const SEG_R_OUTER = 93;
const SEG_WIDTH = 7.6;

export interface PacerDialProps {
  inhaleMs?: number;
  exhaleMs?: number;
  size?: string;
  showLabels?: boolean;
}

export function PacerDial({
  inhaleMs = 5500,
  exhaleMs = 5500,
  size,
  showLabels = true,
}: PacerDialProps) {
  const cycle = inhaleMs + exhaleMs;
  const css = paceKeyframes(inhaleMs, exhaleMs) + rimKeyframes(inhaleMs, exhaleMs);

  const [phase, setPhase] = useState<"inhale" | "exhale">("inhale");
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();

    const updatePhase = () => {
      const elapsed = (performance.now() - startTime) % cycle;
      const turn = inhaleMs;

      if (elapsed <= turn) {
        setPhase("inhale");
        setProgress(Math.round((elapsed / turn) * 100));
      } else {
        setPhase("exhale");
        setProgress(Math.round(((elapsed - turn) / exhaleMs) * 100));
      }

      animationFrameId = requestAnimationFrame(updatePhase);
    };

    animationFrameId = requestAnimationFrame(updatePhase);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inhaleMs, exhaleMs, cycle]);

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
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
          {/* Well clipping travelling bars */}
          <div className="pacer-well">
            <div className="pacer-band">
              {BARS.map((opacity, i) => (
                <span key={i} className="pacer-bar" style={{ opacity }} />
              ))}
            </div>
          </div>

          {/* Rim with 40 SVG segments */}
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

      {showLabels && (
        <div className="flex flex-col items-center text-center space-y-1 select-none">
          <span className="font-handwriting text-3xl md:text-4xl text-[#2C2621] tracking-wide font-bold capitalize transition-all duration-300">
            {phase === "inhale" ? "Inhale slowly..." : "Exhale smoothly..."}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#5E5347]/80">
            {(inhaleMs / 1000).toFixed(1)}s Inhale · {(exhaleMs / 1000).toFixed(1)}s Exhale
          </span>
        </div>
      )}
    </div>
  );
}
