'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function usePageTransition() {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Start transition
    setIsTransitioning(true)
    
    // End transition after a short delay
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  return isTransitioning
}

// Prefetch helper for faster navigation
export function usePrefetch() {
  useEffect(() => {
    // Prefetch all internal links on hover
    const prefetchLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        // Next.js automatically prefetches links, but we can add priority
        link.setAttribute('data-prefetch', 'true')
      }
    }

    document.addEventListener('mouseover', prefetchLink)
    return () => document.removeEventListener('mouseover', prefetchLink)
  }, [])
}