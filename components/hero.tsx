"use client"

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [bubbles, setBubbles] = useState<
    Array<{
      size: number;
      left: string;
      animationDuration: string;
      animationDelay: string;
    }>
  >([]);

  useEffect(() => {
    const generatedBubbles = Array.from({ length: 60 }).map(() => {
      const size = Math.random() * 45 + 10;
      return {
        size,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 8}s`,
        animationDelay: `${Math.random() * 8}s`,
      };
    });
    setBubbles(generatedBubbles);

    if (typeof window === "undefined") return;
    const mq =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq && mq.matches && videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.removeAttribute("autoplay");
      } catch (e) {}
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-none">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/BOD.mp4" type="video/mp4" />
        </video>

        <div className="water-animation">
          <div className="parameter bod">BOD</div>
          <div className="parameter cod">COD</div>
          <div className="parameter tss">TSS</div>
          <div className="parameter ph">pH</div>
          <div className="parameter pm">PM</div>

          {bubbles.map((bubble, index) => (
            <span
              key={index}
              className="bubble"
              style={{
                left: bubble.left,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                animationDuration: bubble.animationDuration,
                animationDelay: bubble.animationDelay,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_45%),linear-gradient(180deg,transparent_0%,rgba(15,23,42,0.35)_100%)]" />
      </div>

      <div className=" inset-0 flex items-center justify-center relative z-10 text-center">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
              30+ Years of Environmental
              <span className="block bg-linear-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto text-balance">
            Leading solutions in air pollution control, water treatment, and
            waste management. Protecting your environment with cutting-edge
            technology.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/solutions">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 shadow-lg shadow-emerald-500/30"
                // href removed from here
              >
                Explore Services
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 font-semibold px-8 backdrop-blur-sm"
            >
              Get in Touch
            </Button>
          </div>

          <p className="text-slate-300/90 mt-12 text-sm">
            Delivering Smart Monitoring • Pollution Control • Sustainable
            Solutions for a Better Tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}
