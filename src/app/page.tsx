"use client";

import React, { useState } from "react";
import { KraftBackground } from "@/components/KraftBackground";
import { PacerDial } from "@/components/PacerDial";
import { PacerControls } from "@/components/PacerControls";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  const [paceSeconds, setPaceSeconds] = useState(5.5);

  return (
    <KraftBackground className="flex flex-col min-h-screen justify-between items-center py-6 px-4">
      {/* Hidden Navigation Bar (Reveals on mouse move / scroll / swipe) */}
      <Navbar />

      {/* Main Breathing Pacer Centered */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-xl mx-auto my-auto z-10 pt-16 pb-8">
        <PacerDial
          inhaleMs={paceSeconds * 1000}
          exhaleMs={paceSeconds * 1000}
          showLabels={true}
        />

        {/* Minimal Audio & Pace Controls */}
        <div className="mt-8">
          <PacerControls
            paceSeconds={paceSeconds}
            setPaceSeconds={setPaceSeconds}
          />
        </div>
      </main>

      {/* Subtle Handwritten Hint */}
      <footer className="z-10 pb-4 text-center select-none">
        <p className="font-handwriting text-xl text-[#5E5347]/70 tracking-wide">
          scroll or move mouse to reveal menu ~
        </p>
      </footer>
    </KraftBackground>
  );
}
