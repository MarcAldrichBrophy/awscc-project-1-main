'use client';
import { useState, useEffect } from 'react' ;
import styles from './about.module.css';
import Image from 'next/image';
import {
  pic1, pic2, pic3, pic4,
} from '../images';

export default function About() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    const abc = [
      {
        name: 'user1',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Rhoncus mattis rhoncus urna neque viverra justo. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Justo donec enim diam vulputate ut pharetra sit amet.",
        picture: pic1,
      },
      {
        name: 'user2',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Rhoncus mattis rhoncus urna neque viverra justo. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Justo donec enim diam vulputate ut pharetra sit amet.",
        picture: pic2,
      },
      {
        name: 'user3',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Rhoncus mattis rhoncus urna neque viverra justo. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Justo donec enim diam vulputate ut pharetra sit amet.",
        picture: pic3,
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
                <p style = {{color:'black'}}> {item.description} </p>
                <div className={styles.purpleLeft}>
                  <Image
                    src={item.picture}
                    style={{
                      width: '100%',
                      height: '100%'
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
                      height: '100%'
                    }}
                  />
                </div>
                <p style = {{color:'black'}}> {item.description} </p>
              </div>
            ))
          }
        </div>
      </div>
  )
}