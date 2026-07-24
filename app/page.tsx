import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { HoverScale } from '@/components/animations/hover-scale'
import { Stagger } from '@/components/animations/stagger'
import { CountUp } from '@/components/animations/count-up'
import { Parallax } from '@/components/animations/parallax'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ArrowRight, Zap, Shield, Gauge, Leaf } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Envirozone - 30 Years of Environmental Excellence',
  description: 'Leading environmental engineering solutions for air pollution control, water treatment, and waste management.',
}

const features = [
  {
    icon: Zap,
    title: '12+ Years of Experience',
    description: 'Delivering reliable environmental monitoring, water & wastewater treatment, and pollution control solutions with proven expertise.'
  },
  {
    icon: Shield,
    title: 'CPCB & SPCB Compliance',
    description: 'Helping industries achieve seamless regulatory compliance through advanced monitoring systems and expert support.'
  },
  {
    icon: Gauge,
    title: 'End-to-End Solutions',
    description: 'From consultation and system design to installation, commissioning, calibration, AMC, and after-sales service.'
  },
  {
    icon: Leaf,
    title: 'PAN India upport',
    description: 'A dedicated team of engineers providing prompt technical assistance and nationwide service coverage.'
  }
]

const stats = [
  { label: 'Years Experience', value: 12 },
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Enterprise Clients', value: 100, suffix: '+' },
  { label: 'Satisfaction Rate', value: 98, suffix: '%' }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 relative bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="down" distance={50} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why <span className="bg-linear-to-b from-emerald-400 to-teal-400 bg-clip-text text-transparent">Choose Us</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Industry-leading technology and 12 years of expertise
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <HoverScale scale={1.05}>
                  <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all h-full">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-500/20 border border-emerald-500/50 mb-4">
                      <feature.icon className="text-emerald-400" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </HoverScale>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 md:px-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                    <CountUp to={stat.value} suffix={stat.suffix || ''} />
                  </div>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="down" distance={50} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="bg-linear-to-b from-emerald-400 to-teal-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Complete Environmental Monitoring & Pollution Control Solutions
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Environmental Monitoring Systems',
                description: 'Advanced CEMS, OCEMS, AAQMS, Stack Monitoring, Water Quality Monitoring Systems, sensors, calibration, and CPCB/SPCB data integration.',
                color: 'from-emerald-500/10 to-emerald-700/10',
                borderColor: 'border-emerald-500/50'
              },
              {
                title: 'Wastewater Management',
                description: 'Complete ETP, STP, WTP, Water Recycling & Reuse Systems, online analyzers, flow meters, and process automation for efficient water management.',
                color: 'from-cyan-500/10 to-blue-700/10',
                borderColor: 'border-cyan-500/50'
              },
              {
                title: 'Solid Waste Management',
                description: 'Comprehensive solid waste management solutions including waste segregation, collection, processing, recycling, composting, and scientific disposal for sustainable environmental compliance.',
                color: 'from-amber-500/10 to-orange-700/10',
                borderColor: 'border-amber-500/50'
              }
            ].map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                <HoverScale scale={1.04}>
                  <div className={`bg-linear-to-br ${service.color} rounded-xl p-8 border ${service.borderColor} hover:border-emerald-500/50 transition-all group cursor-pointer`}>
                    <h3 className="text-xl font-bold mb-3 text-emerald-400">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 mb-6">{service.description}</p>
                    <div className="flex items-center gap-2 text-emerald-400 group-hover:gap-3 transition-all">
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </HoverScale>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" distance={30} className="flex justify-center">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/30 font-semibold transition-colors">
              Explore All Services
              <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 md:px-6 bg-linear-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" distance={50}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Industries Trust  <span className="bg-linear-to-b from-emerald-400 to-teal-400 bg-clip-text text-transparent">Envirozone</span>
                </h2>
                <div className="space-y-4 mb-8">
                  {[
                    '12+ Years of Industry Experience',
                    'CPCB & SPCB Compliance Solutions',
                    'End-to-End Environmental Services',
                    'Expert Installation, AMC & Technical Support'
                  ].map((result, i) => (
                    <ScrollReveal key={i} direction="right" delay={i * 0.1}>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-slate-300">{result}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors">
                  View Case Studies
                  <ArrowRight size={20} />
                </Link>
              </div>
            </ScrollReveal>

           
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="down" distance={50} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Advanced Environmental Solutions <span className="bg-linear-to-b from-emerald-400 to-teal-400 bg-clip-text text-transparent">Technology</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Delivering innovative technologies for air, water, and waste management with CPCB/SPCB compliance.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Environmental Monitoring Systems', desc: 'CEMS ,OCEMS ,AAQMS ,Continuous data monitoring' },
              { title: 'Air Pollution Control', desc: 'Bag Filters , Wet Scrubbers , Cyclone Separators , APCD Solutions' },
              { title: 'Wastewater Management', desc: 'ETP & STP Solutions ,Water Quality Monitoring ,Calibration & AMC ,Compliance Support' },
              { title: 'Solid Waste Management', desc: 'Waste Processing Solutions ,Segregation Systems ,Recycling Support ' },
              { title: 'Anti Smog Gun', desc: 'Control dust pollution with high-pressure mist technology for construction sites, mining, industries, and urban areas.' },
              { title: 'Compliance & Consultancy', desc: 'CPCB/SPCB Compliance ,Data Connectivity ,Environmental Audits ,Technical Support' }
            ].map((tech, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.08}>
                <HoverScale>
                  <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 hover:border-emerald-500/50 transition-all">
                    <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                    <p className="text-slate-400 text-sm">{tech.desc}</p>
                  </div>
                </HoverScale>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-linear-to-b from-emerald-600/20 to-teal-600/20 border-y border-emerald-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="down" distance={50}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Need an Environmental Compliance Solution?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="down" distance={50} delay={0.2}>
            <p className="text-emerald-900 text-lg mb-8">
              From Environmental Monitoring Systems to Air Pollution Control, Wastewater Treatment, Solid Waste Management, and Anti Smog Guns—we help industries achieve CPCB/SPCB compliance with reliable turnkey solutions.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={30} delay={0.3} className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-8 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-colors">
              Schedule Consultation
            </Link>
            <Link href="/solutions" className="px-8 py-3 rounded-lg border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-bold transition-colors">
              Explore Solutions
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
