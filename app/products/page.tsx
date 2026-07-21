import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/animations/scroll-reveal'
import { HoverScale } from '@/components/animations/hover-scale'
import { Stagger } from '@/components/animations/stagger'
import { Product3DViewer } from '@/components/animations/product-3d-viewer'
import { Package, Gauge, Zap, Shield } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'OCEMS (Online Continuous Effluent Monitoring System) Probe Type ',
    category: 'Water Quality Monitoring',
    description: 'Advanced air pollution monitoring system with real-time data streaming and predictive analytics.',
    specs: ['Real-time monitoring', 'Cloud integration', '24/7 support'],
    color: '#10b981',
    features: [
      'Real-time PM2.5/PM10 tracking',
      'Multi-parameter analysis',
      'IoT connectivity',
      'Mobile app dashboard'
    ]
  },
  {
    id: 2,
    name: 'OCEMS (Online Continuous Effluent Monitoring System) Cabinet type',
    category: 'Water Quality Monitoring',
    description: 'Comprehensive water treatment solution for industrial and municipal applications.',
    specs: ['Advanced filtration', 'Automated dosing', 'Energy efficient'],
    color: '#0891b2',
    features: [
      'Multi-stage filtration',
      'Chemical-free options',
      'Automated pH control',
      'Real-time quality monitoring'
    ]
  },
  {
    id: 3,
    name: 'CEMS (Continuous Emission Monitoring System) ',
    category: 'Emission Monitoring ',
    description: 'Intelligent waste processing system with sorting, compression, and environmental tracking.',
    specs: ['AI-powered sorting', 'Compression tech', 'Recycling tracking'],
    color: '#f59e0b',
    features: [
      'Automated sorting',
      'Compression efficiency',
      'Recycling analytics',
      'Waste reduction tracking'
    ]
  },
  {
    id: 4,
    name: 'Gas Analyzer',
    category: 'Emissions Testing',
    description: 'Comprehensive emissions monitoring and compliance system for regulatory requirements.',
    specs: ['Compliance certified', 'Multi-source tracking', 'Report generation'],
    color: '#ef4444',
    features: [
      'Stack emissions monitoring',
      'Compliance reporting',
      'Historical data analysis',
      'Alert notifications'
    ]
  },
  {
    id: 5,
    name: 'AAQMS (Ambient Air Quality Monitoring System)',
    category: 'Air Quality Monitoring',
    description: 'Precision flow measurement and analysis for water and wastewater systems.',
    specs: ['High accuracy', 'Ultrasonic tech', 'Data logging'],
    color: '#6366f1',
    features: [
      'Non-invasive measurement',
      'Multi-parameter analysis',
      'Historical trending',
      'Predictive maintenance'
    ]
  },
  {
    id: 6,
    name: 'Electromagnetic Flow Meter',
    category: 'Electromagnetic',
    description: 'Precision flow measurement and analysis for water and wastewater systems.',
    specs: ['High accuracy', 'Ultrasonic tech', 'Data logging'],
    color: '#6366f1',
    features: [
      'Non-invasive measurement',
      'Multi-parameter analysis',
      'Historical trending',
      'Predictive maintenance'
    ]
  },
  {
    id: 7,
    name: ' Pm 2.5 Pm 10',
    category: ' Air Quality Monitor',
    description: 'Precision flow measurement and analysis for water and wastewater systems.',
    specs: ['High accuracy', 'Ultrasonic tech', 'Data logging'],
    color: '#6366f1',
    features: [
      'Non-invasive measurement',
      'Multi-parameter analysis',
      'Historical trending',
      'Predictive maintenance'
    ]
  },
  {
    id: 8,
    name: ' Pan-Tilt-Zoom Camera (PTZ Camera)',
    category: ' Air Quality Monitor',
    description: 'Precision flow measurement and analysis for water and wastewater systems.',
    specs: ['High accuracy', 'Ultrasonic tech', 'Data logging'],
    color: '#6366f1',
    features: [
      'Non-invasive measurement',
      'Multi-parameter analysis',
      'Historical trending',
      'Predictive maintenance'
    ]
  },
  {
    id: 9,
    name: 'Ground Water level - Piezometer',
    category: 'Ground Water level',
    description: 'Unified cloud platform for managing all environmental monitoring and compliance data.',
    specs: ['Cloud-based', 'Real-time dashboards', 'API integration'],
    color: '#8b5cf6',
    features: [
      'Centralized monitoring',
      'Custom dashboards',
      'Advanced analytics',
      'Multi-user access'
    ]
  }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal direction="down" distance={50}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Environmental <span className="bg-linear-to-b from-emerald-500 to-teal-500 bg-clip-text text-transparent">Solutions</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="down" distance={50} delay={0.2}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Industry-leading products and systems designed to monitor, treat, and optimize environmental performance
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} direction="up" delay={index * 0.1}>
                <HoverScale scale={1.03}>
                  <div className="group bg-white rounded-xl overflow-hidden border border-emerald-100 hover:border-primary/40 transition-all duration-300 shadow-sm">
                    {/* 3D Viewer */}
                    <div className="h-48 bg-linear-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-50">
                        <Product3DViewer color={product.color} scale={1.5} />
                      </div>
                      <div className="absolute inset-0 bg-linear-to-b from-white/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-xs font-semibold text-primary mb-3">
                        {product.category}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                      <p className="text-slate-600 text-sm mb-4">{product.description}</p>

                      {/* Specs */}
                      <div className="space-y-2 mb-6">
                        {product.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {spec}
                          </div>
                        ))}
                      </div>

                      <button className="w-full px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary font-semibold hover:bg-primary/15 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </HoverScale>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" distance={50}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
              Why Choose Our Products?
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { icon: Package, title: 'Cutting-Edge Technology', desc: 'Built with latest sensors and AI algorithms for maximum accuracy' },
              { icon: Gauge, title: 'Precision Measurement', desc: 'Industry-leading accuracy in all environmental parameters' },
              { icon: Zap, title: 'Energy Efficient', desc: 'Optimized systems that reduce power consumption by up to 40%' },
              { icon: Shield, title: 'Compliance Ready', desc: 'All products meet international environmental standards' }
            ].map((feature, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 border border-primary/20">
                      <feature.icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
