'use client'
import React, { useRef } from 'react';

const UploadButton = ({ setFileName, name , cls, content}) => {
    const fileInputRef = useRef(null);

    const handleFileChange = () => {
      const file = fileInputRef.current.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const fileContent = e.target.result;
          content.current.innerText = fileContent;
        }
        reader.onloadend = () => {
            setFileName(file.name)
        }
        reader.readAsText(file);

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