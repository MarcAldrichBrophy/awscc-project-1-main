'use client'
import React, { useRef, useState } from 'react';
import styles from './transcribe.module.css'
// import FileButton from '../../components/FileButton';
import UploadButton from '../../components/UploadButton';
import DownloadButton from '../../components/DownloadButton';

export default function Transcribe() {
  let [fileName, setFileName] = useState('');
  const contentRef = useRef();

  const sendTextToAPI = async (text) => {
    try {
      const base64 = text.match(/^data:.*;base64,(.*)$/)[1];
      console.log(base64);
      const url = 'https://bi5onbo6tl.execute-api.us-west-2.amazonaws.com/prod/transcribe';
      const body = JSON.stringify({
        audio_data_base64: base64,
      });
  
      const headers = {
        "Content-Type":"application/json",
      };
   
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        mode:"cors",
        body: body
      });
      console.log(response)
      const responseData = await response.json();
      console.log(responseData)

      contentRef.current.innerText = responseData;


    } catch (error) {
      console.error('Error sending text to API:', error);
    }
  };


  return (
    
    <div className={styles.container}>
      <div className={styles.boxStyle}>
          <p ref={contentRef}>
          </p>
      </div>
      {/* <FileButton name="Upload" cls={styles.uploadButton} content={contentRef}/> */}
      <UploadButton 
        setFileName={setFileName} 
        name="Upload" 
        cls={styles.uploadButton} 
        content={contentRef}
        sendTextToAPI={sendTextToAPI}
      />
      <DownloadButton name="Download Transcript" cls={styles.downloadButton} content={contentRef}/>
      
    </div>
  )
}
