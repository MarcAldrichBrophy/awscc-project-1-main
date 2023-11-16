// Home page
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import computers from './images/computerDiagram.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <h1 className={styles.headline}>Query your data, not your file names. Extracta labels your data for you.</h1>
        <a href="/services" className={styles.tryNowButton}>Try Now</a>
      </div>
      <div className={styles.illustration}>
        <Image
          src={computers}
          alt="Illustration"
          width={400} // set the appropriate size
          height={400}
          style={{
            position: "absolute"
          }}
          priority
        />
      </div>
    </main>

  );
}
