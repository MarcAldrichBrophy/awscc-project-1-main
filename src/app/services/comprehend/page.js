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
      const base64 = text.match(/^data:.*;base64,(.*)$/)[1];
      console.log(base64);
      const url = 'https://bi5onbo6tl.execute-api.us-west-2.amazonaws.com/prod/comprehend';
      const body = JSON.stringify({
        base64File: base64,
      });
      // console.log(typeof text) //string
      // const body = text;
  
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
      let message = '';
      message += "Detected Language: "+ responseData.DetectedLanguage;
      message += "\n\nSentiment: " + responseData.Sentiment;
      message += "\n\nSentiment Score: \nPositive: " + responseData.SentimentScore.Positive;
      message += "\nNegative: " + responseData.SentimentScore.Negative;
      message += "\n\tNeutral: " + responseData.SentimentScore.Neutral;
      message += "\n\nKey Phrases: " + responseData.KeyPhrases;
      message += "\n\nKey Phrase Scores: " + responseData.KeyPhraseScores;

      contentRef.current.innerText = message;
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