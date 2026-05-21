'use client'

import { useCallback, useEffect } from 'react'
import type { Container } from '@tsparticles/engine'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesBackground() {
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container)
  }, [])

  useEffect(() => {
    const initParticles = async () => {
      const { tsParticles } = await import('@tsparticles/engine')
      await loadSlim(tsParticles)
    }
    initParticles()
  }, [])

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      className="absolute inset-0 -z-50"
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ['#3b82f6', '#60a5fa', '#8b5cf6'],
          },
          links: {
            color: '#3b82f6',
            distance: 120,
            enable: true,
            opacity: 0.1,
            width: 0.8,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 0.6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
            value: 40,
          },
          opacity: {
            value: 0.3,
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 1.5,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}