'use client'

import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
// HeroComponent.jsx

import './HeroComponent.css';

const HeroComponent = () => {
  return (
    <div className="hero-background">
    </div>
  );
};

export default HeroComponent;
interface ParticleSwarmProps {
  count?: number
}

function ParticleSwarm({ count = 500 }: ParticleSwarmProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const particlesRef = useRef<Float32Array | null>(null)

  useEffect(() => {
    if (pointsRef.current) {
      const geometry = pointsRef.current.geometry as THREE.BufferGeometry
      const positions = geometry.getAttribute('position') as THREE.BufferAttribute
      particlesRef.current = positions.array as Float32Array
    }
  }, [])

  useFrame(() => {
    if (pointsRef.current && particlesRef.current) {
      const positions = particlesRef.current
      const geometry = pointsRef.current.geometry as THREE.BufferGeometry

      for (let i = 0; i < positions.length; i += 3) {
        let x = positions[i]
        let y = positions[i + 1]
        let z = positions[i + 2]

        // Movement patterns
        x += Math.sin(Date.now() * 0.0001 + i) * 0.02
        y += Math.cos(Date.now() * 0.0001 + i) * 0.015
        z += Math.sin(Date.now() * 0.00015 + i) * 0.01

        // Boundary wrapping
        if (x > 50) positions[i] = -50
        if (x < -50) positions[i] = 50
        if (y > 50) positions[i + 1] = -50
        if (y < -50) positions[i + 1] = 50
        if (z > 50) positions[i + 2] = -50
        if (z < -50) positions[i + 2] = 50

        positions[i] = x
        positions[i + 1] = y
        positions[i + 2] = z
      }

      const positionAttribute = geometry.getAttribute('position')
      positionAttribute.needsUpdate = true
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0001
      pointsRef.current.rotation.y += 0.0002
    }
  })

  // Generate random positions
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 100
    positions[i + 1] = (Math.random() - 0.5) * 100
    positions[i + 2] = (Math.random() - 0.5) * 100
  }

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#10b981"
        size={0.4}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

export function ParticleAnimation() {
  return (
    <div
      className="relative w-full h-96"
      style={{ background: 'linear-gradient(to bottom, #ecfdf5 0%, #ffffff 55%, #ffffff 100%)' }}
    >
      <Canvas
        camera={{ position: [0, 0, 100], fov: 60 }}
        className="w-full h-full"
      >
        <color attach="background" args={['#f8fffb']} />
        <ParticleSwarm count={500} />
      </Canvas>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 55%, rgba(255,255,255,0.8) 100%)' }}
      />
    </div>
  )
}
