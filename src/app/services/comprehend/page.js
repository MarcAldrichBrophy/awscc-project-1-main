'use client';
import React, { useRef, useState } from 'react';
import styles from './page.module.css'
import UploadButton from '../../components/UploadButton';

export default function Comprehend() {
  let [fileName, setFileName] = useState('');
  const contentRef = useRef();

  //  Function to send text to the specified URL
   const sendTextToAPI = async (text) => {
    try {
      // const apiUrl = 'https://dog.ceo/api/breeds/image/random';
      const apiUrl = `https://bi5onbo6tl.execute-api.us-west-2.amazonaws.com/prod/comprehend?Text=${text}`;
      const response = await fetch(apiUrl);

      // Handle the response as needed
      const responseData = await response.json();
      console.log(responseData);
      // contentRef.current.innerText = responseData;
    } catch (error) {
      console.error('Error sending text to API:', error);
    }
  };
    
  return (
    <div className={styles.container}>
      <div className={styles.boxStyle}>
        <p ref={contentRef}/>
      </div>
      
      <UploadButton 
        setFileName={setFileName} 
        name="Upload" 
        cls={styles.uploadButton} 
        content={contentRef}
        sendTextToAPI={sendTextToAPI}
      />

      <p className={styles.fileName}>{fileName}</p>
    </div>
    
  )
}