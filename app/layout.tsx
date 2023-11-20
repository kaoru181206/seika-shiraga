import type { Metadata } from 'next'
import { Marcellus } from 'next/font/google'
import './globals.css'
import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'


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
      <body className={marcellus.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {/* {children} */}
      </body>
    </html>
  )
}
