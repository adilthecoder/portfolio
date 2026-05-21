'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Award } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

const pathMap: Record<string, string> = {
  '': 'Home',
  'about': 'About',
  'projects': 'Projects',
  'contact': 'Contact',
}

export default function Breadcrumbs() {
  const pathname = usePathname()

  if (pathname === '/') {
    return null
  }

  const pathSegments = pathname.split('/').filter(segment => segment !== '')
  const breadcrumbs: BreadcrumbItem[] = []

  breadcrumbs.push({ label: 'Home', href: '/' })

  let currentPath = ''
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`
    const label = pathMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
    breadcrumbs.push({ label, href: currentPath })
  })

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700"
    >
      <div className="container-custom py-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center">
              {index > 0 && (
                <ArrowRight className="h-4 w-4 text-slate-400 mx-2" aria-hidden="true" />
              )}

              {index === breadcrumbs.length - 1 ? (
                <span
                  className="text-slate-900 dark:text-slate-100 font-medium flex items-center"
                  aria-current="page"
                >
                  {index === 0 && <Award className="h-4 w-4 mr-1" aria-hidden="true" />}
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                  aria-label={`Go to ${crumb.label}`}
                >
                  {index === 0 && <Award className="h-4 w-4 mr-1" aria-hidden="true" />}
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
