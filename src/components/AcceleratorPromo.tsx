"use client";

import { BOOK_A_CALL_HREF } from "@/lib/content";

interface AcceleratorPromoProps {
  onOpenDemo?: () => void;
}

export default function AcceleratorPromo({ onOpenDemo }: AcceleratorPromoProps) {
  return (
    <section className="relative w-full bg-black py-12 px-6 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-[#0c1017] via-[#090d14] to-[#0d121c] p-8 sm:p-12 transition-all hover:border-white/30">
          {/* Subtle background grid line */}
          <div className="absolute inset-0 c3-grid-pattern opacity-25 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                Executive Workflow Immersion | 2026 Partner Series
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans leading-tight">
                Connect and Deploy Full-Stack Agency Fulfilment with SaqrFlow
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
                Join our private agency partner cohort. Hands-on architectural session connecting your forms, GoHighLevel/HubSpot CRM, WhatsApp routing, and live client reporting dashboards.
              </p>
            </div>

            <div className="flex items-center gap-6 self-start lg:self-center shrink-0">
              <a
                href={BOOK_A_CALL_HREF}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-lg"
              >
                <span>Request a Seat</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
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

              {/* Geometric enterprise polygon glyph */}
              <div className="hidden sm:block w-12 h-12 text-white/30">
                <svg
                  viewBox="0 0 648 648"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <polygon points="0,0 0,72.21 576,72 576,288 144,288 144,360 576,360 576,576 0,576.33 0,648 648,648 648,0" />
                  <polygon points="0,144.37 504,144 504,216 72,216 72,432 504,432 504,504 0,503.65" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
