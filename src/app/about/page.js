import React, { Fragment } from 'react';
import styles from './about.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/logo.png'
import CssBaseline from '@mui/material/CssBaseline';
import {
  Container,
  Typography,
  Box,
} from '@mui/material';


export default function HomePage() {
  return (
    <main className={styles.main}>
      <div style = {{overflow:'auto'}}>
        <Container className={styles.mainHeader} id="mainHeader">
          <Box className={styles.leftHeader}>
            <Image src={logo} width={75} height={60}/>
            <Typography>Extracta</Typography>
          </Box>
          <Box className={styles.rightHeader}>
            <Link style={{ padding: 10 }} href="/">Home</Link>
            <Link style={{ padding: 10 }} href="/about">About</Link>
          </Box>
        </Container>

        <Container className= {styles.body}>
          <Box className={styles.aboutHeader}>
            About the Project 
          </Box>
          <Container className={styles.aboutBody}>
            Short paragraph describing the the project...
          </Container>


          {/* <Fragment>
            <CssBaseline />
              <Container className= {styles.box} maxWidth="sm">
                <Typography>
                About The Project
                </Typography>
              </Container>
            </Fragment> */}
        </Container>
        
        
        <Container className= {styles.ourTeam}>
          <Box className={styles.aboutHeader}>
              Our team 
          </Box>

          <div>
            
            
            <Container className= {styles.box}>


              <div style = {{color:'black'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </div>
              <box className = {styles.purple}/>
            </Container>

          </div>
          


        </Container>
      </div>
      

    </main>
  )
}
