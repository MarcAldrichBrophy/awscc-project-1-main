'use client'
import React, { useRef } from 'react';
import styles from './transcribe.module.css'
import FileButton from '../../components/FileButton';
import DownloadButton from '../../components/DownloadButton';

export default function Transcribe() {

  const contentRef = useRef();
  return (
    
    <div className={styles.container}>
      <div className={styles.boxStyle}>
          <p ref={contentRef}>
          </p>
      </div>
      <FileButton name="Upload" cls={styles.uploadButton} content={contentRef}/>
      <DownloadButton name="Download Transcript" cls={styles.downloadButton} content={contentRef}/>
      
    </div>
  )
}
