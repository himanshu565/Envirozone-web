"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
  <a
  href="https://wa.me/919811138349?text=Hello%20Envirozone,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with Envirozone on WhatsApp"
  className="group fixed bottom-6 right-6 z-50"
>
  {/* Pulse Ring */}
  <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></span>

  {/* Tooltip */}
  <div className="absolute right-20 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-lg group-hover:block">
    Chat with us
  </div>

  {/* Button */}
  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 hover:scale-110">
    <FaWhatsapp className="text-4xl text-white" />
  </div>
</a>
);
}