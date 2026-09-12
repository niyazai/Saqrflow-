"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "Capture",
    desc: "Forms, ads, and landing pages feed leads in at the exact moment they convert.",
  },
  {
    n: "02",
    title: "CRM",
    desc: "Every lead lands as a structured, de-duplicated record inside GoHighLevel or HubSpot.",
  },
  {
    n: "03",
    title: "Routing",
    desc: "Leads are scored and routed to the right owner, pipeline, or workflow automatically.",
  },
  {
    n: "04",
    title: "Follow-up",
    desc: "Automated SMS, email, and WhatsApp sequences chase every lead until it's handled.",
  },
  {
    n: "05",
    title: "Integration",
    desc: "Wired into the agency's existing stack — no rip-and-replace, no new tools to learn.",
  },
  {
    n: "06",
    title: "Reporting",
    desc: "Delivery-ready dashboards, built to carry the agency's own branding, not ours.",
  },
] as const;

export default function SystemFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setIsVisible(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="system" className="bg-white text-neutral-900 border-b border-neutral-200 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-wider text-amber-600">
            The system
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl font-sans">
            One connected system, not six disconnected tools.
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-neutral-600">
            This is what gets built behind the scenes of every engagement —
            the same sequence, every time, so a lead can never quietly
            disappear between steps.
          </p>
        </div>

        <div ref={containerRef} className="relative mt-16">
          {/* connecting line — desktop */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-neutral-200 lg:block">
            <div
              className={`line-draw h-full bg-neutral-900 ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: "150ms" }}
            />
          </div>

          <ol className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-y-0">
            {STEPS.map((step, i) => (
              <li key={step.n} className="relative">
                {/* connecting line — mobile/tablet */}
                {i > 0 && (
                  <div className="absolute -top-6 left-6 h-6 w-px bg-neutral-200 sm:hidden">
                    <div
                      className={`line-draw-v h-full bg-neutral-900 ${isVisible ? "is-visible" : ""}`}
                      style={{ transitionDelay: `${150 + i * 120}ms` }}
                    />
                  </div>
                )}

                <div
                  className={`reveal ${isVisible ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${150 + i * 120}ms` }}
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-[13px] font-bold text-neutral-900 shadow-sm">
                    {step.n}
                  </div>
                  <h3 className="mt-4 text-[16px] font-bold text-neutral-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
