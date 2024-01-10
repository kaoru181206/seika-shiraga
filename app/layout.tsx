import type { Metadata } from 'next'
import { Marcellus } from 'next/font/google'
import './globals.css'
import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { createContext, useState } from 'react'


const marcellus = Marcellus({
  weight: "400",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'seika shiraga',
  description: 'seika shiraga',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${marcellus.className} flex flex-col min-h-screen`}>
          <ClientOnly>
            <Navbar />
            <div className='flex-grow pb-10 md:pb-20'>
              {children}
            </div>
            <Footer />
          </ClientOnly>
      </body>
    </html>
  )
}
