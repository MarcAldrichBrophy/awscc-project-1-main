// Home page
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="Logo" width={75} height={60} />
          <h1 className={styles.logoTitle}>Extracta</h1>
        </div>
        <nav className={styles.nav}>
          <a href="/" className={styles.navItem}>Home</a>
          <a href="/about" className={styles.navItem}>About</a>
          <Link href="/services" className={styles.navButton}>Try Now
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
       
      </main>
    </div>
  );
}