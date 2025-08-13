import React from "react";
import "./styles/BuildsPage.css";
import BackgroundAnimation from './BackgroundAnimation';

const BuildsPage = () => {
  // Current projects (ongoing work)
  const currentProjects = [
    {
      id: "9TGB7EphkiMa",
      title: "AI Sports Scout",
      description: "Computer vision platform for analyzing sports players and performance metrics"
    }
  ];

  // Latest completed projects
  const latestProjects = [
    {
      id: "fT5h6VGqf2sa",
      title: "Crypto Smart Contract Screener",
      description: "Built algorithms to screen smart contracts for potential exploits and vulnerabilities in 24 hours for HackIllinois 2025"
    },
    {
      id: "anMExD1-qmsa",
      title: "Real-Time Network Congestion Prediction",
      description: "Used GraphQL, Trained Gradient Boosted Trees model to predict real-time network congestion on Solana in 24 hours for HackNYU 2025"
    },
    {
      id: "NkZbLYc5UZ8a",
      title: "Microloans Platform using Smart Contracts",
      description: "Created a microloans platform using smart contracts to offer lower interest rates to borrowers"
    }
  ];

  // Older builds
  const olderBuilds = [
    {
      id: "cMu2bqR9fJ0a",
      title: "App for Woman's Safety",
      description: "Used Google Maps API to create SSP routes, CV for real time object detection, and GPS to track user location"
    },
    {
      id: "AVWhU_kU328a",
      title: "Telegram Bot to Schedule Meetings",
      description: "Integrated Telegram bot on Monday.com's Platform to schedule meetings and messages"
    },
    {
      id: "2i2neRzHRmQa",
      title: "Smart Vehicle for Rough Terrain",
      description: "Created a smart vehicle for rough terrain using Arduino and Raspberry Pi"
    }
  ];

  const YouTubeEmbed = ({ videoId }) => (
    <div className="video-container">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );

  return (
    <div className="builds-page">
      <BackgroundAnimation />
      <div className="page-header">
        <h1 className="page-title">MY BUILDS</h1>
        <div className="header-underline"></div>
      </div>
      <div className="builds-container">
        <section className="current-projects">
          <h2 className="section-title">ONGOING WORK</h2>
          <div className="featured-project">
            {currentProjects.map((project) => (
              <div key={project.id} className="featured-video-item">
                <YouTubeEmbed videoId={project.id} />
                <div className="video-info">
                  <h3 className="video-title">{project.title}</h3>
                  <p className="video-description">{project.description}</p>
                  <div className="ongoing-badge">Ongoing</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="latest-projects">
          <h2 className="section-title">LATEST PROJECTS</h2>
          <div className="videos-grid">
            {latestProjects.map((project) => (
              <div key={project.id} className="video-item latest-item">
                <YouTubeEmbed videoId={project.id} />
                <div className="video-info">
                  <h3 className="video-title">{project.title}</h3>
                  <p className="video-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="older-builds">
          <h2 className="section-title">OLDER BUILDS</h2>
          <div className="videos-grid">
            {olderBuilds.map((build) => (
              <div key={build.id} className="video-item">
                <YouTubeEmbed videoId={build.id} />
                <div className="video-info">
                  <h3 className="video-title">{build.title}</h3>
                  <p className="video-description">{build.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BuildsPage; 