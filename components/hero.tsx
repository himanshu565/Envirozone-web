'use client'

import { useEffect, useRef } from 'react'
import { Button } from './ui/button'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq && mq.matches && videoRef.current) {
      try {
        videoRef.current.pause()
        videoRef.current.removeAttribute('autoplay')
      } catch (e) {}
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-none">
      <div className="absolute inset-0">
  <video
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    
  >
    <source src="/Chimney_Smoke.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  {/* <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/75 via-slate-900/55 to-slate-950/80" /> */}

  {/* Green Glow Overlay */}
  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_45%),linear-gradient(180deg,transparent_0%,rgba(15,23,42,0.35)_100%)]" />
</div>

      <div className=" inset-0 flex items-center justify-center relative z-10 text-center">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
              30 Years of Environmental
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
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 shadow-lg shadow-emerald-500/30"
            >
              Explore Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 font-semibold px-8 backdrop-blur-sm"
            >
              Get in Touch
            </Button>
          </div>

          <p className="text-slate-300/90 mt-12 text-sm">
            Trusted by leading organizations worldwide
          </p>
        </div>
      </div>
    </section>
  )
}
