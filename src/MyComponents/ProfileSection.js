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
      title: "Won Solana Track at HackNYU 2025",
      image: "/ghibils/ghibli_hacknyu.png",
    },
    {
      title: "Crypto Fund",
      image: "/ghibils/yuv_fund.png",
    },
    {
      title: "MOVED TO CHICAGO",
      image: "/ghibils/yuvchicagoghibil.png",
    },
    {
      title: "SWE @ BRIGHTHIVE",
      image: "/ghibils/brighthive_ghibli.png",
    },
    {
      title: "HACKATHON WINNER",
      image: "/ghibils/ghibili_indian.jpg",
    },
    {
      title: "HACKATHON WINNER",
      image: "/ghibils/ghibili.jpg",
    },
    {
      title: "HACKATHON WINNER",
      image: "/ghibils/carcrash.jpg",
    },
    {
      title: "HACKATHON WINNER",
      image: "/ghibils/pushups.jpg",
    },
  ];

  // Social media profiles
  const socialProfiles = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/harshjindal/",
      icon: "/linkedinlogo.png"
    },
    {
      platform: "GitHub",
      url: "https://github.com/harshjindall",
      icon: "/githublogo.png"
    },
    {
      platform: "Twitter",
      url: "https://y/harshjindall",
      icon: "/youtubelogo.png"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/harshjindall",
      icon: "/instagramlogo.png"
    }
  ];

  return (
    <div className="background">
      <BackgroundAnimation />
      <div className="profile-container">
        <div className="aboutMe" id="about">
          <img
            className="avatar"
            src={process.env.PUBLIC_URL + "/yuvghibil.png"}
            alt="Harsh Jindal Profile"
          />
          <div className="profile-content">
            <h1 className="spaceStyleHeading">HARSH JINDAL</h1>
            <h2 className="spaceStyleSubheading">
              EECS & Maths Junior @ National University of Singapore
            </h2>
            <h2 className="spaceStyleSubheading">
              Builder / Influencer / Trader
            </h2>
            <p className="spaceStyleText"> 
              20 y/o builder/quant working out of Chicago @ BrightHive (Series A AI Startup). Working on problems that interest me. <span className="subtle-emphasis">Handled $20M AUM in FX market at hedge funds. Received VC funding to put AI into sports scouting. 5x Hackathon Winner. Decoding Social Media Virality. Big-time crypto investor starting my own crypto fund.</span>
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