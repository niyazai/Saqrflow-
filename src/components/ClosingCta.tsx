import Link from "next/link";
import { BOOK_A_CALL_HREF } from "@/lib/content";
import Reveal from "./Reveal";

export default function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-[#07090d] text-white border-t border-b border-white/10 py-24 sm:py-32">
      {/* Subtle enterprise grid texture */}
      <div className="absolute inset-0 c3-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl font-sans leading-tight">
            Stop leads falling through the cracks between your tools.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-neutral-400">
            One architectural briefing to assess your lead flows, CRM connectivity, and workflow bottlenecks — no sales deck, no pressure.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BOOK_A_CALL_HREF}
              className="group inline-flex items-center justify-center gap-2.5 h-12 px-7 text-sm sm:text-base font-semibold text-black bg-white rounded-md transition-all hover:bg-neutral-200 hover:shadow-xl hover:shadow-white/10"
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

            <Link
              href="/team"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 text-sm sm:text-base font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-md transition-all"
            >
              <span>Explore Team & Portfolios</span>
              <span className="text-neutral-400 font-mono">→</span>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="text-neutral-300">✓</span>
              <span>Direct access to systems architects</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-neutral-300">✓</span>
              <span>100% white-label agency delivery</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-neutral-300">✓</span>
              <span>Transparent tiered pricing</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
