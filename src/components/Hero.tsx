import { BOOK_A_CALL_HREF } from "@/lib/content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_10%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-220px] h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(228,158,33,0.35), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-24 text-center sm:pt-36 sm:pb-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-ink-card px-3 py-1 text-[12.5px] text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            White-label technical fulfilment for UK marketing agencies
          </span>
        </Reveal>

        <Reveal delayMs={80}>
          <h1 className="mt-8 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-6xl">
            We stop leads falling between{" "}
            <span className="text-amber">ads, forms, the CRM,</span> and sales
            follow-up.
          </h1>
        </Reveal>

        <Reveal delayMs={160}>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-[17px] leading-relaxed text-text-muted sm:text-lg">
            SaqrFlow builds the CRM, automation, and lead-flow systems that
            agencies deliver to their own clients — under your brand, never
            ours.
          </p>
        </Reveal>

        <Reveal delayMs={240}>
          <div className="mt-10 flex items-center justify-center">
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
