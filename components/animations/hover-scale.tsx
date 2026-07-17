'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HoverScaleProps {
  children: ReactNode
  scale?: number
  duration?: number
  className?: string
}

export function HoverScale({
  children,
  scale = 1.05,
  duration = 0.3,
  className = '',
}: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration, type: 'spring', stiffness: 300, damping: 10 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
