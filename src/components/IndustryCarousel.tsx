"use client";

import { useState } from "react";

interface IndustryCarouselProps {
  onOpenDemo?: () => void;
}

const INDUSTRIES = [
  {
    id: "defense",
    name: "Defense & Intelligence",
    tagline: "Decision Advantage,\nDelivered.",
    intro:
      "The intelligence that arms warfighters, planners, and commanders for modern readiness.",
    label: "Defense Applications",
    apps: [
      "SaqrFlow Readiness & Sustainment",
      "SaqrFlow Decision Advantage",
      "SaqrFlow Intelligence Analysis",
      "Sensor Fusion & Situational Awareness",
    ],
    telemetry: "AIR-GAPPED COMPLIANT // CLASSIFIED READY // MIL-STD 810H",
    stats: "30% Reduction in Unplanned Fleet Maintenance",
  },
  {
    id: "maritime",
    name: "Maritime",
    tagline: "Sea Power,\nBuilt on AI.",
    intro:
      "The AI powering the shipyards, supply chains, and fleets behind the world’s most capable navies.",
    label: "Maritime Applications",
    apps: [
      "SaqrFlow Production Schedule Optimization",
      "SaqrFlow Supply Chain Orchestration",
      "Drydock Turnaround Predictor",
      "Vessel Hull Telemetry & Degradation",
    ],
    telemetry: "NAVAL VESSEL TELEMETRY // REAL-TIME LOGISTICS INGEST",
    stats: "99.2% Supply Part Availability on Deployment",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    tagline: "Production at Peak Performance.",
    intro:
      "Higher yield, more throughput, and fewer breakdowns across every plant and factory.",
    label: "Manufacturing Applications",
    apps: [
      "SaqrFlow Demand Planning",
      "SaqrFlow Reliability & Predictive Health",
      "SaqrFlow Process Optimization",
      "Yield Optimization & Scrap Reduction",
    ],
    telemetry: "SCADA / OPC-UA CONNECTIONS // SUB-SECOND INGEST",
    stats: "40% Decrease in Unplanned Assembly Downtime",
  },
  {
    id: "federal",
    name: "Federal",
    tagline: "Mission-Ready Government.",
    intro:
      "One unified view of federal, state, and local agencies, serving citizens at enterprise speed.",
    label: "Federal Applications",
    apps: [
      "SaqrFlow Federal Agency Orchestration",
      "Citizen Service Intelligence",
      "Government Procurement & Audit",
      "Infrastructure Risk Intelligence",
    ],
    telemetry: "FEDRAMP HIGH READY // SOC 2 TYPE II CERTIFIED",
    stats: "$420M+ Identified in Agency Budget Efficiencies",
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    tagline: "Higher Output.\nSafer Operations.",
    intro:
      "The AI lifting production across wells, subsea pipelines, and downstream refineries.",
    label: "Energy Applications",
    apps: [
      "SaqrFlow Turbomachinery Reliability",
      "SaqrFlow Process Optimization",
      "SaqrFlow Inventory & Spares Optimization",
      "Hydrocarbon Leak & Flare Detection",
    ],
    telemetry: "DOWSTREAM & UPSTREAM SENSOR SYNCHRONIZATION",
    stats: "13,000+ Real-Time Streaming Sensor Feeds per Site",
  },
  {
    id: "utilities",
    name: "Utilities",
    tagline: "Reliable,\nResilient Power.",
    intro:
      "The AI optimizing generation, transmission, and grid distribution across modern power utilities.",
    label: "Grid Applications",
    apps: [
      "SaqrFlow Energy Management & Load Balance",
      "Substation & Transformer Reliability",
      "Wildfire Risk Mitigation & Vegetation AI",
      "Autonomous Field Service Dispatch",
    ],
    telemetry: "SMART METER INGESTION // NERC CIP COMPLIANT",
    stats: "85% Accuracy in Proactive Grid Outage Prevention",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "Better Care.\nFaster Breakthroughs.",
    intro:
      "Clinical, claims, and research data connected to accelerate discovery and improve patient care.",
    label: "Life Sciences Applications",
    apps: [
      "SaqrFlow Clinical Data Synthesis",
      "Pharmaceutical Supply Assurance",
      "Medical Device Telemetry & Uptime",
      "Trial Cohort Intelligence",
    ],
    telemetry: "HIPAA COMPLIANT // ZERO PATIENT DATA EXFILTRATION",
    stats: "3x Acceleration in Clinical Protocol Analysis",
  },
];

export default function IndustryCarousel({ onOpenDemo }: IndustryCarouselProps) {
  const [activeTab, setActiveTab] = useState(0);
  const current = INDUSTRIES[activeTab];

  return (
    <section id="industries" className="relative w-full bg-black text-white py-24 border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-12">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-3">
              Sector Specialization
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Built for Your Industry
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base text-neutral-400 leading-relaxed">
              Each sector has its own complexity. SaqrFlow delivers purpose-built applications grounded in how your industry actually works.
            </p>
          </div>
        </div>

        {/* Industry Tabs Bar */}
        <div className="border-b border-white/15 overflow-x-auto no-scrollbar mb-10">
          <div className="flex items-center gap-1 sm:gap-2 min-w-max pb-3">
            {INDUSTRIES.map((ind, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`px-4 sm:px-5 py-2.5 rounded text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-md"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {ind.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Industry Showcase Card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#0c1017] via-[#090c12] to-[#0f141f] p-8 sm:p-14 transition-all duration-300">
          {/* Subtle grid background */}
          <div className="absolute inset-0 c3-grid-pattern opacity-25 pointer-events-none" />

          {/* Telemetry Tag */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono text-cyan-400/80 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{current.telemetry}</span>
            </div>
            <div className="text-neutral-400">
              IMPACT: <span className="text-white font-semibold">{current.stats}</span>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Card Column: Headline & CTA */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white whitespace-pre-line leading-[1.1] mb-6 font-sans">
                  {current.tagline}
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-xl">
                  {current.intro}
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="group inline-flex items-center gap-2.5 h-12 px-6 rounded border border-white/30 bg-transparent text-white font-semibold text-sm hover:bg-white hover:text-black transition-all"
                >
                  <span>Explore {current.name}</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Card Column: Application Listing with Chevron Arrows */}
            <div className="lg:col-span-6 rounded-xl border border-white/10 bg-black/40 p-6 sm:p-8 backdrop-blur-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-5 pb-3 border-b border-white/10">
                {current.label}
              </span>

              <ul className="space-y-4">
                {current.apps.map((app, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={onOpenDemo}
                      className="group w-full flex items-center justify-between text-left p-3.5 rounded-lg border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.03] transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-cyan-400 font-mono text-base transition-transform group-hover:translate-x-1">
                          ›
                        </span>
                        <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-white">
                          {app}
                        </span>
                      </div>
                      <svg
                        className="w-4 h-4 text-neutral-500 group-hover:text-cyan-400 transition-colors shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
