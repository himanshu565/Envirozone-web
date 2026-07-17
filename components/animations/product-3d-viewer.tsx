'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Box } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface Product3DViewerProps {
  color?: string
  scale?: number
}

function ProductModel({ color = '#10b981', scale = 1 }: Product3DViewerProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = 0.2
      meshRef.current.rotation.y = 0.3
    }
  }, [])

  return (
    <group>
      {/* Main device body */}
      <mesh ref={meshRef}>
        <boxGeometry args={[1 * scale, 1.5 * scale, 0.3 * scale]} />
        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.3}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0, 0.16 * scale]}>
        <boxGeometry args={[0.8 * scale, 1.2 * scale, 0.05 * scale]} />
        <meshStandardMaterial color="#1a1a1a" emissive="#0f5f3f" emissiveIntensity={0.8} />
      </mesh>

      {/* Accent lines */}
      <mesh position={[0, -0.4 * scale, 0.17 * scale]}>
        <boxGeometry args={[0.6 * scale, 0.02 * scale, 0.02 * scale]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Bottom accent */}
      <mesh position={[0, 0.5 * scale, 0.17 * scale]}>
        <boxGeometry args={[0.8 * scale, 0.02 * scale, 0.02 * scale]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Lighting */}
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1} />
      <spotLight position={[-10, -10, 5]} angle={0.3} penumbra={1} intensity={0.5} />
    </group>
  )
}

export function Product3DViewer({ color = '#10b981', scale = 2 }: Product3DViewerProps) {
  return (
    <Canvas className="w-full h-full" dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <ProductModel color={color} scale={scale} />
      <OrbitControls autoRotate autoRotateSpeed={4} />
      <ambientLight intensity={0.5} />
    </Canvas>
  )
}
