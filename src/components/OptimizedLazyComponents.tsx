'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

export const LazyMotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  {
    ssr: false,
    loading: () => <div />
  }
)

export const LazyParticles = dynamic(
  () => import('./ParticlesBackground'),
  {
    ssr: false,
    loading: () => null
  }
)

export const LazyEffectsRenderer = dynamic(
  () => import('./EffectsRenderer'),
  {
    ssr: false,
    loading: () => null
  }
)

export const LazyScrollAnimation = dynamic(
  () => import('framer-motion').then(mod => {
    const Component = ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => (
      <mod.motion.div {...props}>{children}</mod.motion.div>
    )
    return Component
  }),
  {
    ssr: false,
    loading: () => <div />
  }
)

export const OptimizedMotion = ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => {
  return (
    <Suspense fallback={<div />}>
      <LazyMotionDiv {...props}>{children}</LazyMotionDiv>
    </Suspense>
  )
}
