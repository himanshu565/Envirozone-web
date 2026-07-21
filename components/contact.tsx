'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', company: '', message: '' })
    alert('Thank you for your inquiry. We will be in touch shortly!')
  }

  return (
    <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Have a project in mind? Let&apos;s discuss how Enviro Alignment can help your organization achieve environmental excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="p-8 rounded-lg bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-emerald-500/20">
          <Mail className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
          <p className="text-slate-300">contact@enviroalignment.com</p>
        </div>

        <div className="p-8 rounded-lg bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-emerald-500/20">
          <Phone className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
          <p className="text-slate-300">+1 (555) 123-4567</p>
        </div>

        <div className="p-8 rounded-lg bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-emerald-500/20">
          <MapPin className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
          <p className="text-slate-300">123 Green Street, Eco City, EC 12345</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="p-8 rounded-lg bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-emerald-500/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                Company
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3"
            >
              Send Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
