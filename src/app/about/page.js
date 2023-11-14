import styles from './about.module.css'
import Image from 'next/image'


export default function About() {
  return (
    // <main className={styles.main}>
    //   <div id="mainHeader">
    //     <Image src="/logo.png" width={75} height={60}
    //     style={{
    //       position: 'absolute',
    //       left: '2vw',
    //       top: '5vh'
    //     }}/>
    //     <h1>Extracta</h1>
    //     <h2>About</h2>
    //   </div>
    // </main>
      <div className={styles.container}>
        <div className={styles.about}>
          <h1>About The Project</h1>
            <p>
              Extracta is an easy to use web application that allows users to extract
              meaningful data from their day to day business. With our three services,
              users can extract data from audio, images, and documents to understand
              sentiment & items rapidly.

              Our solution uses AWS for hosting & computing, showcasing easy to use
              services provided by AWS such as Rekognition, Transcribe, and Comprehend.
            </p>
        </div>
        <div className = {styles.team}>
          <h1>Our Team</h1>
          
          <div className={styles.boxStyleLeft} >
            <p style = {{color:'black'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Rhoncus mattis rhoncus urna neque viverra justo. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Justo donec enim diam vulputate ut pharetra sit amet.  </p>
            <div className = {styles.purple}/>
          </div>

          <div className={styles.boxStyleRight}>
            <p style = {{color:'black'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Rhoncus mattis rhoncus urna neque viverra justo. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Justo donec enim diam vulputate ut pharetra sit amet.  </p>
            <div className = {styles.purple}/>
          </div>

        </div>
      </div>
      
      
      

  )
}
