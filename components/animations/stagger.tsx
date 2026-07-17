'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerProps {
  children: ReactNode[]
  staggerDelay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  className?: string
}

export function Stagger({
  children,
  staggerDelay = 0.1,
  duration = 0.5,
  direction = 'up',
  distance = 30,
  className = '',
}: StaggerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  const getItemVariants = () => {
    const variants: Record<string, any> = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration } },
    }

    if (direction === 'up') {
      variants.hidden.y = distance
      variants.visible.y = 0
    } else if (direction === 'down') {
      variants.hidden.y = -distance
      variants.visible.y = 0
    } else if (direction === 'left') {
      variants.hidden.x = distance
      variants.visible.x = 0
    } else if (direction === 'right') {
      variants.hidden.x = -distance
      variants.visible.x = 0
    }

    return variants
  }

  const itemVariants = getItemVariants()

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {Array.isArray(children) &&
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))}
    </motion.div>
  )
}
