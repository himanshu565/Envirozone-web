'use client'

import { Mail, Phone, Share2, X as TwitterIcon } from 'lucide-react'
import Image from 'next/image'
export function Footer() {
  return (
    <footer className="bg-white border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/icon.jpg"
                alt="Logo"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="text-lg font-bold text-slate-900">Envirozone</span>
            </div>
            <p className="text-slate-600 text-sm">
              Reliable instruments. Sustainable future. Better tomorrow.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">Air Pollution Control</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">Water Treatment</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">Waste Management</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">Monitoring Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">Our Team</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">Projects</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">Careers</a></li>
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
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                  <Share2 size={18} />
                </a>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">
                  <TwitterIcon size={18} />
                </a>
              </div>
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
  )
}
