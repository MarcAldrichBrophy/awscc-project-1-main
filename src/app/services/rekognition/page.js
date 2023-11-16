"use client"
import React, { useEffect, useState } from "react";
import styles from './rekognition.module.css'
import Image from 'next/image'


export default function RekognitionPage() {
  const [file, setFile] = useState()
  const [retrievedData, setData] = useState(null)

  // State to store the base64
  const [base64, setBase64] = useState()
  const onFileChange = (e) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);
  };
  const onClick = (e) => {
    e.currentTarget.value = "";
  };
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    // Convert the file to base64
    const base64 = await toBase64(file);

    setBase64(base64);
    
    const url = 'https://bi5onbo6tl.execute-api.us-west-2.amazonaws.com/prod/rekognition';
    
    const match = base64.match(/^data:.+;base64,(.+)$/);
    const b64 = match[1];
   
    const body = JSON.stringify({
      imageBase64: b64,
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
    console.log(responseData);
    const formattedJsonResponse = JSON.stringify(responseData, null, 2).replace(/,(?=(?:[^"]|"[^"]*")*[^"]*$)/g, ",\n");
    setData(()=>{return formattedJsonResponse})
  };


  return (
    <main className={styles.main}>
      <div style={{ textAlign: "center" }}>
        <div className={styles.mainBody}>
          <div className={styles.bodyLeftBlob}>

            {base64 ? (
              <Image src={base64} width={500} height={500} className={styles.previewImage} alt="Uploaded Image" />
            ) : (<h3 className={styles.blobText}>
              Upload Image
            </h3>)}

          </div>
          <div className={styles.bodyRightBlob}>

            <h3 className={styles.blobText}>
              OUTPUT
            </h3>
            <span className={styles.outputText}>
              { retrievedData?
             (<h4>
                {retrievedData}
              </h4>):
              (
                <h4></h4>
              )
              }
              
            </span>
          </div>
        </div>
        <div>
          <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
            <label className={styles.fileInputLabel}>
              <input type="file" name="avatar" accept="image/*" style={{ color: "white", fontSize: 28, backgroundColor: "inherit", display: "none" }} onChange={onFileChange}
                onClick={onClick} />
              Choose File
            </label>
            <button type="submit" className={styles.uploadBtn}>Upload</button>
          </form>


        </div>
      </div>
    </main>
  )
}