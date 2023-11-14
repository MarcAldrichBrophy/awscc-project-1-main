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
      <head className={styles.header}>
        <Navbar/>
      </head>
      <body className={inter.className} style={{height : '100%'}}>{children}</body>
    </html>
  )
}
