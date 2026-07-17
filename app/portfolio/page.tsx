import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { HoverScale } from '@/components/animations/hover-scale'
import { CountUp } from '@/components/animations/count-up'
import { Award, TrendingUp, Zap } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Steel Manufacturing Plant',
    location: 'Midwest Industrial Complex',
    category: 'Industrial',
    challenge: 'Excessive air emissions and lack of real-time monitoring compliance',
    solution: 'Implemented AirPure Monitor Pro system across 12 emission points',
    results: ['95% emissions reduction', 'Zero compliance violations', '$420K annual savings'],
    testimonial: 'The system paid for itself in the first year. Outstanding support from the team.',
    author: 'Manufacturing Director',
    metrics: { emissions: -95, compliance: 100, roi: 340 }
  },
  {
    id: 2,
    title: 'Municipal Water Treatment Facility',
    location: 'Metropolitan Area',
    category: 'Municipal',
    challenge: 'Inefficient water treatment and rising operational costs',
    solution: 'Deployed AquaPure Treatment with automated optimization',
    results: ['42% cost reduction', 'Improved water quality 99.2%', 'Automated operations'],
    testimonial: 'We serve 2M people better while spending significantly less. This is game-changing.',
    author: 'Water Department Manager',
    metrics: { costs: -42, quality: 99.2, automation: 98 }
  },
  {
    id: 3,
    title: 'Large Commercial Campus',
    location: 'Downtown Business District',
    category: 'Commercial',
    challenge: 'Poor indoor air quality affecting employee productivity',
    solution: 'Integrated air monitoring and smart HVAC control system',
    results: ['28% energy savings', 'Air quality rating A+', 'Employee satisfaction +45%'],
    testimonial: 'Our employees breathe better and we cut energy costs. Perfect solution.',
    author: 'Facilities Manager',
    metrics: { energy: -28, satisfaction: 45, airQuality: 95 }
  },
  {
    id: 4,
    title: 'Agricultural Irrigation Network',
    location: 'California Valley',
    category: 'Agriculture',
    challenge: 'Water waste and suboptimal crop yields from poor irrigation',
    solution: 'Deployed EcoFlow Analyzer with AI-powered irrigation optimization',
    results: ['35% water savings', 'Crop yield +22%', 'Automated watering'],
    testimonial: 'We grow more with less water. The ROI exceeded expectations.',
    author: 'Farm Operations Manager',
    metrics: { water: -35, yield: 22, efficiency: 89 }
  },
  {
    id: 5,
    title: 'Regional Hospital Network',
    location: 'Healthcare Complex',
    category: 'Healthcare',
    challenge: 'Meeting strict air quality standards across 8 buildings',
    solution: 'Comprehensive air monitoring and centralized management system',
    results: ['100% compliance rate', 'Zero incidents', 'Cost optimization 18%'],
    testimonial: 'Perfect compliance with all health regulations. Outstanding reliability.',
    author: 'Hospital Director',
    metrics: { compliance: 100, incidents: 0, costs: -18 }
  },
  {
    id: 6,
    title: 'Waste Processing Facility',
    location: 'Regional Waste Management',
    category: 'Waste Management',
    challenge: 'Low recycling rates and high operational costs',
    solution: 'Implemented EcoWaste Processor with AI sorting system',
    results: ['52% recycling rate increase', '$2.1M annual cost savings', '85% waste reduction'],
    testimonial: 'The AI sorting system is incredible. We turned waste management into profit.',
    author: 'Facility Director',
    metrics: { recycling: 52, savings: 2.1, waste: -85 }
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal direction="down" distance={50}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Success <span className="bg-linear-to-b from-emerald-500 to-teal-500 bg-clip-text text-transparent">Stories</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="down" distance={50} delay={0.2}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results from organizations across industries who transformed their environmental operations
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-y border-emerald-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Projects Delivered', value: 500, icon: Award },
              { label: 'Avg ROI Achieved', value: 305, suffix: '%', icon: TrendingUp },
              { label: 'Cost Savings Generated', value: 125, suffix: 'M+', icon: Zap },
              { label: 'Client Satisfaction', value: 98, suffix: '%' }
            ].map((metric, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                    <CountUp to={metric.value} suffix={metric.suffix || ''} />
                  </div>
                  <p className="text-slate-600 font-medium">{metric.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.id} direction={index % 2 === 0 ? 'left' : 'right'} distance={50}>
                <HoverScale scale={1.01}>
                  <div className="bg-white rounded-xl overflow-hidden border border-emerald-100 hover:border-primary/40 transition-all shadow-sm">
                    <div className="grid md:grid-cols-3">
                      {/* Left - Case Study Info */}
                      <div className="md:col-span-1 p-8 border-r border-emerald-100 bg-white">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4">
                          {study.category}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{study.title}</h3>
                        <p className="text-slate-600 text-sm mb-6">{study.location}</p>

                        <div className="space-y-3">
                          <div>
                            <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Challenge</p>
                            <p className="text-sm text-slate-600">{study.challenge}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Solution</p>
                            <p className="text-sm text-slate-600">{study.solution}</p>
                          </div>
                        </div>
                      </div>

                      {/* Middle - Results */}
                      <div className="md:col-span-1 p-8 border-r border-emerald-100 flex flex-col justify-center bg-white">
                        <p className="text-xs text-slate-500 uppercase font-semibold mb-4">Key Results</p>
                        <div className="space-y-3">
                          {study.results.map((result) => (
                            <div key={result} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span className="text-sm text-slate-600">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right - Metrics */}
                      <div className="md:col-span-1 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 flex flex-col justify-center">
                        <div className="space-y-6">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div key={key}>
                              <p className="text-xs text-slate-500 uppercase mb-1 font-semibold">{key}</p>
                              <p className="text-3xl font-bold text-primary">
                                {value > 0 ? '+' : ''}{value}{typeof value === 'number' && Math.abs(value) < 10 ? '.' : ''}
                                {typeof value === 'number' && value < 100 && value !== Math.floor(value) ? '' : value >= 100 ? '%' : '%'}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="px-8 py-6 bg-slate-50 border-t border-emerald-100">
                      <p className="text-slate-600 italic mb-3">"{study.testimonial}"</p>
                      <p className="text-sm font-semibold text-primary">— {study.author}</p>
                    </div>
                  </div>
                </HoverScale>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-y border-emerald-100">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="down" distance={50}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your Success Story Starts Here
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="down" distance={50} delay={0.2}>
            <p className="text-slate-600 text-lg mb-8">
              Join hundreds of organizations transforming their environmental operations
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={30} delay={0.3}>
            <button className="inline-block px-8 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-colors">
              Start Your Journey
            </button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
