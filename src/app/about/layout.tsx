import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Adil Farhan',
  description: 'About Adil Farhan - Software Engineer with 8+ years in C# and .NET.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
