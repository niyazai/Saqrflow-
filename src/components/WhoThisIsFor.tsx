import Reveal from "./Reveal";

const GOOD_FIT = [
  "Lead-generation or performance marketing agencies with a gap between forms, CRM, and follow-up",
  "Web agencies that get CRM or integration requests but don't want to staff for it permanently",
  "GoHighLevel or HubSpot agencies with delivery overflow beyond what their team can absorb",
  "Full-service agencies wanting to offer automation as a new revenue line without hiring internally",
  "3–25 employees, UK-based",
  "Shows a real signal: hiring for a developer/CRM/automation role, a recent client win, already uses GHL/HubSpot, or reviews mentioning delivery delays",
];

const NOT_A_FIT = [
  "1–2 person solo shops — too small to have real delegation need or budget for a monthly retainer",
  "50+ employee agencies — procurement and existing internal capability make this a much longer sale",
  "Agencies whose core service is only ads or SEO with no technical build component",
  "Anyone wanting SaqrFlow to do their content, SEO, design, or ad management — that's not the offer",
];

export default function WhoThisIsFor() {
  return (
    <section id="fit" className="border-b border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-[13px] font-medium uppercase tracking-wider text-amber">
            Who this is for
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            We&apos;d rather you self-select in five seconds than book a call
            that goes nowhere.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal delayMs={80}>
            <div className="h-full rounded-2xl border border-border bg-ink-card p-7">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-dim text-amber">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8.5l3 3 7-7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="text-[15px] font-semibold text-text">
                  Good fit
                </h3>
              </div>
              <ul className="mt-5 space-y-3.5">
                {GOOD_FIT.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[14.5px] leading-relaxed text-text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delayMs={160}>
            <div className="h-full rounded-2xl border border-border bg-ink-raised p-7">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] text-text-faint">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 4l8 8M12 4l-8 8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h3 className="text-[15px] font-semibold text-text">
                  Not a fit
                </h3>
              </div>
              <ul className="mt-5 space-y-3.5">
                {NOT_A_FIT.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[14.5px] leading-relaxed text-text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
