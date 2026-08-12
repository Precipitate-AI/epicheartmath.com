"use client";

import React from "react";

interface KraftBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function KraftBackground({ children, className = "" }: KraftBackgroundProps) {
  return (
    <div className={`kraft-paper-bg min-h-screen w-full relative overflow-x-hidden ${className}`}>
      {/* Decorative ambient paper crease/tear line accent top */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2C2621]/10 to-transparent z-10"
      />
      {children}
    </div>
  );
}
