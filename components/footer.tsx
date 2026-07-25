'use client'

import { Mail, Phone, Share2, X as TwitterIcon } from 'lucide-react'
import Image from 'next/image'

const clientLogos = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.png',
  '12.png',
  '13.png',
  '14.png',
  '15.png',
  '16.png',
  '17.png',
]

export function Footer() {
  return (
    <>
      <section className="bg-slate-50 border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Our Trusted Clients
            </p>
          </div>
          <div className="trusted-marquee group overflow-hidden rounded-3xl bg-white/80 border border-emerald-100 shadow-sm">
 <div className="trusted-marquee-track flex items-center gap-8 py-2 px-4 md:px-6">
  {clientLogos.map((logo, index) => (
    <div key={`logo-${index}`} className="trusted-logo-item flex min-w-40 items-center justify-center px-2 transition-all duration-300">
      <Image
        src={`/logo/${logo}`}
        alt={`Client logo ${index + 1}`}
        width={180}
        height={150}
        className="h-24 md:h-28 w-auto object-contain filter grayscale transition-all duration-300"
      />
    </div>
  ))}
  {clientLogos.map((logo, index) => (
    <div key={`logo-dup-${index}`} className="trusted-logo-item flex min-w-40 items-center justify-center px-2 transition-all duration-300">
      <Image
        src={`/logo/${logo}`}
        alt={`Client logo duplicate ${index + 1}`}
        width={180}
        height={150}
        className="h-24 md:h-28 w-auto object-contain filter grayscale transition-all duration-300"
      />
    </div>
  ))}
</div>
          </div>
        </div>
      </section>
      <footer className="bg-white border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/icon.jpg"
                alt="Logo"
                width={110}
                height={110}
                className="object-contain"
              />
              <span className="text-lg font-bold text-slate-900">Envirozone Instruments and Equipments</span>
            </div>
            <p className="text-slate-600 text-sm">
              Reliable instruments. Sustainable future. Better tomorrow.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="text-slate-600 hover:text-primary transition-colors text-sm">Air Monitoring Control</a></li>
              <li><a href="/services" className="text-slate-600 hover:text-primary transition-colors text-sm">Water Treatment</a></li>
              <li><a href="/services" className="text-slate-600 hover:text-primary transition-colors text-sm">Waste Management</a></li>
              <li><a href="/services" className="text-slate-600 hover:text-primary transition-colors text-sm">Solid Waste Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-slate-600 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="/products" className="text-slate-600 hover:text-primary transition-colors text-sm">Products</a></li>
              <li><a href="/portfolio" className="text-slate-600 hover:text-primary transition-colors text-sm">Projects</a></li>
           
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@eieindia.co.in" className="text-slate-600 hover:text-primary transition-colors text-sm">
                  info@eieindia.co.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+919811138349" className="text-slate-600 hover:text-primary transition-colors text-sm">
                  +91 9811138349
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <Phone size={16} />
                <span>+91 9811138359</span>
              </div>
              {/* <div className="flex gap-3 mt-4">
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                  <Share2 size={18} />
                </a>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                  <TwitterIcon size={18} />
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-500 text-sm">
              © 2024 Envirozone Instruments and Equipments. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
