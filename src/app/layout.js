import { Inter } from 'next/font/google'
import './globals.css'
import styles from './page.module.css'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Extracta',
  description: 'AWS AI demo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{height : '100%'}}>
        <div className={styles.header}>
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  )
}
