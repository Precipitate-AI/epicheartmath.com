import React from "react";
import Link from "next/link";
import { Heart, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#2C2621]/15 py-12 px-6 mt-20 relative z-10 bg-[#D7C4A7]/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <span className="font-handwriting text-3xl font-bold text-[#2C2621]">
            Epic Heart Math
          </span>
          <p className="text-xs font-mono text-[#5E5347]">
            Built with intention for nervous system coherence & personal longevity.
          </p>
        </div>

        <div className="flex items-center space-x-6 text-sm text-[#5E5347]">
          <Link
            href="/about"
            className="hover:text-[#2C2621] font-handwriting text-xl underline decoration-[#C85A32]/40 underline-offset-4"
          >
            About Bob
          </Link>
          <a
            href="https://github.com/Precipitate-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-[#2C2621]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="mailto:precipitate.protocol@gmail.com"
            className="flex items-center space-x-1 hover:text-[#2C2621]"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-[#2C2621]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5E5347]/70 font-mono gap-2 text-center">
        <span>© {new Date().getFullYear()} Bob Chugani · epicheartmath.com</span>
        <span className="flex items-center gap-1">
          Made with <Heart className="w-3 h-3 text-[#C85A32] fill-[#C85A32]" /> & resonant breathing
        </span>
      </div>
    </footer>
  );
}
