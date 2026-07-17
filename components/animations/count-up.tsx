'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

interface CountUpProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  trigger?: boolean
}

export function CountUp({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
  trigger = true,
}: CountUpProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(trigger && isVisible ? from : to)

  const displayValue = useTransform(motionValue, (value) =>
    Math.floor(value).toLocaleString()
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && trigger) {
      const timer = setTimeout(() => {
        motionValue.set(to)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isVisible, trigger, to, motionValue])

  return (
    <div ref={ref} className={className}>
      {prefix}
      <motion.span transition={{ duration, ease: 'easeOut' }}>
        {displayValue}
      </motion.span>
      {suffix}
    </div>
  )
}
