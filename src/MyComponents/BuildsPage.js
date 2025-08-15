import React from "react";
import "./styles/BuildsPage.css";
import BackgroundAnimation from './BackgroundAnimation';

const BuildsPage = () => {
  // Current projects (ongoing work)
  const currentProjects = [
    {
      id: "9TGB7EphkiMa",
      title: "Warmly AI",
      description: "AI-powered platform for generating high-conversion B2B leads through automated warm introductions"
    }
  ];

  // Latest completed projects
  const latestProjects = [
    {
      id: "fT5h6VGqf2sa",
      title: "Quants Trading Using Machine Learning",
      description: "Developed a reinforcement learning-based trading agent that learns optimal buy/sell decisions to maximize returns on historical market data."
    },
    {
      id: "anMExD1-qmsa",
      title: "AI-Based Fraud Detection System",
      description: "Developed a machine learning model using XGBoost and Python to identify fraudulent transactions with 95% accuracy in real-time."
    },
    {
      id: "NkZbLYc5UZ8a",
      title: "Customer Support Chatbot with NLP",
      description: "Built an intelligent chatbot using Transformer-based models to handle customer queries and reduce response time by 40%."
    }
  ];

  // Older builds
  const olderBuilds = [
    {
      id: "cMu2bqR9fJ0a",
      title: "Computer Vision Defect Detection in Manufacturing",
      description: "Implemented a convolutional neural network (CNN) to automatically detect product defects on assembly lines using real-time image data."
    },
    {
      id: "AVWhU_kU328a",
      title: "AI Learning Agent for Portfolio Management",
      description: "Implemented a deep reinforcement learning agent to dynamically allocate assets, maximizing returns while minimizing risk."
    },
    {
      id: "2i2neRzHRmQa",
      title: "Deep Learning Music Genre Classifier",
      description: "Created an audio classification model using CNN and spectrograms to classify music genres with 92% accuracy."
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
