"use client";

interface AcceleratorPromoProps {
  onOpenDemo?: () => void;
}

export default function AcceleratorPromo({ onOpenDemo }: AcceleratorPromoProps) {
  return (
    <section className="relative w-full bg-black py-12 px-6 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-[#0c121c] via-[#090e17] to-[#0d1420] p-8 sm:p-12 transition-all hover:border-cyan-500/40">
          {/* Subtle animated background grid line */}
          <div className="absolute inset-0 c3-grid-pattern opacity-30 pointer-events-none" />

          {/* Accent glow on right */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3">
                <span className="w-2 h-2 rounded-sm bg-cyan-400" />
                AI Accelerator Series | Executive Immersion
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans leading-tight">
                Build an Enterprise AI Application in One Day with SaqrFlow Code
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
                Join our private executive accelerator. Hands-on architectural session transforming natural language and domain ontology into production-ready software.
              </p>
            </div>

            <div className="flex items-center gap-6 self-start lg:self-center shrink-0">
              <button
                type="button"
                onClick={onOpenDemo}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-lg hover:shadow-cyan-500/10"
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
              </button>

              {/* Geometric enterprise polygon glyph */}
              <div className="hidden sm:block w-12 h-12 text-white/40">
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
