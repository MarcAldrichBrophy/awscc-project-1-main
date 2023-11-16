'use client';
import { useState, useEffect } from 'react' ;
import styles from './about.module.css';
import Image from 'next/image';
import {
  CalebSwan, SuprajReddy, VaishnaviPunati, pic4,
} from '../images';

export default function About() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    const abc = [
      {
        name: 'CalebSwan',
        description: "Hi, my name is Caleb, and I am a 1st year at Seattle University studying Computer Science. I'm from the Seattle area and in my free time I enjoy mountain biking, making music, playing tennis, and going out with my friends.",
        picture: CalebSwan,
      },
      {
        name: 'SuprajReddy',
        description: "Preferred Name: Supraj Reddy\nMajor: MS in Computer Science\nGraduation: Spring 2024\n\nHello, I'm Supraj Reddy, a computer science graduate from Hyderabad, India. Beyond the world of coding, I find joy in diverse hobbies. You can often catch me passionately watching soccer matches, immersing myself in the virtual realms of video games, and experimenting with new recipes in the kitchen. I believe in the perfect blend of technology and creativity to make life exciting!",
        picture: SuprajReddy,
      },
      {
        name: 'VaishnaviPunati',
        description: "Preferred name- Vaish\nMajor - MSCS\nGraduation- Winter 2024\n\nHello, my name is Vaishnavi Punati. I have completed my bachelor's in IT and am currently pursuing a master's in computer science. I was born and brought up in India. My hobbies include watching movies, hiking, and cooking. I am a beach person.\n\nI added a period after \"Vaishnavi Punati\" to separate the sentences, and I adjusted the structure for clarity. Overall, it looks great!",
        picture: VaishnaviPunati,
      },
      {
        name: 'user4',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Rhoncus mattis rhoncus urna neque viverra justo. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Justo donec enim diam vulputate ut pharetra sit amet.",
        picture: pic4,
      },
    ];
    setUsers(abc);
  }, []);
  
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
        <div id="about-box" className = {styles.team}>
          <h1>Our Team</h1>
          {
            users.map((item, index) => index % 2 === 0 ? (
              <div className={styles.boxStyleLeft} >
                <p style = {{color:'black', whiteSpace: 'pre-line'}}> {item.description} </p>
                <div className={styles.purpleLeft}>
                  <Image
                    src={item.picture}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '60px',
                      objectFit: 'cover'

                    }}
                  />
                </div>
              </div>
            ) : (
              <div className={styles.boxStyleRight}>
                <div className={styles.purpleRight}>
                  <Image
                    src={item.picture}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '60px',
                      objectFit: 'cover'  
                    }}
                  />
                </div>
                <p style = {{color:'black', whiteSpace: 'pre-line'}}> {item.description} </p>
              </div>
            ))
          }
        </div>
      </div>
  )
}