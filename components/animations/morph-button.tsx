'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MorphButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function MorphButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
}: MorphButtonProps) {
  const variants = {
    primary:
      'bg-emerald-500 hover:bg-emerald-600 text-white',
    secondary:
      'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/30',
    ghost:
      'text-slate-300 hover:text-emerald-400 border-b-2 border-transparent hover:border-emerald-400',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-2 rounded-lg font-semibold transition-all ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}
