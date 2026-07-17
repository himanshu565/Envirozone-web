'use client'

import { Wind, Droplet, Trash2, Gauge, Zap, Settings } from 'lucide-react'

const services = [
  {
    icon: Wind,
    title: 'Air Pollution Control',
    description: 'Advanced monitoring systems and filtration technologies to reduce air emissions and improve air quality standards.'
  },
  {
    icon: Droplet,
    title: 'Water Treatment',
    description: 'Comprehensive water purification solutions including analysis, treatment, and quality management systems.'
  },
  {
    icon: Trash2,
    title: 'Waste Management',
    description: 'Integrated waste management strategies for hazardous and non-hazardous waste streams with proper disposal.'
  },
  {
    icon: Gauge,
    title: 'Environmental Monitoring',
    description: 'Real-time monitoring systems for air quality, water quality, and environmental compliance tracking.'
  },
  {
    icon: Zap,
    title: 'Emissions Testing',
    description: 'Comprehensive emissions testing and analysis to ensure compliance with environmental regulations.'
  },
  {
    icon: Settings,
    title: 'System Installation',
    description: 'Professional installation and commissioning of pollution control and monitoring equipment.'
  }
]

export function Services() {
  return (
    <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Comprehensive environmental solutions tailored to your organization's needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-emerald-500/20">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-500/30">
        <h3 className="text-2xl font-bold text-white mb-4">Industry Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
          <p>✓ 30+ years of proven environmental engineering expertise</p>
          <p>✓ ISO certified processes and quality management</p>
          <p>✓ Compliance with local and international environmental standards</p>
          <p>✓ Customized solutions for diverse industry verticals</p>
        </div>
      </div>
    </section>
  )
}
