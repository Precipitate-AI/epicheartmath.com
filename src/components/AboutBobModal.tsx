"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Mail,
  ExternalLink,
  GraduationCap,
  Cpu,
  User,
  Star,
  Users,
  MessageCircle,
  Activity,
  Layers,
  ArrowUpRight,
  Sparkles,
  Heart,
} from "lucide-react";
import { INSIGHT_COURSES, TOTAL_COURSE_METRICS, Course } from "@/data/courses";
import { VENTURES, TELEMETRY, TECH_CAPABILITIES } from "@/data/ventures";

interface AboutBobModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "courses" | "builder" | "bio";
}

type TabType = "courses" | "builder" | "bio";
type LangFilter = "all" | "en" | "de" | "es";

export function AboutBobModal({ isOpen, onClose, initialTab = "courses" }: AboutBobModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [langFilter, setLangFilter] = useState<LangFilter>("all");
  const bodyRef = React.useRef<HTMLDivElement>(null);

  // Sync initial tab when modal opens
  useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Reset scroll position on tab or filter change
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
  }, [activeTab, langFilter]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCourses = INSIGHT_COURSES.filter((course) => {
    if (langFilter === "all") return true;
    return course.lang === langFilter;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#16110B]/75 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="sketch-modal relative w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden font-marker text-[#231A12] shadow-2xl">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 pb-3 sm:pb-4 border-b-2 border-[#231A12]/20 flex flex-col gap-3 sm:gap-4 bg-[#a38363]/40">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1F160E]">
                  Bob Chugani
                </h2>
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#1F160E] text-[#EBD9C1]">
                  Solo Builder & Mentor
                </span>
              </div>
              <p className="text-xs sm:text-base text-[#1F160E]/85 font-sketch mt-0.5">
                Linguist who builds autonomous machines · Certified HeartMath Mentor · 20,700+ Students
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full hover:bg-[#1F160E]/10 transition-colors text-[#1F160E] border-2 border-[#1F160E]/30 shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveTab("courses")}
              className={`marker-tab shrink-0 px-3 sm:px-3.5 py-1.5 text-xs sm:text-base font-bold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap transition-all ${
                activeTab === "courses" ? "active" : ""
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Audio Courses ({INSIGHT_COURSES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("builder")}
              className={`marker-tab shrink-0 px-3 sm:px-3.5 py-1.5 text-xs sm:text-base font-bold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap transition-all ${
                activeTab === "builder" ? "active" : ""
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>AI & Autonomous Systems</span>
            </button>

            <button
              onClick={() => setActiveTab("bio")}
              className={`marker-tab shrink-0 px-3 sm:px-3.5 py-1.5 text-xs sm:text-base font-bold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap transition-all ${
                activeTab === "bio" ? "active" : ""
              }`}
            >
              <User className="w-4 h-4" />
              <span>The Journey & Bio</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div ref={bodyRef} className="flex-1 overflow-y-auto p-4 sm:p-7 space-y-5 sm:space-y-6 text-[#1F160E]">
          {/* TAB 1: COURSES & MEDITATIONS */}
          {activeTab === "courses" && (
            <div className="space-y-6">
              {/* Telemetry Highlight Banner */}
              <div className="bg-[#D8BA96]/90 border-2 border-[#1F160E] p-4 sm:p-5 rounded-2xl shadow-[3px_4px_0px_#1F160E]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#1F160E]/20 pb-3 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#B8572A]" />
                      Insight Timer Audio Works
                    </h3>
                    <p className="text-sm font-sketch text-[#1F160E]/80">
                      Science-backed audio courses on nervous system regulation, brainwaves, sleep & coherence.
                    </p>
                  </div>
                  <a
                    href="https://insighttimer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="marker-btn px-3 py-1 text-xs sm:text-sm font-bold flex items-center gap-1.5 self-start sm:self-auto bg-[#EBD9C1]"
                  >
                    <span>Teacher Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Stat Counters */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-2 bg-[#FAF4ED]/60 rounded-xl border border-[#1F160E]/20">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-[#1F160E]">
                      {TOTAL_COURSE_METRICS.totalStudents.toLocaleString()}
                    </div>
                    <div className="text-xs font-sketch text-[#1F160E]/80 flex items-center justify-center gap-1">
                      <Users className="w-3 h-3" /> Students Enrolled
                    </div>
                  </div>

                  <div className="p-2 bg-[#FAF4ED]/60 rounded-xl border border-[#1F160E]/20">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-[#1F160E] flex items-center justify-center gap-1">
                      {TOTAL_COURSE_METRICS.avgRating} <Star className="w-4 h-4 fill-[#B8572A] text-[#B8572A]" />
                    </div>
                    <div className="text-xs font-sketch text-[#1F160E]/80">Avg Rating</div>
                  </div>

                  <div className="p-2 bg-[#FAF4ED]/60 rounded-xl border border-[#1F160E]/20">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-[#1F160E]">
                      {TOTAL_COURSE_METRICS.totalRatings}
                    </div>
                    <div className="text-xs font-sketch text-[#1F160E]/80">Verified Reviews</div>
                  </div>

                  <div className="p-2 bg-[#FAF4ED]/60 rounded-xl border border-[#1F160E]/20">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-[#1F160E]">
                      {TOTAL_COURSE_METRICS.totalCourses}
                    </div>
                    <div className="text-xs font-sketch text-[#1F160E]/80">Courses in 3 Languages</div>
                  </div>
                </div>
              </div>

              {/* Language Filters */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-sm font-bold font-sketch text-[#1F160E]/80">Filter by Language:</span>
                <div className="flex items-center gap-2">
                  {(
                    [
                      { key: "all", label: `All (${INSIGHT_COURSES.length})` },
                      { key: "en", label: "English (8)" },
                      { key: "de", label: "Deutsch (4)" },
                      { key: "es", label: "Español (2)" },
                    ] as const
                  ).map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => setLangFilter(filter.key)}
                      className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${
                        langFilter === filter.key
                          ? "bg-[#1F160E] text-[#EBD9C1] border-[#1F160E]"
                          : "bg-[#D8BA96]/60 text-[#1F160E] border-[#1F160E]/40 hover:bg-[#D8BA96]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-[#FAF4ED]/80 border-2 border-[#1F160E] p-4 rounded-xl shadow-[2.5px_3.5px_0px_#1F160E] flex flex-col justify-between hover:translate-y-[-2px] transition-transform"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#D8BA96] border border-[#1F160E]/30 text-[#1F160E]">
                          {course.tag}
                        </span>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#1F160E]/10 text-[#1F160E]">
                          {course.langLabel}
                        </span>
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold leading-snug text-[#1F160E]">
                        {course.title}
                      </h4>

                      <p className="text-sm font-sketch text-[#1F160E]/85 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#1F160E]/15 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3 text-xs font-mono font-bold text-[#1F160E]/90">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {course.studentsDisplay}
                        </span>
                        <span className="flex items-center gap-1 text-[#B8572A]">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          {course.avgRating.toFixed(2)} ({course.ratingsCount})
                        </span>
                      </div>

                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="marker-btn px-2.5 py-1 text-xs font-bold flex items-center gap-1 text-[#1F160E] hover:text-[#B8572A]"
                      >
                        <span>Listen</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: AI SYSTEMS & BUILDER */}
          {activeTab === "builder" && (
            <div className="space-y-6">
              {/* Hero Banner */}
              <div className="bg-[#D8BA96]/90 border-2 border-[#1F160E] p-5 rounded-2xl shadow-[3px_4px_0px_#1F160E] space-y-3">
                <div className="flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-[#B8572A]" />
                  <h3 className="text-2xl font-bold">Autonomous Systems & Production Engineering</h3>
                </div>
                <p className="text-base font-sketch text-[#1F160E]/90 leading-relaxed">
                  I design, ship, and operate autonomous AI architectures that run businesses—so one operator works with the leverage of an entire engineering and marketing department.
                </p>

                {/* Telemetry Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {TELEMETRY.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FAF4ED]/70 p-3 rounded-xl border border-[#1F160E]/20 text-center"
                    >
                      <div className="font-mono text-2xl sm:text-3xl font-bold text-[#1F160E]">
                        {item.value}
                      </div>
                      <div className="text-xs font-sketch text-[#1F160E]/80 mt-0.5">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Studies / Live Ventures */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#B8572A]" />
                  Live Production Systems & Ventures
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {VENTURES.map((venture) => (
                    <div
                      key={venture.id}
                      className="bg-[#FAF4ED]/85 border-2 border-[#1F160E] p-4 sm:p-5 rounded-xl shadow-[2.5px_3.5px_0px_#1F160E] flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[#1F160E] text-[#EBD9C1]">
                            {venture.kicker}
                          </span>
                          <span className="text-xs font-sketch text-[#1F160E]/75 font-bold">
                            {venture.role}
                          </span>
                        </div>

                        <h5 className="text-lg font-bold leading-snug">{venture.title}</h5>

                        <p className="text-xs font-sketch text-[#1F160E]/80 italic">
                          "{venture.problem}"
                        </p>

                        <div className="space-y-1 font-sketch text-xs text-[#1F160E]/90 bg-[#1F160E]/5 p-2.5 rounded-lg">
                          <div className="font-bold text-[#1F160E] font-marker">What was built:</div>
                          <ul className="space-y-1">
                            {venture.whatWasBuilt.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#1F160E]/15 flex flex-col gap-2">
                        <div className="text-xs font-sketch font-bold text-[#B8572A]">
                          Result: {venture.result}
                        </div>

                        <div className="flex items-center justify-between gap-2 pt-1 flex-wrap">
                          <div className="flex items-center gap-1 flex-wrap">
                            {venture.stack.map((tech, i) => (
                              <span
                                key={i}
                                className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#D8BA96] text-[#1F160E]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {venture.link && (
                            <a
                              href={venture.link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="marker-btn px-2.5 py-1 text-xs font-bold flex items-center gap-1 text-[#1F160E] hover:text-[#B8572A]"
                            >
                              <span>{venture.link.label}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Capabilities Matrix */}
              <div className="bg-[#FAF4ED]/60 border-2 border-[#1F160E]/40 p-4 sm:p-5 rounded-xl space-y-3">
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#B8572A]" />
                  Capability Matrix
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {TECH_CAPABILITIES.map((group, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="font-marker font-bold text-sm text-[#1F160E] border-b border-[#1F160E]/20 pb-1">
                        {group.category}
                      </div>
                      <ul className="space-y-1 text-xs font-sketch text-[#1F160E]/85">
                        {group.skills.map((skill, sIdx) => (
                          <li key={sIdx}>• {skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: THE JOURNEY & BIO */}
          {activeTab === "bio" && (
            <div className="space-y-6">
              <div className="space-y-4 text-base sm:text-lg leading-relaxed">
                <p>
                  I came to software engineering sideways. A bachelor’s in <strong>Information Technology</strong> (American University in Dubai), followed by a master’s in <strong>Applied Linguistics</strong> (University of New England, Australia), and years teaching English for Academic Purposes and HeartMath HRV breathing.
                </p>

                <div className="bg-[#FAF4ED]/80 border-2 border-[#1F160E] p-4 sm:p-5 rounded-xl space-y-2 shadow-[2px_3px_0px_#1F160E]">
                  <div className="font-bold text-lg font-marker text-[#1F160E]">
                    The Linguistic & Engineering Nexus:
                  </div>
                  <p className="font-sketch text-base text-[#1F160E]/90 leading-relaxed">
                    Working with Large Language Models turned out to be half software systems engineering and half applied linguistics. Prompts, structured function calling, vector retrieval boundaries, and semantic failure modes are approached with the same analytical precision as syntax, semantics, and discourse mechanics.
                  </p>
                </div>

                <p>
                  Over the past few years of building autonomous multi-agent pipelines, 24/7 trading systems, and high-velocity ventures, I recognized the ultimate limiter wasn't compute—it was human nervous system capacity.
                </p>

                <div className="bg-[#FAF4ED]/80 border-2 border-[#1F160E] p-4 sm:p-5 rounded-xl space-y-2 shadow-[2px_3px_0px_#1F160E]">
                  <div className="font-bold text-lg font-marker text-[#1F160E] flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#B8572A]" />
                    Why epicheartmath.com Exists:
                  </div>
                  <p className="font-sketch text-base text-[#1F160E]/90 leading-relaxed">
                    <strong className="underline decoration-wavy decoration-[#B8572A]">epicheartmath.com</strong> was born as a return to fundamentals. It is designed as a calm, distraction-free breath pacer set to the <strong>5.5-second resonant frequency (0.1 Hz)</strong>—the precise biological rhythm where heart rate variability (HRV), blood pressure oscillations (Mayer waves), and respiration achieve maximum autonomic coherence.
                  </p>
                </div>

                <div className="space-y-2 font-sketch text-base bg-[#1F160E]/5 p-4 rounded-xl border border-[#1F160E]/20">
                  <div className="font-bold text-lg font-marker text-[#1F160E]">Education & Certification:</div>
                  <ul className="space-y-1.5 text-[#1F160E]/90">
                    <li>• <strong>Bachelor’s in Information Technology</strong> — American University in Dubai</li>
                    <li>• <strong>Master’s in Applied Linguistics</strong> — University of New England, Australia</li>
                    <li>• <strong>Certified HeartMath Mentor & Coach</strong> — HRV, Neurobiology & Stress Resilience</li>
                    <li>• <strong>Insight Timer Teacher</strong> — 14 courses published, 20,700+ students worldwide</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t-2 border-[#231A12]/20 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#a38363]/40">
          <div className="flex items-center space-x-4 text-sm sm:text-base flex-wrap justify-center sm:justify-start">
            <a
              href="https://github.com/Precipitate-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 font-bold hover:text-[#B8572A] underline"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="mailto:bob@precipitate.ai"
              className="flex items-center space-x-1.5 font-bold hover:text-[#B8572A] underline"
            >
              <Mail className="w-4 h-4" />
              <span>bob@precipitate.ai</span>
            </a>
            <a
              href="https://insighttimer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 font-bold hover:text-[#B8572A] underline"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Insight Timer</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="marker-btn px-5 py-1.5 text-base font-bold text-[#1F160E] bg-[#EBD9C1] w-full sm:w-auto text-center"
          >
            Back to Pacer
          </button>
        </div>
      </div>
    </div>
  );
}
