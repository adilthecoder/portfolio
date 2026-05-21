'use client'

import dynamic from 'next/dynamic'
import { memo, Suspense } from 'react'

const LoadingFallback = memo(({ className }: { className?: string }) => (
  <div className={`${className} opacity-0`} />
))
LoadingFallback.displayName = 'LoadingFallback'

const SkillCardFallback = () => (
  <div className="tech-pill-enhanced animate-pulse bg-slate-100/50 dark:bg-slate-800/50">
    <div className="flex items-center">
      <div className="w-5 h-5 bg-slate-300/50 dark:bg-slate-600/50 rounded mr-2"></div>
      <div className="w-16 h-4 bg-slate-300/50 dark:bg-slate-600/50 rounded"></div>
    </div>
  </div>
)

const MorphingBlob = dynamic(() => import('@/components/MorphingBlob'), {
  ssr: false,
  loading: () => <LoadingFallback />
})

const MatrixRain = dynamic(() => import('@/components/MatrixRain'), {
  ssr: false,
  loading: () => null
})

const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), {
  ssr: false,
  loading: () => null
})

const ConstellationBackground = dynamic(() => import('@/components/ConstellationBackground'), {
  ssr: false,
  loading: () => null
})

const SkillCard = dynamic(() => import('@/components/SkillCard'), {
  ssr: true,
  loading: () => <SkillCardFallback />
})

export const LazyMorphingBlob = memo(({ className, size, color, speed }: {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'purple' | 'pink' | 'cyan' | 'gradient';
  speed?: 'slow' | 'medium' | 'fast'
}) => (
  <Suspense fallback={<LoadingFallback className={className} />}>
    <MorphingBlob className={className} size={size} color={color} speed={speed} />
  </Suspense>
))
LazyMorphingBlob.displayName = 'LazyMorphingBlob'

export const LazyMatrixRain = memo((props: Record<string, unknown>) => (
  <Suspense fallback={null}>
    <MatrixRain {...props} />
  </Suspense>
))
LazyMatrixRain.displayName = 'LazyMatrixRain'

export const LazyParticlesBackground = memo((props: Record<string, unknown>) => (
  <Suspense fallback={null}>
    <ParticlesBackground {...props} />
  </Suspense>
))
LazyParticlesBackground.displayName = 'LazyParticlesBackground'

export const LazyConstellationBackground = memo((props: Record<string, unknown>) => (
  <Suspense fallback={null}>
    <ConstellationBackground {...props} />
  </Suspense>
))
LazyConstellationBackground.displayName = 'LazyConstellationBackground'

export const LazySkillCard = memo((props: { skill: {
    name: string
    icon: string
    experience: string
    level: 'Expert' | 'Advanced' | 'Intermediate'
    description: string
    keyFeatures: string[]
    relatedTech: string[]
    useCases: string[]
  } }) => (
  <Suspense fallback={<SkillCardFallback />}>
    <SkillCard {...props} />
  </Suspense>
))
LazySkillCard.displayName = 'LazySkillCard'
