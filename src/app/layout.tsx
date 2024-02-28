import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Harry Potter - Next App',
  icons: {
    icon: '/favicon.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='antialiased'>
      <body className={poppins.className}>
        <div className="bg-[#121214] text-[#e1e1e6]">
          <div className="w-screen h-screen m-auto max-w-screen-xl bg-[#202024] p-12 overflow-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
