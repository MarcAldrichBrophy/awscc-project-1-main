'use client'
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Button from '../components/Button';

export default function Home() {
  const click = (page) => {
    console.log("click");
    // Logging code goes here
    if(page == 1) window.location.href = '/services/rekognition';
    else if (page == 2) window.location.href = '/services/transcribe';
    else if (page == 3) window.location.href = '/services/comprehend';
    else window.location.href = '/';
    // Then redirect

  };

  return (
    <div>
      <main className={styles.Container}>
        <div className={styles.Card}>
          <div className={styles.Title}>Rekognition</div>
          <div className={styles.Text}>Extract items in images to turn visual data into tangible insights.</div>
          <Button name={"Use"} cls={styles.Button} onClickHandler={() => click(1)}/>
        </div>
        <div className={styles.Card}>
          <div className={styles.Title}>Transcribe</div>
          <div className={styles.Text}>Extract text from meeting audio files.</div>
          <Button name={"Use"} cls={styles.Button} onClickHandler={() => click(2)}/>
        </div>
        <div className={styles.Card}>
          <div className={styles.Title}>Comprehend</div>
          <div className={styles.Text}>Extract data, topics, and classifications with confidence scores from your documents.</div>
          <Button name={"Use"} cls={styles.Button} onClickHandler={() => click(3)}/>
        </div>
      </main>
    </div>
  );
}