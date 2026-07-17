'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

interface ParallaxProps {
  children: React.ReactNode
  offset?: number
  className?: string
}

export function Parallax({ children, offset = 50, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useViewportScroll()
  const [elementTop, setElementTop] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setElementTop(ref.current.offsetTop)
    }
  }, [])

  const y = useTransform(scrollY, [0, elementTop + 500], [0, offset])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
