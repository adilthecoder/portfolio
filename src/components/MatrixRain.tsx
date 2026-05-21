'use client'

import { useEffect, useRef, useState, useMemo } from 'react'

interface MatrixRainProps {
  className?: string
  opacity?: number
  speed?: 'slow' | 'medium' | 'fast'
  density?: 'low' | 'medium' | 'high'
  color?: 'green' | 'blue' | 'purple' | 'cyan'
}

export default function MatrixRain({
  className = "",
  opacity = 0.3,
  speed = 'medium',
  density = 'medium',
  color = 'green'
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>(0)
  const [isVisible, setIsVisible] = useState(true)

  const colors = useMemo(() => ({
    green: '#00ff00',
    blue: '#0088ff',
    purple: '#8800ff',
    cyan: '#00ffff'
  }), [])

  const speeds = useMemo(() => ({
    slow: 1,
    medium: 2,
    fast: 4
  }), [])

  const densities = useMemo(() => ({
    low: 0.5,
    medium: 1,
    high: 1.5
  }), [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let drops: number[] = []
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Reset drops when canvas is resized (optimized density)
      const isMobile = window.innerWidth <= 768
      const performanceMultiplier = isMobile ? 0.3 : 0.7 // More aggressive reduction on mobile
      const baseDensity = densities[density] * performanceMultiplier
      const columnSpacing = isMobile ? 30 : 20 // Wider spacing on mobile
      const columns = Math.floor(canvas.width / columnSpacing) * baseDensity
      drops = Array(Math.floor(columns)).fill(1)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const draw = () => {
      if (!isVisible) return

      // Fade the canvas for trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = colors[color]
      ctx.font = '15px monospace'

      for (let i = 0; i < drops.length; i++) {
        // Generate random character
        const char = characters[Math.floor(Math.random() * characters.length)]
        
        // Calculate position
        const x = i * 20
        const y = drops[i] * 20

        // Add glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = colors[color]
        
        // Draw the character
        ctx.fillText(char, x, y)

        // Reset drop position when it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Move drop down
        drops[i] += speeds[speed] * 0.5
      }

      animationFrameId.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [isVisible, speed, density, color, colors, speeds, densities])

  // Enable on all devices but with reduced performance on mobile
  useEffect(() => {
    const checkMobile = () => {
      // Always visible but we'll reduce density on mobile
      setIsVisible(true)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!isVisible) return null

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-[-20] ${className}`}
      style={{ 
        opacity: Math.min(opacity, 0.08), // Cap opacity at 8%
        mixBlendMode: 'overlay'
      }}
    />
  )
}