import styles from './about.module.css'
import Image from 'next/image'


export default function HomePage() {
  return (
    <main className={styles.main}>
      <div id="mainHeader">
        <Image src="/logo.png" width={75} height={60}
        style={{
          position: 'absolute',
          left: '2vw',
          top: '5vh'
        }}/>
        <h1>Extracta</h1>
        <h2>About</h2>
      </div>

      <div id="projectDescription">
        <h1>Project Description</h1>
        <p>
          Extracta is an easy to use web application that allows users to extract
          meaningful data from their day to day business. With our three services,
          users can extract data from audio, images, and documents to understand
          sentiment & items rapidly.

          Our solution uses AWS for hosting & computing, showcasing easy to use
          services provided by AWS such as Rekognition, Transcribe, and Comprehend.
        </p>
      </div>
      
      

    </main>
  )
}
