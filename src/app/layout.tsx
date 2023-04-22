import { Nav } from '@/components/Nav'
import './globals.css'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Miguel Ponce',
  description: 'Software Engineer',
}

export default function RootLayout({  children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* header tags here */}
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
