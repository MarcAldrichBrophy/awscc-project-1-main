import { Inter } from 'next/font/google'
import './globals.css'
import styles from './page.module.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Extracta',
  description: 'AWS AI demo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className={styles.main} id="mainHeader">
        <Navbar/>


      </div>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
