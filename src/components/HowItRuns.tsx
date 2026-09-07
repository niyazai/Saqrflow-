import Reveal from "./Reveal";

const STEPS = [
  {
    n: "1",
    title: "Brief",
    desc: "We learn your stack, your clients, and where leads are currently leaking.",
  },
  {
    n: "2",
    title: "Scope",
    desc: "A fixed-scope plan for the first build, priced against the tier it fits.",
  },
  {
    n: "3",
    title: "Build",
    desc: "Work happens inside your CRM and tools, under your brand throughout.",
  },
  {
    n: "4",
    title: "QA",
    desc: "Every workflow is tested against real edge cases before it reaches a client.",
  },
  {
    n: "5",
    title: "Handover",
    desc: "You get documentation and a working system you own — not a black box.",
  },
] as const;

export default function HowItRuns() {
  return (
    <section className="border-b border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-[13px] font-medium uppercase tracking-wider text-amber">
            How an engagement runs
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Five steps. The same ones, every time.
          </h2>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delayMs={i * 90} as="li">
              <div className="h-full rounded-2xl border border-border bg-ink-card p-6">
                <span className="font-mono text-[13px] text-text-faint">
                  {step.n}
                </span>
                <h3 className="mt-3 text-[15.5px] font-semibold text-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
