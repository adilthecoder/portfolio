'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h1 className="heading-lg text-foreground">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Selected work across enterprise .NET systems, ERP solutions, and cloud integrations.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto card p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary">
              <Briefcase className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Project showcase coming soon</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              In the meantime, see the experience section on the About page for project highlights
              across Meissasoft, Raheem Solutions, and Techlogix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="btn-primary">
                View Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
