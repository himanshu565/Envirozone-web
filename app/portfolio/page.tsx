import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { HoverScale } from '@/components/animations/hover-scale'
import { CountUp } from '@/components/animations/count-up'
import { Award, TrendingUp, Zap } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Construction Equipment Manufacturing',
    location: 'JCB India',
    category: 'Industrial',
    challenge: 'The manufacturing facility required a reliable environmental monitoring solution to maintain regulatory compliance, ensure accurate emissions monitoring, and enable real-time environmental data reporting.',
    solution: 'Envirozone Instruments & Equipments supplied and commissioned an integrated environmental monitoring system, including installation, calibration, data connectivity, and ongoing technical support.',
    results: ['Continuous 24×7 Environmental Monitoring', 'Real-Time Data Acquisition', 'Reliable CPCB/SPCB Compliance Support','Professional Installation & AMC Services'],
    testimonial: 'The system paid for itself in the first year. Outstanding support from the team.',
    author: 'Manufacturing Director',
    metrics: { emissions: -95, compliance: 100, roi: 340 }
  },
  {
    id: 2,
    title: 'Food & Beverage Processing',
    location: 'Delhi',
    category: 'Mother Dairy',
    challenge: 'The facility required continuous monitoring of wastewater parameters to comply with environmental regulations while ensuring efficient treatment plant operation.',
    solution: 'Envirozone Instruments & Equipments implemented an Online Continuous Effluent Monitoring System (OCEMS) with sensor integration, real-time dashboard, CPCB connectivity, calibration, and annual maintenance support.',
    results: ['Real-Time Water Quality Monitoring', 'Continuous Compliance Monitoring', 'Automated Data Reporting'],
    testimonial: 'We serve 2M people better while spending significantly less. This is game-changing.',
    author: 'Water Department Manager',
    metrics: { costs: -42, quality: 99.2, automation: 98 }
  },
  {
    id: 3,
    title: 'Healthcare & Hospitals',
    location: 'Fortis Hospital',
    category: 'Hospital',
    challenge: 'Fortis Hospital required a reliable environmental monitoring solution to ensure continuous compliance with environmental regulations, monitor wastewater discharge parameters, and maintain accurate reporting for regulatory authorities.',
    solution: 'Envirozone Instruments & Equipments provided a comprehensive environmental monitoring solution, including installation, commissioning, calibration, and integration of online monitoring systems with real-time data acquisition and compliance support.',
    results: ['24×7 Continuous Environmental Monitoring', 'Real-Time Data Collection & Reporting', 'Reliable CPCB/SPCB Compliance Support'],
    testimonial: 'Our employees breathe better and we cut energy costs. Perfect solution.',
    author: 'Facilities Manager',
    metrics: { energy: -28, satisfaction: 45, airQuality: 95 }
  },
  {
    id: 4,
    title: ' Manufacturing',
    location: 'British Paints',
    category: 'Paints & Coatings Manufacturing',
    challenge: 'The manufacturing facility required a reliable environmental monitoring system to ensure compliance with CPCB/SPCB regulations, monitor emissions and effluent quality, and automate environmental data reporting.',
    solution: 'Envirozone Instruments & Equipments supplied and commissioned a complete environmental monitoring solution, including real-time monitoring, data acquisition, calibration, and compliance support.',
    results: ['24×7 Continuous Environmental Monitoring', 'Real-Time Environmental Data Reporting', 'CPCB/SPCB Compliance Support'],
    testimonial: 'We grow more with less water. The ROI exceeded expectations.',
    author: 'Farm Operations Manager',
    metrics: { water: -35, yield: 22, efficiency: 89 }
  },
  
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
                
                    </div>

                    {/* Testimonial */}
                  
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
