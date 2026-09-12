"use client";

import Image from "next/image";
import { BOOK_A_CALL_HREF } from "@/lib/content";

interface HeroBannerProps {
  onOpenDemo?: () => void;
}

export default function HeroBanner({ onOpenDemo }: HeroBannerProps) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] w-full flex flex-col justify-between overflow-hidden bg-black text-white pt-16 pb-16">
      {/* Background Non-AI Real Enterprise Infrastructure Photo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Global Enterprise Telemetry & Infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] opacity-90 select-none pointer-events-none"
        />
        
        {/* Subtle contrast tint keeping the cosmic telemetry visible while preserving text legibility */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        
        {/* Smooth gradient fading into the black section below */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          {/* Left Column: Huge Headline */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-[-0.03em] leading-[1.05] text-white font-sans drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              The Operating System for Enterprise Automation
            </h1>
          </div>

          {/* Right Column: Subtitle */}
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-lg lg:text-xl text-neutral-200 font-normal leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Turn operational data into real-time decision making, flawless lead routing, and autonomous execution at scale.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-10 lg:mt-14 flex flex-wrap items-center gap-4">
          <a
            href={BOOK_A_CALL_HREF}
            className="group inline-flex items-center justify-center gap-3 h-14 px-8 text-base font-semibold text-black bg-white rounded-md transition-all hover:bg-neutral-200 hover:shadow-xl hover:shadow-white/10"
          >
            <span>Book a Call</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="/#system"
            className="inline-flex items-center justify-center gap-2 h-14 px-7 text-base font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-md transition-all"
          >
            <span>Explore The System</span>
            <span className="text-neutral-400 font-mono">↓</span>
          </a>

          <a
            href="/team"
            className="inline-flex items-center justify-center gap-2 h-14 px-7 text-base font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-md transition-all"
          >
            <span>Meet The Team</span>
            <span className="text-neutral-400 font-mono">→</span>
          </a>
        </div>
      </div>

      {/* Bottom telemetry line - Clean Monochrome */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              CONNECTED PIPELINES: ACTIVE
            </span>
            <span className="hidden md:inline">
              WHITE-LABEL FULFILMENT FOR AGENCIES
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-neutral-300">DETERMINISTIC DATA INTEGRATION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
