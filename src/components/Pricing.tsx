import {
  BOOK_A_CALL_HREF,
  FOUNDING_ACCESS_SPOTS_FILLED,
  FOUNDING_ACCESS_TOTAL_SPOTS,
} from "@/lib/content";
import Reveal from "./Reveal";

const TIERS = [
  {
    id: "proof",
    name: "Paid Proof",
    price: "From £300",
    priceNote: "one-off — £500 for a scoped workflow",
    desc: "A single, defined piece of work — an audit, a repair, or one lead-routing workflow.",
    features: [
      "An audit, a repair, or one lead-routing workflow",
      "No full migration, site build, or custom API",
      "A low-risk way to work together once, before any monthly commitment",
    ],
    cta: "Start with proof",
    highlight: false,
  },
  {
    id: "founding",
    name: "Founding Access",
    price: "£1,000",
    priceNote: "per month",
    desc: "A smaller monthly minimum, reserved for our first two partners.",
    features: [
      "25 managed hours / month",
      "6–12 months of price protection",
      "One active workstream",
      "Reserved for early partners — not a discount",
    ],
    cta: "Claim founding access",
    highlight: true,
  },
  {
    id: "standard",
    name: "Standard",
    price: "£1,500",
    priceNote: "per month",
    desc: "The core offer: CRM setup, automation, and connected landing pages.",
    features: [
      "40 managed hours / month",
      "CRM / GoHighLevel setup",
      "Zapier / Make automation",
      "Connected landing pages",
      "One active build lane at a time",
      "Up to 25% hour rollover (one month)",
      "14-day defect warranty",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    id: "advanced",
    name: "Advanced",
    price: "From £2,500",
    priceNote: "per month, or a fixed quote",
    desc: "Complex builds that don't fit a flat monthly allowance.",
    features: [
      "Complex n8n builds",
      "Custom APIs",
      "Major migrations",
      "Unusual security requirements",
      "Scoped and priced separately",
    ],
    cta: "Talk to us",
    highlight: false,
  },
] as const;

const spotsLeft = Math.max(
  FOUNDING_ACCESS_TOTAL_SPOTS - FOUNDING_ACCESS_SPOTS_FILLED,
  0,
);

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white text-neutral-900 border-b border-neutral-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
            PRICING ARCHITECTURE
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl font-sans">
            Four ways to work together.
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-neutral-600">
            Transparent monthly pricing. No hourly rate — you&apos;re paying
            for a managed system, not a timesheet.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.id} delayMs={i * 80}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 transition-all ${
                  tier.highlight
                    ? "border-neutral-950 bg-neutral-50 shadow-xl ring-1 ring-neutral-950"
                    : "border-neutral-200 bg-white shadow-sm hover:border-neutral-300"
                }`}
              >
                {tier.highlight && (
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-neutral-100 border border-neutral-300 px-2.5 py-1 text-[11.5px] font-mono font-semibold text-neutral-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                    {spotsLeft} of {FOUNDING_ACCESS_TOTAL_SPOTS} spots available
                  </span>
                )}

                <h3 className="text-[16px] font-bold text-neutral-950">
                  {tier.name}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-600">
                  {tier.desc}
                </p>

                <div className="mt-6">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 font-sans">
                    {tier.price}
                  </span>
                  <p className="mt-1 text-[13px] text-neutral-500">
                    {tier.priceNote}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2.5 text-[13.5px] leading-relaxed text-neutral-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={BOOK_A_CALL_HREF}
                  className={`mt-8 inline-flex h-11 items-center justify-center rounded-md px-5 text-[13.5px] font-semibold transition-all ${
                    tier.highlight
                      ? "bg-black text-white hover:bg-neutral-800 shadow-md"
                      : "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
