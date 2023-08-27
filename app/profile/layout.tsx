import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


export const metadata: Metadata = {
    title: 'My Profile',
    description: 'My profile page',
  }

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section>
            {children}
        </section>
    )
  }  