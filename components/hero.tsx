'use client'

import { useEffect, useRef, useState } from "react";
import { Button } from './ui/button'
import Link from 'next/link'
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videos = [
  "/Chimney_smoke2.mp4",
  // "/Factory.mp4",
];

const [currentVideo, setCurrentVideo] = useState(0);
const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq.matches) {
    video.pause();
    return;
  }

  const handleEnded = () => {
    setIsVisible(false);

    setTimeout(() => {
      const nextIndex = (currentVideo + 1) % videos.length;

      video.src = videos[nextIndex];
      video.load();

      video.oncanplay = () => {
        video.play().catch(console.error);
        setCurrentVideo(nextIndex);
        setIsVisible(true);
      };
    }, 500); // Fade-out duration
  };

  video.addEventListener("ended", handleEnded);

  video.play().catch(console.error);

  return () => {
    video.removeEventListener("ended", handleEnded);
  };
}, [currentVideo]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-none">
      <div className="absolute inset-0">
<div className="absolute inset-0">

  {/* Video 1 */}
<video
  ref={videoRef}
  autoPlay
  muted
  playsInline
  preload="auto"
  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
    isVisible ? "opacity-100" : "opacity-0"
  }`}
>
  <source src={videos[currentVideo]} type="video/mp4" />
</video>

  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_45%),linear-gradient(180deg,transparent_0%,rgba(15,23,42,0.35)_100%)]" />
</div>

 


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
