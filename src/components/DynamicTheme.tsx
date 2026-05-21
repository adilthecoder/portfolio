'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface TimeBasedTheme {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
  }
  period: string
}

const timeBasedThemes: TimeBasedTheme[] = [
  {
    name: 'dawn',
    colors: {
      primary: '#ff6b6b',
      secondary: '#ffa726',
      accent: '#ffeb3b',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    period: '5-8'
  },
  {
    name: 'morning',
    colors: {
      primary: '#4fc3f7',
      secondary: '#29b6f6',
      accent: '#03a9f4',
      background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)'
    },
    period: '8-12'
  },
  {
    name: 'afternoon',
    colors: {
      primary: '#ffb74d',
      secondary: '#ff9800',
      accent: '#f57c00',
      background: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)'
    },
    period: '12-17'
  },
  {
    name: 'evening',
    colors: {
      primary: '#ba68c8',
      secondary: '#ab47bc',
      accent: '#9c27b0',
      background: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)'
    },
    period: '17-20'
  },
  {
    name: 'night',
    colors: {
      primary: '#5c6bc0',
      secondary: '#3f51b5',
      accent: '#303f9f',
      background: 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)'
    },
    period: '20-5'
  }
]

export default function DynamicTheme() {
  const [currentTheme, setCurrentTheme] = useState<TimeBasedTheme | null>(null)
  const [isEnabled, setIsEnabled] = useState(false)
  const { theme, setTheme } = useTheme()

  const getCurrentTimeTheme = (): TimeBasedTheme => {
    const hour = new Date().getHours()
    
    if (hour >= 5 && hour < 8) return timeBasedThemes[0] // dawn
    if (hour >= 8 && hour < 12) return timeBasedThemes[1] // morning
    if (hour >= 12 && hour < 17) return timeBasedThemes[2] // afternoon
    if (hour >= 17 && hour < 20) return timeBasedThemes[3] // evening
    return timeBasedThemes[4] // night
  }

  const applyDynamicTheme = (themeData: TimeBasedTheme) => {
    const root = document.documentElement
    
    // Apply CSS custom properties
    root.style.setProperty('--dynamic-primary', themeData.colors.primary)
    root.style.setProperty('--dynamic-secondary', themeData.colors.secondary)
    root.style.setProperty('--dynamic-accent', themeData.colors.accent)
    root.style.setProperty('--dynamic-background', themeData.colors.background)
    
    // Add dynamic theme class
    document.body.classList.add('dynamic-theme-active')
    document.body.setAttribute('data-time-theme', themeData.name)
  }

  const removeDynamicTheme = () => {
    const root = document.documentElement
    
    // Remove CSS custom properties
    root.style.removeProperty('--dynamic-primary')
    root.style.removeProperty('--dynamic-secondary')
    root.style.removeProperty('--dynamic-accent')
    root.style.removeProperty('--dynamic-background')
    
    // Remove dynamic theme class
    document.body.classList.remove('dynamic-theme-active')
    document.body.removeAttribute('data-time-theme')
  }

  useEffect(() => {
    if (!isEnabled) return

    const updateTheme = () => {
      const newTheme = getCurrentTimeTheme()
      setCurrentTheme(newTheme)
      applyDynamicTheme(newTheme)
    }

    // Update immediately
    updateTheme()

    // Update every minute
    const interval = setInterval(updateTheme, 60000)

    return () => {
      clearInterval(interval)
      if (!isEnabled) {
        removeDynamicTheme()
      }
    }
  }, [isEnabled])

  // Listen for theme changes to disable dynamic theme if user manually changes
  useEffect(() => {
    const handleThemeChange = () => {
      if (theme !== 'system' && isEnabled) {
        setIsEnabled(false)
        removeDynamicTheme()
      }
    }

    window.addEventListener('storage', handleThemeChange)
    return () => window.removeEventListener('storage', handleThemeChange)
  }, [theme, isEnabled])

  const toggleDynamicTheme = () => {
    if (isEnabled) {
      setIsEnabled(false)
      removeDynamicTheme()
    } else {
      setIsEnabled(true)
      setTheme('system') // Set to system theme when enabling dynamic theme
    }
  }

  return (
    <div className="fixed bottom-24 left-8 z-50">
      <div className="flex flex-col items-center space-y-2">
        {/* Toggle Button */}
        <button
          onClick={toggleDynamicTheme}
          className={`w-12 h-12 rounded-full backdrop-blur-md shadow-lg flex items-center justify-center border transition-all duration-300 ${
            isEnabled
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-400 shadow-purple-500/25'
              : 'bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700'
          }`}
          title={isEnabled ? 'Disable Dynamic Theme' : 'Enable Dynamic Theme'}
        >
          <span className="text-lg">
            {isEnabled ? '🌈' : '🕐'}
          </span>
        </button>

        {/* Theme Indicator */}
        {isEnabled && currentTheme && (
          <div className="bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
            {currentTheme.name} mode
          </div>
        )}
      </div>
    </div>
  )
}