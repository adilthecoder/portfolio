'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface HolographicTextProps {
  text: string
  className?: string
  delay?: number
  showCursor?: boolean
}

export default function HolographicText({ 
  text, 
  className = "", 
  delay = 0,
  showCursor = false 
}: HolographicTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          setIsTypingComplete(true)
        }
      }, currentIndex === 0 ? delay : 50) // Use delay only for first character, then 50ms per character

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, isInView, delay])

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        transition: {
          duration: 1,
          ease: "easeOut"
        }
      })
    }
  }, [isInView, controls])

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      {/* Main holographic text */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.8, rotateX: -45, rotateY: 15 }}
        animate={controls}
      >
        {/* Multiple text layers for holographic effect */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 bg-clip-text blur-md opacity-70 animate-pulse">
            {displayText}
          </div>

          {/* Secondary glow */}
          <div className="absolute inset-0 text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 dark:from-pink-400 dark:via-purple-500 dark:to-cyan-500 bg-clip-text blur-sm opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}>
            {displayText}
          </div>

          {/* Main text - Dark colors for light mode, light colors for dark mode */}
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-cyan-300 dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent font-bold tracking-wide">
            {displayText}
            {showCursor && !isTypingComplete && (
              <motion.span
                className="inline-block w-0.5 h-full bg-blue-600 dark:bg-cyan-400 ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>
          
          {/* Holographic scanlines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/10 dark:via-cyan-400/10 to-transparent opacity-60">
            <motion.div
              className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-600 dark:via-cyan-400 to-transparent"
              animate={{ y: [0, 100, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Holographic interference */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ 
              x: [-100, 100],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
        </div>
      </motion.div>
      
      {/* 3D perspective shadow */}
      <motion.div
        className="absolute top-2 left-2 -z-10 text-blue-900/30 dark:text-cyan-100/10 blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ delay: 0.5 }}
      >
        {displayText}
      </motion.div>
    </div>
  )
}