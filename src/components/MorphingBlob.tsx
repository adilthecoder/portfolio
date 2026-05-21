'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

interface MorphingBlobProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'blue' | 'purple' | 'pink' | 'cyan' | 'gradient'
  speed?: 'slow' | 'medium' | 'fast'
}

export default function MorphingBlob({ 
  className = "", 
  size = 'md',
  color = 'gradient',
  speed = 'medium'
}: MorphingBlobProps) {
  const [, setPaths] = useState([
    "M60,-45C72,-25,70,-5,65,15C60,35,50,55,35,60C20,65,0,55,-20,50C-40,45,-60,35,-65,20C-70,5,-60,-10,-50,-25C-40,-40,-30,-55,-15,-60C0,-65,15,-50,30,-40C45,-30,60,-65,60,-45Z",
    "M55,-40C65,-20,60,0,55,20C50,40,45,60,30,65C15,70,-5,60,-25,55C-45,50,-65,40,-70,25C-75,10,-65,-5,-55,-20C-45,-35,-35,-50,-20,-55C-5,-60,10,-55,25,-45C40,-35,45,-60,55,-40Z"
  ])
  
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]'
  }
  
  const colorClasses = {
    blue: 'from-blue-400/5 to-blue-600/5',
    purple: 'from-purple-400/5 to-purple-600/5',
    pink: 'from-pink-400/5 to-pink-600/5',
    cyan: 'from-cyan-400/5 to-cyan-600/5',
    gradient: 'from-blue-400/3 via-purple-400/3 to-pink-400/3'
  }
  
  const speedDurations = useMemo(() => ({
    slow: 15,
    medium: 10,
    fast: 6
  }), [])

  // Generate more organic blob paths
  const generateBlobPath = () => {
    const points = 8
    const radius = 60
    const variation = 20
    let path = ""
    
    for (let i = 0; i < points; i++) {
      const angle = (i / points) * Math.PI * 2
      const r = radius + (Math.random() - 0.5) * variation
      const x = Math.cos(angle) * r
      const y = Math.sin(angle) * r
      
      if (i === 0) {
        path += `M${x},${y}`
      } else {
        // Add some curve control points for smoother transitions
        const prevAngle = ((i - 1) / points) * Math.PI * 2
        const controlOffset = 20
        
        const cx1 = Math.cos(prevAngle + Math.PI / 8) * controlOffset
        const cy1 = Math.sin(prevAngle + Math.PI / 8) * controlOffset
        const cx2 = Math.cos(angle - Math.PI / 8) * controlOffset
        const cy2 = Math.sin(angle - Math.PI / 8) * controlOffset
        
        path += `C${cx1},${cy1},${cx2},${cy2},${x},${y}`
      }
    }
    path += "Z"
    return path
  }

  useEffect(() => {
    const generateNewPaths = () => {
      const newPaths = []
      for (let i = 0; i < 4; i++) {
        newPaths.push(generateBlobPath())
      }
      setPaths(newPaths)
    }

    generateNewPaths()
    const interval = setInterval(generateNewPaths, speedDurations[speed] * 1000)
    return () => clearInterval(interval)
  }, [speed, speedDurations])

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      {/* Main morphing blob */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} rounded-full blur-2xl`}
        style={{
          clipPath: `polygon(${Array.from({ length: 8 }, (_, i) => {
            const angle = (i / 8) * Math.PI * 2
            const variation = 35 + Math.sin(i * 0.5) * 10
            const x = 50 + Math.cos(angle) * variation
            const y = 50 + Math.sin(angle) * variation
            return `${x}% ${y}%`
          }).join(', ')})`
        }}
        animate={{
          clipPath: [
            `polygon(${Array.from({ length: 8 }, (_, i) => {
              const angle = (i / 8) * Math.PI * 2
              const variation = 30 + Math.sin(i * 0.7) * 10
              const x = 50 + Math.cos(angle) * variation
              const y = 50 + Math.sin(angle) * variation
              return `${x}% ${y}%`
            }).join(', ')})`,
            `polygon(${Array.from({ length: 8 }, (_, i) => {
              const angle = (i / 8) * Math.PI * 2
              const variation = 35 + Math.cos(i * 0.9) * 15
              const x = 50 + Math.cos(angle) * variation
              const y = 50 + Math.sin(angle) * variation
              return `${x}% ${y}%`
            }).join(', ')})`,
            `polygon(${Array.from({ length: 8 }, (_, i) => {
              const angle = (i / 8) * Math.PI * 2
              const variation = 25 + Math.sin(i * 1.1) * 20
              const x = 50 + Math.cos(angle) * variation
              const y = 50 + Math.sin(angle) * variation
              return `${x}% ${y}%`
            }).join(', ')})`
          ]
        }}
        transition={{
          duration: speedDurations[speed],
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Secondary blob for depth */}
      <motion.div
        className={`absolute inset-2 bg-gradient-to-tl ${colorClasses[color]} rounded-full blur-xl opacity-60`}
        animate={{
          scale: [1, 1.1, 0.9, 1.05, 1],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["30%", "40%", "60%", "40%", "30%"]
        }}
        transition={{
          duration: speedDurations[speed] * 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Inner glow */}
      <motion.div
        className={`absolute inset-4 bg-gradient-to-r ${colorClasses[color]} rounded-full blur-lg opacity-40`}
        animate={{
          scale: [0.8, 1.2, 0.9, 1.1, 0.8],
          opacity: [0.4, 0.7, 0.3, 0.6, 0.4]
        }}
        transition={{
          duration: speedDurations[speed] * 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Sparkle effects */}
      {Array.from({ length: 6 }).map((_, i) => {
        // Use deterministic positioning based on index
        const leftPos = 20 + (i * 10);
        const topPos = 30 + Math.sin(i) * 20;
        const xMovement = Math.cos(i) * 20;
        const yMovement = Math.sin(i) * 20;
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${leftPos}%`,
              top: `${topPos}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, xMovement, 0],
              y: [0, yMovement, 0]
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  )
}