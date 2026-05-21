import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Adil Farhan',
  description: 'Get in touch with Adil Farhan.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
