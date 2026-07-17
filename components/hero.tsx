'use client'

import { ParticleAnimation } from './particle-animation'
import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <ParticleAnimation />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10 px-4">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 text-balance">
              30 Years of Environmental
              <span className="block bg-linear-to-r from-primary via-primary to-teal-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto text-balance">
            Leading solutions in air pollution control, water treatment, and waste management.
            Protecting your environment with cutting-edge technology.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/20"
            >
              Explore Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-brand-soft font-semibold px-8"
            >
              Get in Touch
            </Button>
          </div>

          <p className="text-slate-500 mt-12 text-sm">
            Trusted by leading organizations worldwide
          </p>
        </div>
      </div>
    </section>
  )
}
