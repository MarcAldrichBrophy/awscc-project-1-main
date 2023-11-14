'use client'
import React from 'react';


const Button = ({ name , cls, onClickHandler}) => {
  const handleClick = () => {
    onClickHandler();
  };

  return (
    <a className={cls} onClick={handleClick}>
      {name}
    </a>
  );
};

export default Button;