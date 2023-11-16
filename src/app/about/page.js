'use client';
import { useState, useEffect } from 'react' ;
import styles from './about.module.css';
import Image from 'next/image';
import {
  CalebSwan, SuprajReddy, VaishnaviPunati, SothaninnSieng, MarcBrophy, Computer
} from '../images';

export default function About() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    const abc = [
      {
        id: 0,
        name: 'MarcBrophy',
        description: "Preferred Name: Marc Brophy\nMajor: BS Computer Science, Entrepreneurship and Innovation Minor\nGraduation: Spring 2024\nPosition: Project Lead\n\nStrong passion for cloud engineering, project development and management. In my free time I play electric guitar and chef up food.",
        picture: MarcBrophy,
      },
      {
        id: 1,
        name: 'CalebSwan',
        description: "Preferred Name: Caleb Swan\nMajor: BS in Computer Science\nGraduation: Spring 2027\nPosition: Backend - Multiple Lambda Functions\n\nHi, my name is Caleb, and I am a 1st year at Seattle University studying Computer Science. I'm from the Seattle area and in my free time I enjoy mountain biking, making music, playing tennis, and going out with my friends.",
        picture: CalebSwan,
      },
      {
        id: 3,
        name: 'VaishnaviPunati',
        description: "Preferred name- Vaish\nMajor - MS Computer Science\nGraduation- Winter 2024\nPosition: Frontend - Home & Service Pages\n\nHello, my name is Vaishnavi Punati. I have completed my bachelor's in IT and am currently pursuing a master's in computer science. I was born and brought up in India. My hobbies include watching movies, hiking, and cooking. I am a beach person.",
        picture: VaishnaviPunati,
      },
      {
        id: 4,
        name: 'SothaninnSieng',
        description: "Preferred Name: Ninn\nMajor: MS Computer Science with Specialization in Software Engineering\nGraduation: Spring 2025\nPosition: Frontend - Full Site Developer\n\nHi, my name is Sothaninn Sieng, and I am from Cambodia. In my free time, you'll find me staying up to date with all the food trends and travelling to the most beautiful lakes to go fishing.",
        picture: SothaninnSieng,
      },
      {
        id: 2,
        name: 'SuprajReddy',
        description: "Preferred Name: Supraj Reddy\nMajor: MS in Computer Science\nGraduation: Spring 2024\nPosition: Backend - Comprehend Lambda Function\n\nHello, I'm Supraj Reddy, a computer science graduate from Hyderabad, India. Beyond the world of coding, I find joy in diverse hobbies. You can often catch me passionately watching soccer matches, immersing myself in the virtual realms of video games, and experimenting with new recipes in the kitchen. I believe in the perfect blend of technology and creativity to make life exciting!",
        picture: SuprajReddy,
      },
      {
        id: 5,
        name: 'CarterMartin',
        description: "Preferred Name: Carter Martin\nMajor: MS in Computer Science\nGraduation: Spring 2024\nPosition: Frontend - Full Site Developer\n\nHi, I'm Carter. I grew up on the Big Island of Hawaii and have been studying at Seattle U since 2018. In my spare time, I enjoy playing video games and reading.",
        picture: Computer,
      },
      {
        id: 6,
        name: 'GayatriKunaparaju',
        description: "Preferred Name: Gayatri Padma Kunaparaju\nMajor: MS in Computer Science\nGraduation: Spring 2024\nPosition: Backend - Transcribe Lambda Function\n\n",
        picture: Computer,
      },
      {
        id: 7,
        name: 'JuneWu',
        description: "Preferred Name: June Wu\nMajor: BS in Computer Science\nGraduation: Spring 2024\nPosition: Backend - S3 Integration Lambda Function\n\n",
        picture: Computer,
      },
      {
        id: 8,
        name: 'RohitNagotkar',
        description: "Preferred Name: Rohit Nagotkar\nMajor: MS in Computer Science\nGraduation: 2024\nPosition: Backend - Frontend - Comprehend, API Integration\n\n",
        picture: Computer,
      },
      {
        id: 9,
        name: 'EthanSue',
        description: "Preferred Name: Ethan Sue\nMajor: BS in Computer Science, Entrepreneurship and Innovation Minor\nGraduation: Spring 2024\nPosition: Project Analyst\n\n",
        picture: Computer,
      },
      {
        id: 10,
        name: 'NikkiNagata',
        description: "Preferred Name: Nikki Nagata\nMajor: Bachelor's in Business Management and Analytics, Entrepreneurship and Innovation Minor\nGraduation: Spring 2024\nPosition: Project Analyst\n\n",
        picture: Computer,
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
              Extracta allows us to catalog data and query by the content of the file instead
              of its name.

              Utilizing AI, Extracta generates and appends tags based on the incoming file type.<br></br><br></br>
              Uploading audio generates a transcription, appending key words and sentiment.<br></br>
              Uploading images generates labels, appending whats actually inside of the image directly
              to the file.<br></br>
              Uploading pdfs appends key words and sentiment.
              <br></br><br></br>
              Stop trying to remember what file name has what data, use Extracta, and query based
              on what you need.
            </p>
        </div>
        <div id="about-box" className = {styles.team}>
          <h1>Our Team</h1>
          {
            users.map((item, index) => index % 2 === 0 ? (
              <div key={item.id} className={styles.boxStyleLeft} >
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
              <div key={item.id} className={styles.boxStyleRight}>
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