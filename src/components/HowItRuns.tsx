import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Brief",
    desc: "We learn your stack, your clients, and where leads are currently leaking.",
  },
  {
    n: "02",
    title: "Scope",
    desc: "A fixed-scope plan for the first build, priced against the tier it fits.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Work happens inside your CRM and tools, under your brand throughout.",
  },
  {
    n: "04",
    title: "QA",
    desc: "Every workflow is tested against real edge cases before it reaches a client.",
  },
  {
    n: "05",
    title: "Handover",
    desc: "You get documentation and a working system you own — not a black box.",
  },
] as const;

export default function HowItRuns() {
  return (
    <section className="bg-[#f8f9fa] text-neutral-900 border-b border-neutral-200 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
            ENGAGEMENT WORKFLOW
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl font-sans">
            Five steps. The same ones, every time.
          </h2>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delayMs={i * 90} as="li">
              <div className="h-full rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm hover:border-neutral-300 transition-colors">
                <span className="font-mono text-[12px] font-bold text-neutral-400">
                  {step.n}
                </span>
                <h3 className="mt-3 text-[16px] font-bold text-neutral-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
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
