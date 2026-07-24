'use client'

import { useEffect, useRef, useState } from "react";
import { Button } from './ui/button'
import Link from 'next/link'
export function Hero() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState(1);

 useEffect(() => {
  const v1 = video1Ref.current;
  const v2 = video2Ref.current;

  if (!v1 || !v2) return;

  // Respect reduced motion
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq.matches) {
    v1.pause();
    v2.pause();
    return;
  }

  v1.play();

  const transitionDuration = 1000; // ms

  const checkTransition = () => {
    if (
      activeVideo === 1 &&
      v1.duration &&
      v1.currentTime >= v1.duration - transitionDuration / 1000
    ) {
      if (v2.paused) {
        v2.currentTime = 0;
        v2.play();
        setActiveVideo(2);
      }
    }

    if (
      activeVideo === 2 &&
      v2.duration &&
      v2.currentTime >= v2.duration - transitionDuration / 1000
    ) {
      if (v1.paused) {
        v1.currentTime = 0;
        v1.play();
        setActiveVideo(1);
      }
    }
  };

  const reset1 = () => {
    v1.pause();
    v1.currentTime = 0;
  };

  const reset2 = () => {
    v2.pause();
    v2.currentTime = 0;
  };

  v1.addEventListener("timeupdate", checkTransition);
  v2.addEventListener("timeupdate", checkTransition);

  v1.addEventListener("ended", reset1);
  v2.addEventListener("ended", reset2);

  return () => {
    v1.removeEventListener("timeupdate", checkTransition);
    v2.removeEventListener("timeupdate", checkTransition);
    v1.removeEventListener("ended", reset1);
    v2.removeEventListener("ended", reset2);
  };
}, [activeVideo]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-none">
      <div className="absolute inset-0">
<div className="absolute inset-0">

  {/* Video 1 */}
  <video
    ref={video1Ref}
    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
      activeVideo === 1 ? "opacity-100" : "opacity-0"
    }`}
    autoPlay
    muted
    playsInline
    preload="auto"
  >
    <source src="/Chimney_smoke2.mp4" type="video/mp4" />
  </video>

  {/* Video 2 */}
  <video
    ref={video2Ref}
    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
      activeVideo === 2 ? "opacity-100" : "opacity-0"
    }`}
    muted
    playsInline
    preload="auto"
  >
    <source src="/Factory.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_45%),linear-gradient(180deg,transparent_0%,rgba(15,23,42,0.35)_100%)]" />
</div>

 

  {/* Green Glow Overlay */}
  {/* <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_45%),linear-gradient(180deg,transparent_0%,rgba(15,23,42,0.35)_100%)]" /> */}
</div>

      <div className=" inset-0 flex items-center justify-center relative z-10 text-center">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
              12+ Years of Environmental
              <span className="block bg-linear-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto text-balance">
            Leading solutions in air pollution control, water treatment, and waste management.
            Protecting your environment with cutting-edge technology.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
  <Link href="/services">
    <Button
      size="lg"
      className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 shadow-lg shadow-emerald-500/30"
    >
      Explore Services
    </Button>
  </Link>

  <Link href="/contact">
    <Button
      size="lg"
      // variant="outline"
      className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white font-semibold px-8 backdrop-blur-sm shadow-lg"
    >
      Get in Touch
    </Button>
  </Link>
          </div>

          <p className="text-slate-300/90 mt-12 text-sm">
            Delivering Smart Monitoring • Pollution Control • Sustainable Solutions for a Better Tomorrow.
          </p>
        </div>
      </div>
    </section>
  )
}
