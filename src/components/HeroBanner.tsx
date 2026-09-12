"use client";

import { useState, useEffect, useRef } from "react";
import { BOOK_A_CALL_HREF } from "@/lib/content";

interface HeroBannerProps {
  onOpenDemo?: () => void;
}

export default function HeroBanner({ onOpenDemo }: HeroBannerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Clean, elegant monochrome architectural canvas without any neon/cyan glow
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

    // Subtle neutral particles
    const nodes = Array.from({ length: 32 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle architectural grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 64;
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

      // Connecting lines between close nodes in subtle monochrome
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.07 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      nodes.forEach((node) => {
        if (isPlaying) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0) node.x = width;
          if (node.x > width) node.x = 0;
          if (node.y < 0) node.y = height;
          if (node.y > height) node.y = 0;
        }

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
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
    <section className="relative min-h-[85vh] lg:min-h-[88vh] w-full flex flex-col justify-between overflow-hidden bg-black text-white pt-16 pb-16">
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 z-0">
        <canvas
          ref={canvasRef}
          className="w-full h-full block opacity-60"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          {/* Left Column: Huge Headline */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-[-0.03em] leading-[1.05] text-white font-sans">
              The Operating System for Enterprise Automation
            </h1>
          </div>

          {/* Right Column: Subtitle */}
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed">
              Turn operational data into real-time decision making, flawless lead routing, and autonomous execution at scale.
            </p>
          </div>
        </div>

        {/* CTA Bar & Video Toggle */}
        <div className="mt-10 lg:mt-14 flex flex-wrap items-center gap-4">
          <a
            href={BOOK_A_CALL_HREF}
            className="group inline-flex items-center justify-center gap-3 h-14 px-8 text-base font-semibold text-black bg-white rounded transition-all hover:bg-neutral-200 hover:shadow-xl hover:shadow-white/10"
          >
            <span>Book a Call</span>
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
          </a>

          <a
            href="#system"
            className="inline-flex items-center justify-center gap-2 h-14 px-7 text-base font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded transition-all"
          >
            <span>Explore The System</span>
            <span className="text-neutral-400 font-mono">↓</span>
          </a>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 h-14 px-7 text-base font-medium text-neutral-200 bg-transparent hover:bg-white/5 border border-white/15 rounded transition-all"
          >
            <span>View Pricing</span>
            <span className="text-neutral-400 font-mono">→</span>
          </a>

          {/* Animation playback toggle */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause background simulation" : "Play background simulation"}
            className="inline-flex items-center gap-2 h-14 px-4 text-xs font-mono text-neutral-400 hover:text-white bg-white/[0.02] border border-white/10 rounded transition-colors"
          >
            {isPlaying ? (
              <>
                <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
                <span className="hidden sm:inline">Motion Active</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="hidden sm:inline">Motion Paused</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Bottom telemetry line - Clean Monochrome */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              CONNECTED PIPELINES: ACTIVE
            </span>
            <span className="hidden md:inline">
              WHITE-LABEL FULFILMENT FOR AGENCIES
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-neutral-300">DETERMINISTIC DATA INTEGRATION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
