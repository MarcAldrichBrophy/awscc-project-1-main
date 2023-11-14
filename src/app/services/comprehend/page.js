'use client';
import React, { useRef, useState } from 'react';
import styles from './page.module.css'
import FileButton from '../../components/FileButton';

export default function Comprehend() {

  const contentRef = useRef();
  return (
    <div className={styles.container}>
      <div className={styles.boxStyle}>
          <p ref={contentRef}>
          </p>
      </div>
      <FileButton name="Upload" cls={styles.uploadButton} content={contentRef}/>
    </div>
    
  )
  // function showFile(e) {
  //   e.preventDefault()
  //   const reader = new FileReader()
  //   reader.onload = async (e) => { 
  //     const text = (e.target.result);
  //     console.log(text);
  //     console.log(typeof(text))
  //   };
  //   reader.readAsText(e.target.files[0]);
  // }
  // return (
  //   <main className={styles.main}>
  //     <Container className={styles.mainHeader} id="mainHeader">
  //       <Box className={styles.leftHeader}>
  //         <Image src="/logo.png" width={75} height={60}/>
  //         <Typography>Extracta</Typography>
  //       </Box>
  //       <Box className={styles.rightHeader}>
  //         <Link style={{ padding: 10 }} href="/">Home</Link>
  //         <Link style={{ padding: 10 }} href="/about">About</Link>
  //       </Box>
  //     </Container>

  //     <Container className= {styles.body}>
  //       <Fragment>
  //         <CssBaseline />
  //         <Container className= {styles.box} maxWidth="sm">
  //           <Typography>
  //             helloworld
  //           </Typography>
  //         </Container>
  //       </Fragment>

  //       <input
  //           className={styles.button}
  //           type='file'
  //           onChange={(e) => showFile(e)}
  //         />
  //       <Button className={styles.button} variant="contained">
  //         Upload File
  //       </Button>
  //     </Container>
  //   </main>
  // )
}