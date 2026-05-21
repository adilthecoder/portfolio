'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface EffectsContextType {
  showMatrix: boolean
  setShowMatrix: (show: boolean) => void
  showFloatingShapes: boolean
  setShowFloatingShapes: (show: boolean) => void
  showParticles: boolean
  setShowParticles: (show: boolean) => void
  matrixSettings: {
    speed: 'slow' | 'medium' | 'fast'
    density: 'low' | 'medium' | 'high'
    color: 'green' | 'blue' | 'purple' | 'cyan'
    opacity: number
  }
  setMatrixSettings: (settings: {
    speed: 'slow' | 'medium' | 'fast'
    density: 'low' | 'medium' | 'high'
    color: 'green' | 'blue' | 'purple' | 'cyan'
    opacity: number
  }) => void
}

const EffectsContext = createContext<EffectsContextType | undefined>(undefined)

export function EffectsProvider({ children }: { children: ReactNode }) {
  const [showMatrix, setShowMatrix] = useState(false) // Disabled by default for performance
  const [showFloatingShapes, setShowFloatingShapes] = useState(false) // Disabled by default for performance
  const [showParticles, setShowParticles] = useState(false) // Disabled by default for performance
  const [matrixSettings, setMatrixSettings] = useState({
    speed: 'medium' as 'slow' | 'medium' | 'fast',
    density: 'low' as 'low' | 'medium' | 'high', // Lower density for performance
    color: 'green' as 'green' | 'blue' | 'purple' | 'cyan',
    opacity: 0.05 // Very low opacity for performance
  })

  // Load settings from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMatrix = localStorage.getItem('showMatrix')
      const savedShapes = localStorage.getItem('showFloatingShapes')
      const savedParticles = localStorage.getItem('showParticles')
      const savedMatrixSettings = localStorage.getItem('matrixSettings')

      if (savedMatrix) setShowMatrix(JSON.parse(savedMatrix))
      if (savedShapes) setShowFloatingShapes(JSON.parse(savedShapes))
      if (savedParticles) setShowParticles(JSON.parse(savedParticles))
      if (savedMatrixSettings) setMatrixSettings(JSON.parse(savedMatrixSettings))
    }
  }, [])

  // Save to localStorage when state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('showMatrix', JSON.stringify(showMatrix))
    }
  }, [showMatrix])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('showFloatingShapes', JSON.stringify(showFloatingShapes))
    }
  }, [showFloatingShapes])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('showParticles', JSON.stringify(showParticles))
    }
  }, [showParticles])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('matrixSettings', JSON.stringify(matrixSettings))
    }
  }, [matrixSettings])

  return (
    <EffectsContext.Provider value={{
      showMatrix,
      setShowMatrix,
      showFloatingShapes,
      setShowFloatingShapes,
      showParticles,
      setShowParticles,
      matrixSettings,
      setMatrixSettings
    }}>
      {children}
    </EffectsContext.Provider>
  )
}

export function useEffects() {
  const context = useContext(EffectsContext)
  if (context === undefined) {
    throw new Error('useEffects must be used within an EffectsProvider')
  }
  return context
}