'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import { Tooltip } from '@/components/Tooltip'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-custom">
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl shadow-sm ring-1 ring-blue-500/25 transition-transform duration-300 group-hover:scale-105">
                  <Image src="/logo.png" alt="Adil Farhan logo" fill sizes="40px" className="object-cover" />
                </div>
                <span className="text-2xl font-bold text-foreground">
                  Adil <span className="gradient-text">Farhan</span>
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                Experienced Software Engineer specializing in C# and .NET technologies,
                scalable architecture, and cloud integration.
              </p>
              <div className="flex space-x-4">
                <Tooltip content="LinkedIn">
                  <a
                    href="https://www.linkedin.com/in/adil-farhan1453"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:border-primary transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </Tooltip>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Adil Farhan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
