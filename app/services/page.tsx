import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { HoverScale } from '@/components/animations/hover-scale'
import { CountUp } from '@/components/animations/count-up'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    id: 'air-pollution',
    title: 'Air Pollution Control',
    subtitle: 'Advanced atmospheric monitoring and pollution mitigation',
    description: 'Comprehensive air quality monitoring solutions for industrial, municipal, and residential applications. Our systems track particulate matter, gases, and emission sources in real-time.',
    image: 'bg-linear-to-b from-emerald-500/10 to-emerald-700/10',
    color: 'from-emerald-400 to-teal-400',
    benefits: [
      'Real-time PM2.5 & PM10 monitoring',
      'Multi-pollutant analysis (NO2, SO2, O3, CO)',
      'Predictive air quality forecasting',
      'Regulatory compliance reporting',
      'Mobile app alerts and notifications',
      'Cloud-based data management'
    ],
    stats: { projects: 150, locations: 500, satisfaction: 98 }
  },
  {
    id: 'water-treatment',
    title: 'Water Treatment Systems',
    subtitle: 'Complete water purification and quality management',
    description: 'Advanced water treatment systems designed for municipal, industrial, and agricultural water needs. From basic filtration to advanced chemical treatment.',
    image: 'bg-linear-to-b from-cyan-500/10 to-blue-700/10',
    color: 'from-cyan-400 to-blue-400',
    benefits: [
      'Multi-stage filtration systems',
      'Advanced oxidation processes',
      'Membrane filtration technology',
      'Automated chemical dosing',
      'pH and turbidity control',
      'Microorganism elimination'
    ],
    stats: { projects: 200, locations: 800, satisfaction: 99 }
  },
  {
    id: 'waste-management',
    title: 'Waste Management Solutions',
    subtitle: 'Smart waste processing and environmental sustainability',
    description: 'Intelligent waste management systems with AI-powered sorting, recycling optimization, and environmental impact tracking.',
    image: 'bg-linear-to-b from-amber-500/10 to-orange-700/10',
    color: 'from-amber-400 to-orange-400',
    benefits: [
      'Automated waste sorting',
      'Compression and compacting',
      'Recycling rate optimization',
      'Landfill diversion tracking',
      'Environmental impact reporting',
      'Cost reduction analytics'
    ],
    stats: { projects: 120, locations: 300, satisfaction: 97 }
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal direction="down" distance={50}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Environmental <span className="bg-linear-to-r from-primary to-teal-500 bg-clip-text text-transparent">Services</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="down" distance={50} delay={0.2}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Complete environmental solutions tailored to your industry and compliance needs
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div key={service.id}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Content */}
                <ScrollReveal direction={index % 2 === 0 ? 'left' : 'right'} distance={50}>
                  <div>
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-4">
                      Service {index + 1}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{service.title}</h2>
                    <p className="text-primary text-lg mb-4">{service.subtitle}</p>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.description}</p>

                    {/* Benefits */}
                    <div className="space-y-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <ScrollReveal key={i} direction="right" delay={i * 0.05}>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-primary shrink-0" size={20} />
                            <span className="text-slate-600">{benefit}</span>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>

                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors">
                      Request Consultation
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </ScrollReveal>

                {/* Right side - Visual */}
                <ScrollReveal direction={index % 2 === 0 ? 'right' : 'left'} distance={50}>
                  <HoverScale scale={1.02}>
                    <div className={`h-96 rounded-xl ${service.image} border border-emerald-100 overflow-hidden flex items-center justify-center relative group bg-white shadow-sm`}>
                      <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <div className="text-center z-10 px-6">
                        <div className={`text-5xl font-bold bg-linear-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                          {service.stats.projects}+
                        </div>
                        <p className="text-slate-600">Projects Completed</p>
                      </div>
                    </div>
                  </HoverScale>
                </ScrollReveal>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-emerald-100">
                {[
                  { label: 'Projects', value: service.stats.projects },
                  { label: 'Locations', value: service.stats.locations },
                  { label: 'Satisfaction', value: service.stats.satisfaction, suffix: '%' }
                ].map((stat, i) => (
                  <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        <CountUp to={stat.value} suffix={stat.suffix || ''} />
                      </div>
                      <p className="text-slate-600">{stat.label}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-y border-emerald-100">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="down" distance={50}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Environmental Operations?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="down" distance={50} delay={0.2}>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Our expert team is ready to design a customized solution for your organization
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={30} delay={0.3}>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg transition-colors">
              Schedule Free Consultation
              <ArrowRight size={24} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
