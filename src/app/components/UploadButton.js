'use client'
import React, { useRef } from 'react';

const UploadButton = ({ setFileName, name , cls, content, sendTextToAPI}) => {
    const fileInputRef = useRef(null);

    const handleFileChange = () => {
      const file = fileInputRef.current.files[0];
      let fileContent = '';
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          fileContent = e.target.result;
        }
        reader.onloadend = () => {
            setFileName(file.name)
            sendTextToAPI(fileContent)
        }
        // reader.readAsText(file);

        }
    };

  return (
    <div>
        <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }}/>
        <a className={cls} onClick={() => fileInputRef.current.click()}>
        {name}
        </a>
    </div>
  );
};

export default UploadButton;