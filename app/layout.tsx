import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexus — Build the Future',
  description: 'The platform that empowers teams to ship faster, scale smarter, and build with confidence.',
  keywords: ['platform', 'developer', 'infrastructure', 'deployment'],
  openGraph: {
    title: 'Nexus — Build the Future',
    description: 'The platform that empowers teams to ship faster, scale smarter, and build with confidence.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="noise-overlay bg-obsidian text-snow font-body antialiased">
        {children}
      </body>
    </html>
  )
}