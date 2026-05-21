'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar } from 'lucide-react'
import { useEffects } from '@/contexts/EffectsContext'

export default function LightEffectsToggle() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  const { 
    showMatrix, setShowMatrix,
    showFloatingShapes, setShowFloatingShapes,
    showParticles, setShowParticles,
    matrixSettings, setMatrixSettings
  } = useEffects()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const effects = [
    { 
      name: 'Particles Background', 
      enabled: showParticles, 
      toggle: setShowParticles,
      description: 'Animated particle background'
    },
    { 
      name: 'Floating Shapes', 
      enabled: showFloatingShapes, 
      toggle: setShowFloatingShapes,
      description: 'Morphing blob animations'
    },
    { 
      name: 'Matrix Rain', 
      enabled: showMatrix, 
      toggle: setShowMatrix,
      description: 'Code rain effect'
    }
  ]

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open visual effects settings"
      >
        <Award className="w-5 h-5 text-slate-700 dark:text-slate-300" />
      </motion.button>

      {/* Settings Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Panel - Responsive positioning */}
          <motion.div
            initial={{ 
              scale: 0.9, 
              opacity: 0, 
              x: isMobile ? 0 : 20, 
              y: 20 
            }}
            animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
            exit={{ 
              scale: 0.9, 
              opacity: 0, 
              x: isMobile ? 0 : 20, 
              y: 20 
            }}
            className="fixed z-[9999] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/20 p-4 sm:p-6
              /* Mobile: Full width with margins, positioned at bottom */
              bottom-4 left-4 right-4 max-h-[80vh] overflow-y-auto
              /* Tablet and up: Positioned beside button */
              md:bottom-20 md:right-6 md:left-auto md:w-80 md:max-h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                  Visual Effects
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Customize your experience
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl hover:bg-white/20 dark:hover:bg-slate-800/20 transition-colors shrink-0"
                aria-label="Close settings"
              >
                <Calendar className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </button>
            </div>

            {/* Effects List */}
            <div className="space-y-3 sm:space-y-4">
              {effects.map((effect) => (
                <div key={effect.name}>
                  <div className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200/20 dark:border-slate-700/20">
                    <div className="flex-1 min-w-0 pr-3">
                      <div className="font-medium text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                        {effect.name}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                        {effect.description}
                      </div>
                    </div>
                    <motion.button
                      onClick={() => effect.toggle(!effect.enabled)}
                      className={`relative w-12 h-6 rounded-full transition-colors duration-300 shrink-0 ${
                        effect.enabled 
                          ? 'bg-blue-500' 
                          : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Toggle ${effect.name}`}
                    >
                      <motion.div
                        className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm"
                        animate={{
                          left: effect.enabled ? '1.5rem' : '0.125rem'
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </motion.button>
                  </div>
                  
                  {/* Matrix Rain Settings */}
                  {effect.name === 'Matrix Rain' && showMatrix && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 p-3 sm:p-4 rounded-xl bg-green-50/50 dark:bg-green-900/20 border border-green-200/30 dark:border-green-700/30 space-y-3 sm:space-y-4"
                    >
                      <h4 className="font-semibold text-sm text-green-800 dark:text-green-300">Matrix Settings</h4>
                      
                      {/* Speed */}
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">Speed</label>
                        <div className="flex gap-2">
                          {['slow', 'medium', 'fast'].map((speed) => (
                            <button
                              key={speed}
                              onClick={() => setMatrixSettings({...matrixSettings, speed: speed as 'slow' | 'medium' | 'fast'})}
                              className={`flex-1 px-2 sm:px-3 py-2 rounded-lg text-xs font-medium transition-colors min-h-[32px] ${
                                matrixSettings.speed === speed
                                  ? 'bg-green-500 text-white'
                                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              {speed}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Density */}
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">Density</label>
                        <div className="flex gap-2">
                          {['low', 'medium', 'high'].map((density) => (
                            <button
                              key={density}
                              onClick={() => setMatrixSettings({...matrixSettings, density: density as 'low' | 'medium' | 'high'})}
                              className={`flex-1 px-2 sm:px-3 py-2 rounded-lg text-xs font-medium transition-colors min-h-[32px] ${
                                matrixSettings.density === density
                                  ? 'bg-green-500 text-white'
                                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              {density}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Color */}
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">Color</label>
                        <div className="flex gap-3 justify-center">
                          {['green', 'blue', 'purple', 'cyan'].map((color) => (
                            <button
                              key={color}
                              onClick={() => setMatrixSettings({...matrixSettings, color: color as 'green' | 'blue' | 'purple' | 'cyan'})}
                              className={`w-10 h-10 rounded-full border-2 transition-all ${
                                matrixSettings.color === color
                                  ? 'border-white shadow-lg scale-110'
                                  : 'border-slate-300 dark:border-slate-600'
                              }`}
                              style={{
                                backgroundColor: color === 'green' ? '#22c55e' : 
                                               color === 'blue' ? '#3b82f6' : 
                                               color === 'purple' ? '#a855f7' : '#06b6d4'
                              }}
                              aria-label={`Select ${color} color`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Opacity */}
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Opacity: {Math.round(matrixSettings.opacity * 100)}%
                        </label>
                        <input
                          type="range"
                          min="0.02"
                          max="0.1"
                          step="0.01"
                          value={matrixSettings.opacity}
                          onChange={(e) => setMatrixSettings({...matrixSettings, opacity: parseFloat(e.target.value)})}
                          className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

          </motion.div>
        </>
      )}
    </>
  )
}