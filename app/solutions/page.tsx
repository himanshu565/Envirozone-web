import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { HoverScale } from '@/components/animations/hover-scale'
import { Stagger } from '@/components/animations/stagger'
import { TrendingUp, Zap, Target, BarChart3 } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    title: 'Industrial Manufacturing',
    description: 'Real-time environmental monitoring and pollution control solutions for manufacturing plants to ensure CPCB/SPCB compliance.',
    challenges: ['CEMS', 'OCEMS', 'AAQMS', 'Stack Monitoring', 'DG Retrofit Emission Control', 'Water Quality Monitoring'],
    benefits: ['Reduce compliance violations', '25-35% cost savings', 'Automated reporting', 'Predictive maintenance'],
    implementation: '8-12 weeks',
    icon: 'bg-blue-500/20 border-blue-500/50'
  },
  {
    title: 'Wastewater Management',
    description: 'Complete monitoring and treatment solutions for industrial and municipal wastewater.',
    challenges: ['Online Water Analyzer', 'Flow Meter', 'pH / COD / BOD / TSS Sensors', 'ETP & STP Automation','Data Connectivity to CPCB'],
    benefits: ['100% compliance', '30% energy reduction', 'Automated processes', 'Better water quality'],
    implementation: '10-14 weeks',
    icon: 'bg-cyan-500/20 border-cyan-500/50'
  },
  {
    title: 'Air Pollution Control',
    description: 'Advanced emission control technologies to reduce particulate matter and gaseous pollutants.',
    challenges: ['Bag Filter', 'Wet Scrubber', 'Cyclone Separator', 'Anti Smog Gun','Dust Suppression System','APCD Consultancy'],
    benefits: ['Healthier spaces', '20% energy savings', 'Smart controls', 'Occupant satisfaction'],
    roi: '215%',
    implementation: '4-6 weeks',
    icon: 'bg-emerald-500/20 border-emerald-500/50'
  },
  {
    title: 'Solid Waste Management',
    description: 'End-to-end solutions for efficient collection, segregation, treatment, recycling, and disposal of industrial and municipal solid waste.',
    challenges: ['Waste Segregation', 'Composting Systems', 'Organic Waste Composting'],
    benefits: ['Better crops', 'Water conservation', 'Automated irrigation', 'Reduced waste'],
    roi: '380%',
    implementation: '6-10 weeks',
    icon: 'bg-green-500/20 border-green-500/50'
  },
  {
    title: 'Annual Maintenance & Calibration',
    description: 'Keep your monitoring systems accurate and compliant with preventive maintenance, calibration, and technical support.',
    challenges: ['Preventive Maintenance', 'Sensor Calibration', 'Remote Monitoring', '24×7 Technical Support'],
    benefits: ['Safe environment', 'Full compliance', 'Reduced downtime', 'Lower incidents'],
    roi: '295%',
    implementation: '8-12 weeks',
    icon: 'bg-red-500/20 border-red-500/50'
  },
  {
    title: 'Anti Smog Gun',
    description: 'High-pressure dust suppression systems for construction sites, mining, industrial plants, and demolition projects to effectively control airborne dust.',
    challenges: ['Dust Suppression', 'Long Spray Range', 'Remote Operation', 'Water Efficient Technology'],
    benefits: ['Better uptime', '35% less energy', 'Equipment longevity', 'Cost reduction'],
    icon: 'bg-purple-500/20 border-purple-500/50'
  }
]

const industries = [
  {
    name: 'Textile',
    description: 'Emissions monitoring, flare optimization, waste management'
  },
  {
    name: 'Power Generation',
    description: 'Air emissions, water quality, cooling system management'
  },
  {
    name: 'Mining',
    description: 'Dust control, water treatment, environmental compliance'
  },
  {
    name: 'Food & Beverage',
    description: 'Wastewater treatment, odor control, energy management'
  },
  {
    name: 'Pharmaceutical',
    description: 'Water purification, air quality, waste handling'
  },
  {
    name: 'Chemicals',
    description: 'Emissions control, water discharge monitoring, safety'
  }
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal direction="down" distance={50}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Industry-Specific <span className="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Solutions</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="down" distance={50} delay={0.2}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Smart environmental technologies designed to meet your industry's compliance, monitoring, and sustainability goals.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} direction="up" delay={index * 0.1}>
                <HoverScale scale={1.03}>
                  <div className={`bg-white rounded-xl p-8 border ${solution.icon} hover:border-primary/40 transition-all duration-300 h-full flex flex-col shadow-sm`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h3>
                    <p className="text-slate-600 text-sm mb-6 grow">{solution.description}</p>

                    {/* Challenges */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-3">Key Challenges</p>
                      <div className="flex flex-wrap gap-2">
                        {solution.challenges.slice(0, 6).map((challenge) => (
                          <span key={challenge} className="text-xs bg-emerald-50 text-slate-700 px-2.5 py-1 rounded-full border border-emerald-100">
                            {challenge}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary font-semibold hover:bg-primary/15 transition-colors">
                      Learn More
                    </button>
                  </div>
                </HoverScale>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="down" distance={50} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Industries We Serve
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.name} direction="up" delay={index * 0.08}>
                <HoverScale>
                  <div className="bg-white rounded-lg p-6 border border-emerald-100 hover:border-primary/40 transition-all shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{industry.name}</h3>
                    <p className="text-slate-600 text-sm">{industry.description}</p>
                  </div>
                </HoverScale>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="down" distance={50} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Choose Our Solutions?
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: TrendingUp,
                title: 'Proven ROI',
                description: 'Average 280% ROI within first 18 months with significant operational savings'
              },
              {
                icon: Zap,
                title: 'Fast Implementation',
                description: 'Expert team deploys solutions in 4-14 weeks with minimal disruption'
              },
              {
                icon: Target,
                title: 'Industry Expertise',
                description: '30+ years optimizing environmental systems across all major sectors'
              },
              {
                icon: BarChart3,
                title: 'Data-Driven Results',
                description: 'Real-time analytics and reporting for continuous improvement'
              }
            ].map((benefit, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 border border-primary/20">
                      <benefit.icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-6 bg-linear-to-r from-emerald-50 to-teal-50 border-y border-emerald-100">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="down" distance={50}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get a Custom Solution for Your Industry
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="down" distance={50} delay={0.2}>
            <p className="text-slate-600 text-lg mb-8">
              Schedule a consultation with our industry experts
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={30} delay={0.3}>
            <Link href="/contact" className="inline-block px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-colors">
              Request Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
