"use client";

import { useState, useEffect, useRef } from "react";

interface HeroBannerProps {
  onOpenDemo?: () => void;
}

export default function HeroBanner({ onOpenDemo }: HeroBannerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // High-performance animated matrix / targeting network canvas mimicking C3 AI's data targets
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Target telemetry nodes
    const targets = Array.from({ length: 28 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 2,
      label: `SYS-${Math.floor(1000 + Math.random() * 9000)}`,
      pulse: Math.random() * Math.PI,
      identified: Math.random() > 0.4,
    }));

    let step = 0;

    const render = () => {
      step += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Subtle background grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Connecting lines between close nodes
      for (let i = 0; i < targets.length; i++) {
        for (let j = i + 1; j < targets.length; j++) {
          const dx = targets[i].x - targets[j].x;
          const dy = targets[i].y - targets[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 210, 255, ${0.15 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(targets[i].x, targets[i].y);
            ctx.lineTo(targets[j].x, targets[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw each targeting node & HUD markers
      targets.forEach((t) => {
        if (isPlaying) {
          t.x += t.vx;
          t.y += t.vy;
          if (t.x < 0) t.x = width;
          if (t.x > width) t.x = 0;
          if (t.y < 0) t.y = height;
          if (t.y > height) t.y = 0;
          t.pulse += 0.04;
        }

        // Pulse ring
        const ringRadius = t.size * 4 + Math.sin(t.pulse) * 4;
        ctx.beginPath();
        ctx.strokeStyle = t.identified
          ? "rgba(0, 210, 255, 0.35)"
          : "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 1;
        ctx.arc(t.x, t.y, Math.max(1, ringRadius), 0, Math.PI * 2);
        ctx.stroke();

        // Target center dot
        ctx.beginPath();
        ctx.fillStyle = t.identified ? "#00d2ff" : "#ffffff";
        ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
        ctx.fill();

        // Technical crosshair corners if identified
        if (t.identified) {
          const s = 9;
          ctx.strokeStyle = "rgba(0, 210, 255, 0.5)";
          ctx.lineWidth = 1.2;

          // Top-left
          ctx.beginPath();
          ctx.moveTo(t.x - s, t.y - s + 4);
          ctx.lineTo(t.x - s, t.y - s);
          ctx.lineTo(t.x - s + 4, t.y - s);
          ctx.stroke();

          // Bottom-right
          ctx.beginPath();
          ctx.moveTo(t.x + s, t.y + s - 4);
          ctx.lineTo(t.x + s, t.y + s);
          ctx.lineTo(t.x + s - 4, t.y + s);
          ctx.stroke();

          // Label
          ctx.font = "10px monospace";
          ctx.fillStyle = "rgba(0, 210, 255, 0.75)";
          ctx.fillText(t.label, t.x + 12, t.y + 4);
        }
      });

      if (isPlaying) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] w-full flex flex-col justify-between overflow-hidden bg-black text-white pt-12 pb-16">
      {/* Background Targeting Canvas */}
      <div className="absolute inset-0 z-0">
        <canvas
          ref={canvasRef}
          className="w-full h-full block opacity-70"
          aria-hidden="true"
        />
        {/* Subtle radial vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* Top telemetry spacer */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 pt-8">
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 font-semibold">SAQRFLOW 2026.2</span>
          <span className="text-neutral-500">|</span>
          <span className="text-neutral-400">ENTERPRISE AGENTIC OS</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          {/* Left Column: Huge Headline */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-[-0.03em] leading-[1.05] text-white font-sans">
              The Agentic Operating System for Enterprise AI
            </h1>
          </div>

          {/* Right Column: Subtitle */}
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed">
              Turn operational data into real-time decision making and autonomous execution at scale.
            </p>
          </div>
        </div>

        {/* CTA Bar & Video Toggle */}
        <div className="mt-10 lg:mt-14 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onOpenDemo}
            className="group inline-flex items-center justify-center gap-3 h-14 px-8 text-base font-semibold text-black bg-white rounded transition-all hover:bg-neutral-200 hover:shadow-xl hover:shadow-white/10"
          >
            <span>Request a Demo</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <a
            href="#software"
            className="inline-flex items-center justify-center gap-2 h-14 px-7 text-base font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded transition-all"
          >
            <span>Explore Architecture</span>
            <span className="text-neutral-400 font-mono">↓</span>
          </a>

          {/* Animation / Video playback toggle */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause background simulation" : "Play background simulation"}
            className="inline-flex items-center gap-2 h-14 px-4 text-xs font-mono text-neutral-400 hover:text-white bg-white/[0.02] border border-white/10 rounded transition-colors"
          >
            {isPlaying ? (
              <>
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
                <span className="hidden sm:inline">Telemetry Active</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="hidden sm:inline">Telemetry Paused</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Bottom telemetry line */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              ONTOLOGY KERNEL: LIVE
            </span>
            <span className="hidden md:inline">
              REAL-TIME SENSOR INGEST: 100K+ MSG/SEC
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-neutral-300">DETERMINISTIC ENTERPRISE REASONING</span>
          </div>
        </div>
      </div>
    </section>
  );
}
