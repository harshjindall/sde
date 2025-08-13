import React from 'react';
import "./styles/SocialLinks.css";



const ImageButton = ({ imageSrc, altText, onClick }) => {
  return (
    <button className='iconStyle' onClick={onClick}>
      <img className='imageStyle' src={imageSrc} alt={altText} />
    </button>
  );
};

export default ImageButton;
