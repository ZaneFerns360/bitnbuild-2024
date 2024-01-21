import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { url } from 'inspector'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BitnBuild',
  description: 'BitnBuild 2024 Organized by GDSC Fr.CRCE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
