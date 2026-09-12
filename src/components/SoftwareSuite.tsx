"use client";

interface SoftwareSuiteProps {
  onOpenDemo?: () => void;
}

export default function SoftwareSuite({ onOpenDemo }: SoftwareSuiteProps) {
  const softwareProducts = [
    {
      id: "agentic-platform",
      badge: "CORE RUNTIME",
      title: "SaqrFlow Operating Platform",
      description:
        "The ontology-powered operating system for building, deploying, and governing enterprise automation at scale.",
      highlight: "Unified Enterprise Semantic Architecture",
      mockType: "agentic",
      stats: [
        { label: "Active Pipelines", value: "1,240+" },
        { label: "Execution Latency", value: "< 14ms" },
        { label: "Governance Compliance", value: "100%" },
      ],
    },
    {
      id: "studio",
      badge: "DEVELOPMENT ENVIRONMENT",
      title: "SaqrFlow Studio",
      description:
        "The development environment where engineers design, build, and deploy enterprise workflows and connected systems.",
      highlight: "Full-Lifecycle Low-Code & Pro-Code Tooling",
      mockType: "studio",
      stats: [
        { label: "Pre-Built Connectors", value: "120+" },
        { label: "Time-to-Production", value: "1/10th" },
        { label: "Integration Stack", value: "GHL, HubSpot, SQL" },
      ],
    },
    {
      id: "applications",
      badge: "PRODUCTION APPLICATIONS",
      title: "Enterprise Applications",
      description:
        "A portfolio of production-ready applications that encode decades of domain expertise across sectors.",
      highlight: "40+ Turnkey High-Value Solutions",
      mockType: "apps",
      stats: [
        { label: "Pre-Built Applications", value: "40+" },
        { label: "Enterprise Value Tracked", value: "$4.2B" },
        { label: "Annual Records Processed", value: "1.4 Trillion" },
      ],
    },
    {
      id: "generative-ai",
      badge: "VERIFIED REASONING",
      title: "SaqrFlow Intelligence",
      description:
        "Enterprise intelligence grounded in your proprietary data, delivering cited answers and automated decisions.",
      highlight: "Deterministic, Verifiable Reasoning",
      mockType: "genai",
      stats: [
        { label: "Citation Verifiability", value: "100%" },
        { label: "Access Control Enforced", value: "RBAC & ABAC" },
        { label: "Multi-Modal Ingest", value: "CRM, Docs, Telemetry" },
      ],
    },
    {
      id: "code",
      badge: "WORKFLOW SYNTHESIS",
      title: "SaqrFlow Code",
      description:
        "Natural language to production-ready enterprise workflows — built by autonomous agents, governed from day one.",
      highlight: "Zero-Shot App Generation onto Enterprise Ontology",
      mockType: "code",
      stats: [
        { label: "Generation Speed", value: "Minutes" },
        { label: "Automated Unit Tests", value: "Generated" },
        { label: "Deployment Target", value: "Cloud / On-Prem" },
      ],
    },
  ];

  return (
    <section id="software" className="relative w-full bg-[#f0f2f5] text-[#111418] py-24 transition-colors">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Title Block matching C3 AI's Our Software */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-neutral-300">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-600 block mb-3">
              Application Architecture
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#111418] font-sans">
              Our Software
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              A complete suite of enterprise products, each built on 15+ years of domain intelligence and operational execution.
            </p>
            <div>
              <button
                type="button"
                onClick={onOpenDemo}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded border border-neutral-400 bg-white text-[#111418] font-semibold text-sm hover:bg-[#111418] hover:text-white transition-all shadow-sm"
              >
                <span>Explore the Product Portfolio Overview</span>
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
        </div>

        {/* Alternating Software Product Cards */}
        <div className="divide-y divide-neutral-300">
          {softwareProducts.map((prod, idx) => (
            <div
              key={prod.id}
              className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Text Column */}
              <div
                className={`lg:col-span-5 ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-neutral-200/80 border border-neutral-300 text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                  {prod.badge}
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111418] font-sans mb-4">
                  {prod.title}
                </h3>

                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6 font-normal">
                  {prod.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200 mb-8">
                  {prod.stats.map((st, i) => (
                    <div key={i}>
                      <p className="text-lg sm:text-2xl font-bold text-[#111418] font-sans">
                        {st.value}
                      </p>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {st.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#111418] hover:text-neutral-600 transition-colors"
                  >
                    <span>Discover {prod.title}</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>

              {/* Interactive Demo UI Mockup Column */}
              <div
                className={`lg:col-span-7 ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-[#0c1017] shadow-2xl p-6 sm:p-8 text-white">
                  {/* Mock Window Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                      <span className="ml-2 text-neutral-400">
                        saqrflow://runtime/{prod.id}
                      </span>
                    </div>
                    <span className="text-neutral-400 font-medium font-mono text-[11px]">ACTIVE RUNTIME</span>
                  </div>

                  {/* Dynamic Mockup Body */}
                  {prod.mockType === "agentic" && (
                    <div className="space-y-4 font-mono text-xs">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <span className="text-neutral-400 block text-[10px]">CONNECTED NODES</span>
                          <span className="text-lg font-bold text-white font-sans">184,920</span>
                          <span className="text-[10px] text-neutral-400">Synchronized</span>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <span className="text-neutral-400 block text-[10px]">EXECUTION THREADS</span>
                          <span className="text-lg font-bold text-white font-sans">64 Cores</span>
                          <span className="text-[10px] text-neutral-400">0.02% Error Rate</span>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <span className="text-neutral-400 block text-[10px]">SECURITY GUARDRAILS</span>
                          <span className="text-lg font-bold text-white font-sans">ACTIVE</span>
                          <span className="text-[10px] text-neutral-400">Zero Exfiltration</span>
                        </div>
                      </div>

                      <div className="p-4 rounded bg-black/60 border border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-neutral-400 pb-2 border-b border-white/5 text-[11px]">
                          <span>WORKFLOW CLUSTER</span>
                          <span>TASK DEPLOYMENT</span>
                          <span>STATUS</span>
                        </div>
                        <div className="flex items-center justify-between text-white text-[11px]">
                          <span className="text-neutral-300">turbomachinery-lead-08</span>
                          <span className="text-neutral-400">Bearing vibration forecast #441</span>
                          <span className="text-white font-semibold">OPTIMAL</span>
                        </div>
                        <div className="flex items-center justify-between text-white text-[11px]">
                          <span className="text-neutral-300">agency-inventory-21</span>
                          <span className="text-neutral-400">Re-route leads to UK South hub</span>
                          <span className="text-neutral-300">EXECUTING</span>
                        </div>
                        <div className="flex items-center justify-between text-white text-[11px]">
                          <span className="text-neutral-300">grid-telemetry-04</span>
                          <span className="text-neutral-400">Transformer phase angle adjust</span>
                          <span className="text-white font-semibold">VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {prod.mockType === "studio" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-black/50 p-3 rounded border border-white/10 text-xs font-mono">
                        <span className="text-neutral-400">PIPELINE: CRM_INGEST → LEAD_ROUTER → WHATSAPP_QA → DASHBOARD</span>
                        <span className="text-white">● 100% HEALTH</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <p className="text-neutral-400 mb-1">CONNECTORS</p>
                          <p className="text-white font-medium">GoHighLevel, HubSpot, Zapier, Make, n8n, Webhooks</p>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <p className="text-neutral-400 mb-1">AUTOMATION ENGINE</p>
                          <p className="text-white font-medium">De-duplication, Multi-channel Chase, Human Fallback</p>
                        </div>
                      </div>
                      <div className="h-16 rounded bg-neutral-900 border border-white/10 flex items-center justify-around text-xs font-mono text-neutral-300">
                        <span>[Forms & Ads Ingest]</span>
                        <span>→</span>
                        <span>[Lead Scoring & Routing]</span>
                        <span>→</span>
                        <span className="text-white font-semibold">[CRM Hand-off]</span>
                      </div>
                    </div>
                  )}

                  {prod.mockType === "apps" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <span className="text-neutral-400 block text-[10px]">RELIABILITY</span>
                          <span className="text-sm font-bold text-white">99.85%</span>
                          <span className="text-[10px] text-neutral-400">Uptime</span>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <span className="text-neutral-400 block text-[10px]">DEMAND ACCURACY</span>
                          <span className="text-sm font-bold text-white">96.4%</span>
                          <span className="text-[10px] text-neutral-400">+18% YoY</span>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <span className="text-neutral-400 block text-[10px]">ENERGY SAVED</span>
                          <span className="text-sm font-bold text-white">14.2 GWh</span>
                          <span className="text-[10px] text-neutral-400">FY26</span>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <span className="text-neutral-400 block text-[10px]">INVENTORY SLACK</span>
                          <span className="text-sm font-bold text-white">-28%</span>
                          <span className="text-[10px] text-neutral-400">Lean Stock</span>
                        </div>
                      </div>
                      <div className="p-4 rounded bg-black/60 border border-white/10 text-xs font-mono text-neutral-300 space-y-1">
                        <p className="text-white font-bold mb-1">CRITICAL ALERTS RESOLVED (LAST 24 HOURS):</p>
                        <p className="text-neutral-400">› Lead queue: Ingestion spike handled with zero lead drop</p>
                        <p className="text-neutral-400">› WhatsApp API: Out-of-bounds message caught and routed to human agent</p>
                      </div>
                    </div>
                  )}

                  {prod.mockType === "genai" && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded bg-black/60 border border-white/10">
                        <span className="text-neutral-400 text-[10px] block">ENTERPRISE QUERY</span>
                        <span className="text-white font-sans font-medium text-sm">
                          "What is the scheduled downtime impact if cracking furnace F-102 undergoes maintenance today?"
                        </span>
                      </div>
                      <div className="p-3.5 rounded bg-white/5 border border-white/10 text-neutral-200 leading-relaxed font-sans text-xs">
                        <p className="font-semibold text-white font-mono text-[11px] mb-1">
                          GROUNDED REASONING WITH 100% AUDIT TRAIL:
                        </p>
                        Maintenance on F-102 today results in a net throughput reduction of 410 bbl/day, offset by switching 60% load to F-103.
                        <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-3 text-[10px] font-mono text-neutral-400">
                          <span>[SOURCE: OPERATIONS_MANUAL_V4.PDF §12.3]</span>
                          <span>[TELEMETRY_FEED_09:14:02Z]</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {prod.mockType === "code" && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded bg-black/70 border border-white/10 text-neutral-300">
                        <span className="text-neutral-500 block text-[10px]">SPECIFICATION PROMPT</span>
                        <span className="text-white font-semibold">
                          $ saqrflow deploy workflow --name "ghl-whatsapp-router" --crm "gohighlevel"
                        </span>
                      </div>
                      <div className="p-3.5 rounded bg-white/[0.03] border border-white/10 text-neutral-400 text-[11px] space-y-1">
                        <p className="text-neutral-300">✓ Ingesting lead schema from Webhook endpoint...</p>
                        <p className="text-neutral-300">✓ Configuring de-duplication rules & pipeline stages...</p>
                        <p className="text-neutral-300">✓ Activating WhatsApp follow-up sequence with fallback...</p>
                        <p className="text-white font-bold mt-2">DEPLOYED AND LIVE IN PRODUCTION.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
