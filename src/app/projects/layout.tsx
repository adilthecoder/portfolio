import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Adil Farhan',
  description: 'Project work by Adil Farhan.',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
