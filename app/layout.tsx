import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Envirozone - Environmental Monitoring & Pollution Abatement',
  description: 'Environmental Monitoring, Wastewater Management, and Solid Waste Management Solutions. Reliable instruments for a sustainable future.',
  generator: '',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf7ef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#fbf7ef] light">
      <body className="antialiased bg-[#fbf7ef] text-slate-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
