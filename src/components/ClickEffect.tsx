'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ClickAnimation {
  id: number
  x: number
  y: number
  color: string
}

export default function ClickEffect() {
  const [clicks, setClicks] = useState<ClickAnimation[]>([])
  const [particles, setParticles] = useState<ClickAnimation[]>([])
  const [showCustomCursor, setShowCustomCursor] = useState(false) // Default to normal cursor
  const [effectsEnabled, setEffectsEnabled] = useState(false) // Click effects disabled by default

  const colors = useMemo(() => [
    '#3b82f6', // blue
    '#8b5cf6', // purple
    '#ec4899', // pink
    '#10b981', // emerald
    '#f59e0b', // amber
    '#ef4444', // red
    '#06b6d4', // cyan
  ], [])

  // Manage body class for cursor visibility
  useEffect(() => {
    if (showCustomCursor) {
      document.body.classList.add('custom-cursor')
    } else {
      document.body.classList.remove('custom-cursor')
    }
    
    return () => {
      document.body.classList.remove('custom-cursor')
    }
  }, [showCustomCursor])

  useEffect(() => {
    const createEffect = (x: number, y: number) => {
      // Limit number of concurrent effects for performance
      if (clicks.length > 3) return
      
      const color = colors[Math.floor(Math.random() * colors.length)]
      const newClick = {
        id: Date.now(),
        x,
        y,
        color: color
      }
      
      setClicks(prev => [...prev, newClick])
      
      // Reduce particle count for better performance
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x,
        y,
        color: color
      }))
      
      setParticles(prev => [...prev, ...newParticles])
      
      // Clean up after animation
      setTimeout(() => {
        setClicks(prev => prev.filter(click => click.id !== newClick.id))
      }, 800)
      
      setTimeout(() => {
        setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)))
      }, 1200)
    }

    const handleClick = (e: MouseEvent) => {
      // Skip if effects are disabled
      if (!effectsEnabled) return

      // Skip effect if clicking inside an element with 'no-click-effect' class
      const target = e.target as HTMLElement
      if (target.closest('.no-click-effect')) return

      createEffect(e.clientX, e.clientY)
    }

    const handleTouch = (e: TouchEvent) => {
      // Skip if effects are disabled
      if (!effectsEnabled) return

      // Skip effect if touching inside an element with 'no-click-effect' class
      const target = e.target as HTMLElement
      if (target.closest('.no-click-effect')) return

      if (e.touches.length > 0) {
        const touch = e.touches[0]
        createEffect(touch.clientX, touch.clientY)
      }
    }

    // Add both mouse and touch event listeners (capture phase to check before bubbling)
    window.addEventListener('click', handleClick, { passive: true, capture: true })
    window.addEventListener('touchstart', handleTouch, { passive: true, capture: true })

    return () => {
      window.removeEventListener('click', handleClick, { capture: true })
      window.removeEventListener('touchstart', handleTouch, { capture: true })
    }
  }, [clicks.length, colors, effectsEnabled])

  return (
    <>
      <AnimatePresence>
        {clicks.map((click) => (
          <div key={click.id} className="pointer-events-none fixed inset-0 z-[100]">
            {/* Main ripple effect */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: click.x,
                top: click.y,
                x: '-50%',
                y: '-50%',
                background: `radial-gradient(circle, ${click.color}40 0%, transparent 70%)`,
              }}
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{ 
                width: 300, 
                height: 300, 
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            
            {/* Secondary ripple */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: click.x,
                top: click.y,
                x: '-50%',
                y: '-50%',
                border: `2px solid ${click.color}`,
              }}
              initial={{ width: 20, height: 20, opacity: 1 }}
              animate={{ 
                width: 200, 
                height: 200, 
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
            
            {/* Center burst */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: click.x,
                top: click.y,
                x: '-50%',
                y: '-50%',
                background: click.color,
                boxShadow: `0 0 20px ${click.color}`,
              }}
              initial={{ width: 10, height: 10, opacity: 1 }}
              animate={{ 
                width: 30, 
                height: 30, 
                opacity: 0,
                scale: [1, 1.5, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            
            {/* Emoji burst */}
            <motion.div
              className="absolute text-2xl"
              style={{
                left: click.x,
                top: click.y,
                x: '-50%',
                y: '-50%',
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ 
                scale: [0, 1.5, 1.5],
                opacity: [1, 1, 0],
                y: [0, -30, -50],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {['✨', '💫', '⭐', '🌟', '⚡', '💥'][Math.floor(Math.random() * 6)]}
            </motion.div>
          </div>
        ))}
      </AnimatePresence>
      
      {/* Particle explosion effect */}
      <AnimatePresence>
        {particles.map((particle, index) => (
          <motion.div
            key={particle.id}
            className="pointer-events-none fixed w-2 h-2 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              background: particle.color,
              boxShadow: `0 0 6px ${particle.color}`,
            }}
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              x: (Math.random() - 0.5) * 200,
              y: (Math.random() - 0.5) * 200,
              scale: [1, 1.5, 0],
              opacity: [1, 1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: index % 12 * 0.02,
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Custom cursor */}
      {showCustomCursor && <CustomCursor />}
      
    </>
  )
}

function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let animationFrameId: number
    
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for better performance
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY })
        
        // Optimized hover detection
        const target = e.target as HTMLElement
        const isInteractive = 
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.classList.contains('cursor-pointer')
        
        setIsHovering(!!isInteractive)
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <>
      {/* Main cursor - Faster, more responsive */}
      <motion.div
        className="pointer-events-none fixed w-3 h-3 rounded-full bg-blue-500 mix-blend-difference z-[101]"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0.1,
          ease: "easeOut"
        }}
      />
      
      {/* Cursor trail - Slower, smoother follow */}
      <motion.div
        className="pointer-events-none fixed w-6 h-6 rounded-full border border-blue-500/40 z-[100]"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.8,
        }}
      />
    </>
  )
}