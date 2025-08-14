import React from "react";
import ImageButton from "./ImageButton";
import "./styles/SocialLinks.css";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      imageSrc: "/githublogo.webp",
      url: "https://github.com/HarshJindall"
    },
    {
      name: "Devpost",
      imageSrc: "/devpostlogo.webp",
      url: "https://devpost.com/harshjindal"
    },
    {
      name: "YouTube",
      imageSrc: "/youtubelogo.webp",
      url: "https://www.youtube.com/@HarshJindall"
    },
    {
      name: "Instagram",
      imageSrc: "/instagramlogo.webp",
      url: "https://www.instagram.com/HarshJindall/"
    },
    {
      name: "LinkedIn",
      imageSrc: "/linkedinlogo.webp",
      url: "https://www.linkedin.com/in/HarshJindal/"
    }
  ];

  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="mediaStyle">
      {socialLinks.map((social, index) => (
        <ImageButton
          key={index}
          imageSrc={process.env.PUBLIC_URL + social.imageSrc}
          altText={`${social.name} Logo`}
          onClick={() => handleClick(social.url)}
        />
      ))}
    </div>
  );
};

export default SocialLinks; 
