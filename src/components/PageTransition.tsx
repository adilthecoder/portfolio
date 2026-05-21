'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Show loading indicator briefly during transition
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 200) // Very short transition for snappy feel

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {/* Top loading bar */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-[100] origin-left"
            style={{ transformOrigin: 'left' }}
          />
        )}
      </AnimatePresence>

      {/* Page content with fade transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0.8, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.8, y: -10 }}
          transition={{ 
            duration: 0.2,
            ease: 'easeInOut'
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}