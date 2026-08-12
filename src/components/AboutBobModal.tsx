"use client";

import React from "react";
import { X, Mail, Heart } from "lucide-react";

interface AboutBobModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutBobModal({ isOpen, onClose }: AboutBobModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#231A12]/60 backdrop-blur-sm">
      <div className="sketch-modal relative max-w-xl w-full p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto font-marker text-[#231A12]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#231A12]/10 transition-colors text-[#231A12]"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-4xl font-bold tracking-tight text-[#231A12]">
            Hey, I’m Bob.
          </h2>
          <p className="text-lg text-[#231A12]/80 font-sketch">
            Linguist who builds autonomous machines.
          </p>
        </div>

        {/* Bio Content - 0% Slop */}
        <div className="space-y-4 text-lg leading-relaxed border-t-2 border-[#231A12]/20 pt-4">
          <p>
            I build AI systems that run businesses—so one operator can do the work of an entire department.
          </p>

          <div className="space-y-2 font-sketch text-base bg-[#231A12]/5 p-4 rounded-xl border border-[#231A12]/20">
            <div className="font-bold text-lg font-marker text-[#231A12]">Background:</div>
            <ul className="space-y-1 text-[#231A12]/90">
              <li>• Bachelor’s in IT (American University in Dubai)</li>
              <li>• Master’s in Applied Linguistics (UNSW, Australia)</li>
              <li>• Years teaching EAP & HeartMath HRV breathing</li>
            </ul>
          </div>

          <p>
            Working with LLMs turned out to be half software engineering and half applied linguistics. Today I run autonomous multi-agent pipelines, AI video engines, quant trading desks, and e-commerce ventures across <strong className="font-bold">Precipitate</strong> and <strong className="font-bold">Guestar</strong>.
          </p>

          <p>
            <strong className="font-bold underline decoration-wavy decoration-[#C85A32]">epicheartmath.com</strong> was one of my first web projects. I realized I’d been ignoring my health for the last few years while building. So I rebuilt it into what it was always meant to be: a quiet, distraction-free breath pacer for nervous system coherence.
          </p>
        </div>

        {/* Links & Email */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-[#231A12]/20 pt-4">
          <div className="flex items-center space-x-4 text-base">
            <a
              href="https://github.com/Precipitate-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 font-bold hover:text-[#C85A32] underline"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="mailto:precipitate.protocol@gmail.com"
              className="flex items-center space-x-1.5 font-bold hover:text-[#C85A32] underline"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="marker-btn px-5 py-1.5 text-base font-bold text-[#231A12]"
          >
            Back to Pacer
          </button>
        </div>
      </div>
    </div>
  );
}
