import React from "react";
import "./styles/ProfileSection.css";
import FloatingSocialIcons from "./FloatingSocialIcons";

import BackgroundAnimation from './BackgroundAnimation';
import Navbar from './Navbar';
import ImageButton from './ImageButton';

const ProfileSection = () => {


  // Gallery images data
  const lifeGallery = [
    {
      title: "Won UST Abhyudaya",
      image: "/ghibils/ust.webp",
    },
    {
      title: "Started Development",
      image: "/ghibils/code.webp",
    },
    {
      title: "Met a doctor",
      image: "/ghibils/dr.webp",
    },
    {
      title: "Jindal Marketing",
      image: "/ghibils/jm.webp",
    },
    {
      title: "Dinner with family",
      image: "/ghibils/dine.webp",
    },
    {
      title: "Navratri",
      image: "/ghibils/yel.webp",
    },
    {
      title: "Mahakumbh",
      image: "/ghibils/mk.webp",
    },
    {
      title: "Gym",
      image: "/ghibils/gym.webp",
    },
  ];

  // Social media profiles
  const socialProfiles = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/harshjindal/",
      icon: "/linkedinlogo.webp"
    },
    {
      platform: "GitHub",
      url: "https://github.com/harshjindall",
      icon: "/githublogo.webp"
    },
    {
      platform: "Youtube",
      url: "https://youtube.com/harshjindall",
      icon: "/youtubelogo.webp"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/harshjindall",
      icon: "/instagramlogo.webp"
    }
  ];

  return (
    <div className="background">
      <BackgroundAnimation />
      <div className="profile-container">
        <div className="aboutMe" id="about">
          <img
            className="avatar"
            src={process.env.PUBLIC_URL + "/harshghibil.webp"}
            alt="Harsh Jindal Profile"
          />
          <div className="profile-content">
            <h1 className="spaceStyleHeading">HARSH JINDAL</h1>
            <h2 className="spaceStyleSubheading">
              CSE Grad @ Nagpur University
            </h2>
            <h2 className="spaceStyleSubheading">
              Trader / Engineer / Builder
            </h2>
            <p className="spaceStyleText"> 
              22 y/o Trader & SWE working on building the next gen AI startup. Currently working @ Jindal Marketing. <span className="subtle-emphasis">I am leveraging code and data to drive trading strategies. 3x University-Level Competition Winner. Passionate about algorithmic trading, predictive modeling, AI systems, and startups. Trading enthusiast with eyes on launching my own quants firm. Always building, always learning.</span>
            </p>
          </div>
        </div>
        
        <div className="featured-section" id="builds">
          <h2 className="featured-title-header">LIFE UPDATES</h2>
          <div className="life-gallery">
            {lifeGallery.map((item, index) => (
              <div className="gallery-item" key={index}>
                <img
                  src={process.env.PUBLIC_URL + item.image}
                  alt={item.title}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
