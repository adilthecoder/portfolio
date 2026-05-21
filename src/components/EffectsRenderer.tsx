'use client'

import { useEffects } from '@/contexts/EffectsContext'
import { LazyMatrixRain, LazyParticlesBackground, LazyConstellationBackground } from '@/components/LazyComponents'

export default function EffectsRenderer() {
  const { 
    showMatrix, 
    showParticles,
    showFloatingShapes,
    matrixSettings 
  } = useEffects()

  return (
    <>
      {/* Constellation Background - Always show */}
      <LazyConstellationBackground />
      
      {/* Conditional Effects */}
      {showParticles && <LazyParticlesBackground />}
      
      {showFloatingShapes && (
        <div className="fixed inset-0 pointer-events-none z-[-50] overflow-hidden">
          {/* Simple floating shapes with minimal opacity */}
          <div className="absolute bottom-32 left-16 w-8 h-8 bg-blue-400/[0.01] rounded-full blur-sm animate-pulse"></div>
          <div className="absolute bottom-16 right-24 w-6 h-6 bg-purple-400/[0.01] rounded-full blur-sm animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-cyan-400/[0.01] rounded-full blur-sm animate-ping"></div>
        </div>
      )}
      
      {showMatrix && (
        <LazyMatrixRain 
          speed={matrixSettings.speed}
          density={matrixSettings.density}
          color={matrixSettings.color}
          opacity={matrixSettings.opacity}
        />
      )}
    </>
  )
}