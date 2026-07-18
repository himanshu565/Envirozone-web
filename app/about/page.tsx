import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { HoverScale } from '@/components/animations/hover-scale'
import { CountUp } from '@/components/animations/count-up'
import { Users, Zap, Globe, Award } from 'lucide-react'

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Pioneering cutting-edge environmental technologies'
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'Committed to a cleaner, healthier planet'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Working together for shared environmental goals'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering superior quality and service'
  }
]

const team = [
  { name: 'Dr. Sarah Chen', role: 'Chief Executive Officer', bio: '30+ years in environmental engineering' },
  { name: 'Michael Rodriguez', role: 'CTO', bio: 'AI & IoT specialist with 20+ years experience' },
  { name: 'Jennifer Walsh', role: 'VP Operations', bio: 'Led 200+ environmental projects globally' },
  { name: 'David Kumar', role: 'VP Sales', bio: '25 years building environmental solutions' }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="down" distance={50}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About <span className="bg-linear-to-b from-emerald-500 to-teal-500 bg-clip-text text-transparent">Enviro Alignment</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="down" distance={50} delay={0.2}>
            <p className="text-lg text-slate-600 max-w-3xl">
              For three decades, we&apos;ve been at the forefront of environmental innovation, helping organizations monitor, manage, and optimize their environmental impact while achieving regulatory compliance and operational excellence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-4 md:px-6 bg-linear-to-r from-emerald-50 to-teal-50 border-y border-emerald-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Years of Excellence', value: 30 },
              { label: 'Projects Completed', value: 500 },  
              { label: 'Enterprise Clients', value: 100 },
              { label: 'Global Locations', value: 45 }
            ].map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                    <CountUp to={stat.value} suffix="+" />
                  </div>
                  <p className="text-slate-900 font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" distance={50}>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Enviro Alignment was founded with a simple mission: to make environmental monitoring and compliance accessible, reliable, and cost-effective for organizations of all sizes.
                  </p>
                  <p>
                    What started as a small team of environmental engineers has grown into a global leader in environmental technology. We&apos;ve installed over 500 systems across 45 countries, serving industries from manufacturing to healthcare.
                  </p>
                  <p>
                    Our commitment to innovation, combined with our deep industry expertise, has enabled us to solve some of the most challenging environmental problems facing organizations today.
                  </p>
                  <p>
                    Today, we continue to push the boundaries of what&apos;s possible in environmental monitoring, leveraging AI, IoT, and cloud technology to deliver unprecedented insights and control.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" distance={50}>
              <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-100 h-96 flex items-center justify-center shadow-sm">
                <div className="text-center">
                  <div className="text-6xl font-bold text-emerald-400 mb-4">30</div>
                  <p className="text-xl text-slate-600">Years of Environmental Excellence</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="down" distance={50} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Core Values
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
                <HoverScale scale={1.02}>
                  <div className="bg-white rounded-xl p-8 border border-emerald-100 hover:border-primary/40 transition-all shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 border border-primary/20">
                        <value.icon className="text-primary" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
                    </div>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                </HoverScale>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="down" distance={50} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Leadership Team
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <HoverScale scale={1.05}>
                  <div className="bg-white rounded-xl overflow-hidden border border-emerald-100 hover:border-primary/40 transition-all shadow-sm">
                    <div className="h-48 bg-linear-to-br from-emerald-50 to-teal-50" />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                      <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
                      <p className="text-slate-600 text-sm">{member.bio}</p>
                    </div>
                  </div>
                </HoverScale>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-y border-emerald-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="left" distance={50}>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To provide innovative environmental solutions that enable organizations to achieve operational excellence, regulatory compliance, and sustainable growth while protecting the planet for future generations.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" distance={50}>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To be the global leader in environmental technology, recognized for innovation, reliability, and positive environmental impact. We envision a world where organizations of all sizes have access to world-class environmental solutions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="down" distance={50}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Join Us in Creating a Cleaner Future
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="down" distance={50} delay={0.2}>
            <p className="text-slate-600 text-lg mb-8">
              Whether you&apos;re looking for environmental solutions or a place to make a difference, we&apos;d love to connect
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={30} delay={0.3} className="flex gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-colors">
              Explore Solutions
            </button>
            <button className="px-8 py-3 rounded-lg border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-bold transition-colors">
              Join Our Team
            </button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
