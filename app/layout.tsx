import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'North® — Independent Creative Studio',
  description: 'North is an independent creative studio building bold identities and digital experiences.',
  openGraph: {
    title: 'North® — Independent Creative Studio',
    description: 'Ideas with direction. Brand identities and digital experiences.',
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