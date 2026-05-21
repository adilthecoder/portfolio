'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Send, Sun, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { usePrefetch } from '@/hooks/usePageTransition'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  usePrefetch()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href.includes('#')) return false
    return pathname === href
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200 bg-white/82 shadow-2xl shadow-slate-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-[#020711]/86 dark:shadow-black/25'
          : 'bg-white/35 backdrop-blur-sm dark:bg-[#020711]/40'
      }`}
    >
      <nav className="container-custom">
        <div className="flex h-20 items-center justify-between gap-2 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl shadow-[0_14px_34px_rgba(15,23,42,0.32)] ring-1 ring-blue-500/25 transition group-hover:scale-105 group-hover:shadow-[0_18px_42px_rgba(37,99,235,0.28)] sm:h-[52px] sm:w-[52px] dark:ring-blue-400/25 dark:shadow-[0_0_30px_rgba(37,99,235,0.28)]">
                <Image src="/logo.png" alt="Adil Farhan logo" fill sizes="52px" className="object-cover" priority />
              </div>
              <span className="max-w-[8.5rem] truncate text-base font-bold tracking-tight text-slate-950 xs:max-w-none sm:text-xl dark:text-white">Adil Farhan</span>
            </Link>
          </motion.div>

          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={!item.href.includes('#')}
                className={`relative py-2 text-sm font-medium transition ${
                  isActive(item.href)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300'
                }`}
              >
                {item.name}
                {isActive(item.href) && <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-blue-500" />}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="hidden min-h-[42px] items-center gap-2 rounded-lg border border-blue-500/70 bg-white/50 px-5 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white dark:bg-transparent dark:text-blue-300 sm:inline-flex"
            >
              Let&apos;s Connect
              <Send className="h-4 w-4" />
            </Link>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white/70 text-slate-800 backdrop-blur lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-slate-200 py-4 dark:border-white/10 lg:hidden"
          >
            <div className="grid gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    isActive(item.href)
                      ? 'bg-blue-500/15 text-blue-700 dark:text-blue-300'
                      : 'text-slate-700 hover:bg-slate-950/5 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-blue-300'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let&apos;s Connect
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
