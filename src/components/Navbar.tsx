"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Activity, Menu, X, User, BookOpen, Cpu, Wind } from "lucide-react";

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const idleTimer = useRef<NodeJS.Timeout | null>(null);

  // Trigger reveal on mouse movement, scroll, or touch swipe
  useEffect(() => {
    const handleUserInteraction = () => {
      setVisible(true);

      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }

      // Hide after 4.5 seconds of inactivity if on home landing pacer
      if (pathname === "/") {
        idleTimer.current = setTimeout(() => {
          if (!mobileMenuOpen) {
            setVisible(false);
          }
        }, 4500);
      }
    };

    // If on non-home pages, navbar remains visible
    if (pathname !== "/") {
      setVisible(true);
      return;
    }

    window.addEventListener("mousemove", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [pathname, mobileMenuOpen]);

  const navLinks = [
    { name: "Pacer", href: "/", icon: Wind },
    { name: "About Bob", href: "/about", icon: User },
    { name: "HRV Science", href: "/hrv", icon: BookOpen },
    { name: "Systems & Work", href: "/systems", icon: Cpu },
  ];

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 px-4 flex justify-center transition-all duration-500 ease-out ${
        visible || pathname !== "/" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      onMouseEnter={() => setVisible(true)}
    >
      <nav className="kraft-glass max-w-4xl w-full px-5 py-3 rounded-full flex items-center justify-between shadow-lg border border-[#2C2621]/15">
        {/* Brand Handwriting Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-full bg-[#C85A32] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Heart className="w-4 h-4 fill-white" />
          </div>
          <span className="font-handwriting text-2xl md:text-3xl font-bold tracking-tight text-[#2C2621]">
            Epic Heart Math
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#2C2621] text-[#E5D6C2] shadow-sm font-semibold"
                    : "text-[#5E5347] hover:text-[#2C2621] hover:bg-[#2C2621]/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full hover:bg-[#2C2621]/10 text-[#2C2621]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 kraft-glass rounded-2xl p-4 shadow-xl border border-[#2C2621]/20 flex flex-col space-y-2 z-50">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? "bg-[#2C2621] text-[#E5D6C2] font-semibold"
                    : "text-[#5E5347] hover:bg-[#2C2621]/10"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
