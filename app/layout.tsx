import type { Metadata } from 'next'
import { SEO_DEFAULT } from './utils/seo-config'
import { Marcellus } from 'next/font/google'
import './globals.css'
import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


const marcellus = Marcellus({
  weight: "400",
  subsets: ['latin']
})

export const metadata: Metadata = SEO_DEFAULT;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${marcellus.className} flex flex-col ctm-min-h-screen`} id="body">
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
