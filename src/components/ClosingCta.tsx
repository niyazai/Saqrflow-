import { BOOK_A_CALL_HREF } from "@/lib/content";
import Reveal from "./Reveal";

export default function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(228,158,33,0.35), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Stop leads falling through the cracks between your tools.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-text-muted">
            One call to see if it&apos;s a fit — no deck, no pressure.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <a
              href={BOOK_A_CALL_HREF}
              className="inline-flex h-11 items-center rounded-full bg-amber px-6 text-[14.5px] font-medium text-ink shadow-[0_0_0_1px_rgba(228,158,33,0.3),0_8px_24px_-8px_rgba(228,158,33,0.6)] transition-colors hover:bg-amber-bright"
            >
              Book a call
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
