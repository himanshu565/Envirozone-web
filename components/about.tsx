'use client'

export function About() {
  return (
    <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Enviro Alignment
          </h2>
          <p className="text-lg text-slate-300 mb-4 leading-relaxed">
            With three decades of environmental engineering excellence, Enviro Alignment has established itself as a trusted partner for organizations seeking comprehensive environmental solutions. Our commitment to innovation and sustainability drives everything we do.
          </p>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            We specialize in delivering cutting-edge air pollution control, water treatment, and waste management solutions that help organizations exceed environmental standards while reducing operational costs.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Proven Track Record</h4>
                <p className="text-slate-400">30+ years serving diverse industries with measurable results</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                <p className="text-slate-400">Experienced engineers and environmental specialists</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Innovation Focused</h4>
                <p className="text-slate-400">Continuous investment in latest environmental technologies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-8 rounded-lg bg-linear-to-b from-slate-800/50 to-slate-900/50 border border-emerald-500/30 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">30+</div>
            <p className="text-slate-300 font-semibold">Years Experience</p>
          </div>

          <div className="p-8 rounded-lg bg-linear-to-b from-slate-800/50 to-slate-900/50 border border-emerald-500/30 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
            <p className="text-slate-300 font-semibold">Projects Completed</p>
          </div>

          <div className="p-8 rounded-lg bg-linear-to-b from-slate-800/50 to-slate-900/50 border border-emerald-500/30 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">100+</div>
            <p className="text-slate-300 font-semibold">Enterprise Clients</p>
          </div>

          <div className="p-8 rounded-lg bg-linear-to-b from-slate-800/50 to-slate-900/50 border border-emerald-500/30 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
            <p className="text-slate-300 font-semibold">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
