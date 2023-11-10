'use client'
import React, { useRef } from 'react';

const DownloadButton = ({ name , cls, content}) => {
    const fileInputRef = useRef(null);


    const handleDownload = () => {

        const contentToDownload = content.current.innerText || 'Default content';
        const blob = new Blob([contentToDownload], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        fileInputRef.current.href = URL.createObjectURL(blob);
        fileInputRef.current.download = 'downloaded_file.txt';
        fileInputRef.current.click();
  
        URL.revokeObjectURL(url);
    };

  return (
    <div>
        <a type="file" ref={fileInputRef} style={{ display: 'none' }}/>
        <a className={cls} onClick={handleDownload}>
        {name}
        </a>
    </div>
  );
};

export default DownloadButton;