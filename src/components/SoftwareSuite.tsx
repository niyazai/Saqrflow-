"use client";

import { useState } from "react";

interface SoftwareSuiteProps {
  onOpenDemo?: () => void;
}

export default function SoftwareSuite({ onOpenDemo }: SoftwareSuiteProps) {
  const [activeTab, setActiveTab] = useState(0);

  const softwareProducts = [
    {
      id: "agentic-platform",
      badge: "CORE RUNTIME",
      title: "SaqrFlow Agentic AI Platform",
      description:
        "The ontology-powered operating system for building, deploying, and governing Enterprise AI at scale.",
      highlight: "Unified Enterprise Semantic Ontology",
      mockType: "agentic",
      stats: [
        { label: "Active Enterprise Agents", value: "1,240+" },
        { label: "Execution Latency", value: "< 14ms" },
        { label: "Governance Compliance", value: "100%" },
      ],
    },
    {
      id: "studio",
      badge: "DEVELOPMENT ENVIRONMENT",
      title: "SaqrFlow AI Studio",
      description:
        "The development environment where engineers and business analysts design, build, and deploy Enterprise AI applications.",
      highlight: "Full-Lifecycle Low-Code & Pro-Code Tooling",
      mockType: "studio",
      stats: [
        { label: "Pre-Built Connectors", value: "120+" },
        { label: "Time-to-Production", value: "1/10th" },
        { label: "Model Frameworks", value: "All Major" },
      ],
    },
    {
      id: "applications",
      badge: "PRODUCTION APPLICATIONS",
      title: "Enterprise AI Applications",
      description:
        "A portfolio of production-ready AI applications that encode decades of domain expertise across sectors.",
      highlight: "40+ Turnkey High-Value Solutions",
      mockType: "apps",
      stats: [
        { label: "Pre-Built Applications", value: "40+" },
        { label: "Enterprise Value Tracked", value: "$4.2B" },
        { label: "Annual Sensor Records", value: "1.4 Trillion" },
      ],
    },
    {
      id: "generative-ai",
      badge: "ENTERPRISE RAG",
      title: "SaqrFlow Generative AI",
      description:
        "Enterprise-grade generative AI grounded in your proprietary data, delivering cited answers across every business function and industry.",
      highlight: "Deterministic, Hallucination-Free Reasoning",
      mockType: "genai",
      stats: [
        { label: "Citation Verifiability", value: "100%" },
        { label: "Access Control Enforced", value: "RBAC & ABAC" },
        { label: "Multi-Modal Ingest", value: "Text, CAD, Telemetry" },
      ],
    },
    {
      id: "code",
      badge: "AUTONOMOUS SYNTHESIS",
      title: "SaqrFlow Code",
      description:
        "Natural language to production-ready Enterprise AI application — built by autonomous agents, governed from day one.",
      highlight: "Zero-Shot App Generation onto Enterprise Ontology",
      mockType: "code",
      stats: [
        { label: "Generation Speed", value: "Minutes" },
        { label: "Automated Unit Tests", value: "Generated" },
        { label: "Deployment Target", value: "Kubernetes / Bare Metal" },
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
              A complete suite of Enterprise AI products, each built on 15+ years of domain intelligence.
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
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
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
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#111418] hover:text-blue-600 transition-colors"
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
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-neutral-400">
                        saqrflow://runtime/{prod.id}
                      </span>
                    </div>
                    <span className="text-cyan-400 font-medium">LIVE TELEMETRY</span>
                  </div>

                  {/* Dynamic Mockup Body */}
                  {prod.mockType === "agentic" && (
                    <div className="space-y-4 font-mono text-xs">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <span className="text-neutral-400 block text-[10px]">ONTOLOGY NODES</span>
                          <span className="text-lg font-bold text-white font-sans">184,920</span>
                          <span className="text-[10px] text-emerald-400">Synchronized</span>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <span className="text-neutral-400 block text-[10px]">REASONING THREADS</span>
                          <span className="text-lg font-bold text-cyan-400 font-sans">64 Cores</span>
                          <span className="text-[10px] text-neutral-400">0.02% Error Rate</span>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <span className="text-neutral-400 block text-[10px]">SECURITY GUARDRAILS</span>
                          <span className="text-lg font-bold text-emerald-400 font-sans">ACTIVE</span>
                          <span className="text-[10px] text-neutral-400">Zero Exfiltration</span>
                        </div>
                      </div>

                      <div className="p-4 rounded bg-black/60 border border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-neutral-400 pb-2 border-b border-white/5 text-[11px]">
                          <span>AGENT CLUSTER</span>
                          <span>TASK DEPLOYMENT</span>
                          <span>STATUS</span>
                        </div>
                        <div className="flex items-center justify-between text-white text-[11px]">
                          <span className="text-cyan-300">agent-turbomachinery-08</span>
                          <span className="text-neutral-300">Bearing vibration forecast #441</span>
                          <span className="text-emerald-400">OPTIMAL</span>
                        </div>
                        <div className="flex items-center justify-between text-white text-[11px]">
                          <span className="text-cyan-300">agent-fleet-inventory-21</span>
                          <span className="text-neutral-300">Re-route spares to Singapore dock</span>
                          <span className="text-cyan-400">EXECUTING</span>
                        </div>
                        <div className="flex items-center justify-between text-white text-[11px]">
                          <span className="text-cyan-300">agent-grid-telemetry-04</span>
                          <span className="text-neutral-300">Transformer phase angle adjust</span>
                          <span className="text-emerald-400">VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {prod.mockType === "studio" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-black/50 p-3 rounded border border-white/10 text-xs font-mono">
                        <span className="text-neutral-400">PIPELINE: SAP_ERP → OPC_UA → ONTO_MAPPER → ML_INFERENCE</span>
                        <span className="text-emerald-400">● 100% HEALTH</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <p className="text-neutral-400 mb-1">DATA CONNECTORS</p>
                          <p className="text-white font-medium">Snowflake, Databricks, Kafka, SCADA, Salesforce</p>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <p className="text-neutral-400 mb-1">AI MODEL SELECTION</p>
                          <p className="text-white font-medium">Gradient Boosted, Deep Temporal, Transformer Agents</p>
                        </div>
                      </div>
                      <div className="h-16 rounded bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-purple-900/30 border border-white/10 flex items-center justify-around text-xs font-mono text-neutral-300">
                        <span>[Ingest: 1.2M msg/s]</span>
                        <span>→</span>
                        <span>[Ontology Normalization]</span>
                        <span>→</span>
                        <span className="text-cyan-400">[Automated Execution]</span>
                      </div>
                    </div>
                  )}

                  {prod.mockType === "apps" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                        <div className="p-3 rounded bg-cyan-950/40 border border-cyan-800/40">
                          <span className="text-neutral-400 block text-[10px]">RELIABILITY</span>
                          <span className="text-sm font-bold text-cyan-300">99.85%</span>
                          <span className="text-[10px] text-neutral-400">Uptime</span>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <span className="text-neutral-400 block text-[10px]">DEMAND ACCURACY</span>
                          <span className="text-sm font-bold text-white">96.4%</span>
                          <span className="text-[10px] text-emerald-400">+18% YoY</span>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <span className="text-neutral-400 block text-[10px]">ENERGY SAVED</span>
                          <span className="text-sm font-bold text-white">14.2 GWh</span>
                          <span className="text-[10px] text-emerald-400">FY26</span>
                        </div>
                        <div className="p-3 rounded bg-white/5 border border-white/10">
                          <span className="text-neutral-400 block text-[10px]">INVENTORY SLACK</span>
                          <span className="text-sm font-bold text-white">-28%</span>
                          <span className="text-[10px] text-emerald-400">Lean Stock</span>
                        </div>
                      </div>
                      <div className="p-4 rounded bg-black/60 border border-white/10 text-xs font-mono text-neutral-300 space-y-1">
                        <p className="text-cyan-400 font-bold mb-1">CRITICAL ALERTS PREVENTED (LAST 24 HOURS):</p>
                        <p className="text-neutral-400">› Furnace #04: Coking risk averted via temperature trim (-12°C)</p>
                        <p className="text-neutral-400">› Turbine Stage 3: Bearing anomaly flagged 14 days prior to breakdown</p>
                      </div>
                    </div>
                  )}

                  {prod.mockType === "genai" && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded bg-black/60 border border-white/10">
                        <span className="text-neutral-400 text-[10px] block">ENTERPRISE QUERY</span>
                        <span className="text-white font-sans font-medium text-sm">
                          "What is the scheduled downtime impact if cracking furnace F-102 undergoes decoking today?"
                        </span>
                      </div>
                      <div className="p-3.5 rounded bg-cyan-950/30 border border-cyan-800/40 text-neutral-200 leading-relaxed font-sans text-xs">
                        <p className="font-semibold text-cyan-300 font-mono text-[11px] mb-1">
                          GROUNDED REASONING WITH 100% AUDIT TRAIL:
                        </p>
                        Decoking F-102 today results in a net throughput reduction of 410 bbl/day, offset by switching 60% load to F-103. Overall margin impact is constrained to +$12,400 due to off-peak tariff timing.
                        <div className="mt-2 pt-2 border-t border-cyan-800/30 flex items-center gap-3 text-[10px] font-mono text-cyan-400">
                          <span>[SOURCE: DOW_OPERATIONS_MANUAL_V4.PDF §12.3]</span>
                          <span>[SCADA_FEED_09:14:02Z]</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {prod.mockType === "code" && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded bg-black/70 border border-white/10 text-neutral-300">
                        <span className="text-neutral-500 block text-[10px]">NATURAL LANGUAGE SPECIFICATION</span>
                        <span className="text-cyan-300 font-semibold">
                          $ saqrflow generate app --name "predictive-subsea-leak" --input "sensor.pressure, sensor.flow"
                        </span>
                      </div>
                      <div className="p-3.5 rounded bg-white/[0.03] border border-white/10 text-neutral-400 text-[11px] space-y-1">
                        <p className="text-emerald-400">✓ Ingesting telemetry schema from Subsea Pipeline Ontology...</p>
                        <p className="text-emerald-400">✓ Generating Kalman-Filter anomaly detection agent...</p>
                        <p className="text-emerald-400">✓ Synthesizing REST endpoints with mutual TLS authentication...</p>
                        <p className="text-cyan-400 font-bold mt-2">DEPLOYED TO AIR-GAPPED K8S CLUSTER IN 42 SECONDS.</p>
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
