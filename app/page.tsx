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
    title: 'Real-Time Monitoring',
    description: 'Live data streams from all monitoring points with instant alerts'
  },
  {
    icon: Shield,
    title: '100% Compliant',
    description: 'Meet all regulatory requirements and environmental standards'
  },
  {
    icon: Gauge,
    title: 'Precision Control',
    description: 'Fine-tuned systems deliver exact performance specifications'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable solutions that protect the environment'
  }
]

const stats = [
  { label: 'Years Experience', value: 30 },
  { label: 'Projects Completed', value: 500, suffix: '+' },
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
              Industry-leading technology and 30 years of expertise
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
                  <p className="text-slate-300 font-medium">{stat.label}</p>
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
              Comprehensive environmental solutions for every need
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Air Pollution Control',
                description: 'Advanced monitoring and mitigation of atmospheric pollutants',
                color: 'from-emerald-500/10 to-emerald-700/10',
                borderColor: 'border-emerald-500/50'
              },
              {
                title: 'Water Treatment',
                description: 'Complete water purification and quality management systems',
                color: 'from-cyan-500/10 to-blue-700/10',
                borderColor: 'border-cyan-500/50'
              },
              {
                title: 'Waste Management',
                description: 'Intelligent waste processing with AI-powered optimization',
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
                  Proven <span className="bg-linear-to-b from-emerald-400 to-teal-400 bg-clip-text text-transparent">Results</span>
                </h2>
                <div className="space-y-4 mb-8">
                  {[
                    'Average 280% ROI within 18 months',
                    '98% client satisfaction rating',
                    'Avg. 35% operational cost reduction',
                    '100% regulatory compliance rate'
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

            <ScrollReveal direction="right" distance={50}>
              <HoverScale scale={1.02}>
                <div className="bg-linear-to-br from-emerald-500/10 to-teal-500/10 rounded-xl p-8 border border-emerald-500/30">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: '500+', label: 'Projects' },
                      { value: '45', label: 'Countries' },
                      { value: '2M+', label: 'People Served' },
                      { value: '125M', label: 'Savings Generated' }
                    ].map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-bold text-emerald-400 mb-2">{metric.value}</div>
                        <p className="text-sm text-slate-300">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </HoverScale>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="down" distance={50} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Cutting-Edge <span className="bg-linear-to-b from-emerald-400 to-teal-400 bg-clip-text text-transparent">Technology</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Built with the latest in AI, IoT, and cloud infrastructure
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'AI & Machine Learning', desc: 'Predictive analytics and intelligent optimization' },
              { title: 'IoT Integration', desc: 'Connected sensors and real-time data collection' },
              { title: 'Cloud Platform', desc: 'Scalable, secure, and always available' },
              { title: '24/7 Monitoring', desc: 'Round-the-clock system oversight and alerts' },
              { title: 'Mobile App', desc: 'Manage systems from anywhere, anytime' },
              { title: 'API Access', desc: 'Integrate with your existing systems easily' }
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
              Ready to Transform Your Environmental Operations?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="down" distance={50} delay={0.2}>
            <p className="text-emerald-900 text-lg mb-8">
              Get a free consultation with our environmental experts today
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
