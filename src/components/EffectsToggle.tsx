'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Calendar } from 'lucide-react'
import { LazyMatrixRain } from '@/components/LazyComponents'
import { useEffects } from '@/contexts/EffectsContext'

export default function EffectsToggle() {
  const { 
    showMatrix, setShowMatrix,
    showFloatingShapes, setShowFloatingShapes,
    showParticles, setShowParticles,
    matrixSettings, setMatrixSettings
  } = useEffects()
  
  const [showControls, setShowControls] = useState(false)

  return (
    <>
      {/* Voice Activation - Removed for build compatibility */}

      {/* Matrix Rain Effect */}
      {showMatrix && (
        <LazyMatrixRain 
          speed={matrixSettings.speed}
          density={matrixSettings.density}
          color={matrixSettings.color}
          opacity={matrixSettings.opacity}
        />
      )}

      {/* Effects Toggle Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-slate-800/80 dark:bg-slate-200/80 backdrop-blur-md shadow-lg flex items-center justify-center z-50 border border-slate-700 dark:border-slate-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowControls(!showControls)}
        title="Visual Effects"
      >
        <Award className="w-5 h-5 text-slate-200 dark:text-slate-800" />
      </motion.button>

      {/* Effects Control Panel */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 min-w-[280px] z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Visual Effects
              </h3>
              <button
                onClick={() => setShowControls(false)}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <Calendar className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              </button>
            </div>

            {/* All Effects Toggles */}
            <div className="space-y-4">
              {/* Matrix Rain Toggle */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Matrix Rain
                </label>
                <motion.button
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    showMatrix ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                  onClick={() => setShowMatrix(!showMatrix)}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute w-5 h-5 bg-white rounded-full shadow-md"
                    animate={{
                      x: showMatrix ? 26 : 2,
                      y: 2
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>

              {/* Floating Shapes Toggle */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Floating Shapes
                </label>
                <motion.button
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    showFloatingShapes ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                  onClick={() => setShowFloatingShapes(!showFloatingShapes)}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute w-5 h-5 bg-white rounded-full shadow-md"
                    animate={{
                      x: showFloatingShapes ? 26 : 2,
                      y: 2
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>

              {/* Particles Toggle */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Cosmic Particles
                </label>
                <motion.button
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    showParticles ? 'bg-purple-500' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                  onClick={() => setShowParticles(!showParticles)}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute w-5 h-5 bg-white rounded-full shadow-md"
                    animate={{
                      x: showParticles ? 26 : 2,
                      y: 2
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>
            </div>

            {/* Matrix Settings */}
            <AnimatePresence>
              {showMatrix && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3 border-t border-slate-200 dark:border-slate-700 pt-4"
                  >
                    {/* Speed Control */}
                    <div>
                      <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                        Speed
                      </label>
                      <div className="flex space-x-2">
                        {(['slow', 'medium', 'fast'] as const).map((speedOption) => (
                          <button
                            key={speedOption}
                            onClick={() => setMatrixSettings({ ...matrixSettings, speed: speedOption as 'slow' | 'medium' | 'fast' })}
                            className={`px-3 py-1 text-xs rounded-lg border transition-colors ${
                              matrixSettings.speed === speedOption
                                ? 'bg-green-500 text-white border-green-500'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600'
                            }`}
                          >
                            {speedOption}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color Control */}
                    <div>
                      <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                        Color
                      </label>
                      <div className="flex space-x-2">
                        {(['green', 'blue', 'purple', 'cyan'] as const).map((colorOption) => (
                          <button
                            key={colorOption}
                            onClick={() => setMatrixSettings({ ...matrixSettings, color: colorOption as 'green' | 'blue' | 'purple' | 'cyan' })}
                            className={`w-6 h-6 rounded-full border-2 transition-all ${
                              matrixSettings.color === colorOption
                                ? 'border-slate-400 scale-110'
                                : 'border-slate-200 dark:border-slate-600'
                            }`}
                            style={{
                              backgroundColor: {
                                green: '#00ff00',
                                blue: '#0088ff',
                                purple: '#8800ff',
                                cyan: '#00ffff'
                              }[colorOption]
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Opacity Control */}
                    <div>
                      <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                        Opacity: {Math.round(matrixSettings.opacity * 100)}%
                      </label>
                      <input
                        type="range"
                        min="0.1"
                        max="0.8"
                        step="0.1"
                        value={matrixSettings.opacity}
                        onChange={(e) => setMatrixSettings({ 
                          ...matrixSettings, 
                          opacity: parseFloat(e.target.value) 
                        })}
                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Easter Egg Hint */}
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                💡 Try saying &quot;activate matrix&quot; for voice control
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}