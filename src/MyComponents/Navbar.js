import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  const handleGithub = () => {
    window.open('https://github.com/HarshJindall', '_blank');
  };
  const handleYoutube = () => {
    window.open('https://www.youtube.com/@HarshJindall', '_blank');
  };

  const handleDevpost = () => {
    window.open('https://devpost.com/harshjindal', '_blank');
  }
  const handleLinkedin = () => {
    window.open('https://www.linkedin.com/in/HarshJindal/', '_blank');
  }
  const handleInstagram = () => {
    window.open('https://www.instagram.com/HarshJindall/', '_blank');
  }

  return (
    <nav className="navbar" style={{ zIndex: 9999 }}>
      <div className="navbar-container">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink 
              to="/"
              className={({ isActive }) => isActive && window.location.pathname === "/" ? "active" : ""}
            >
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/experience"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/builds"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Builds
            </NavLink>
          </li>
    
          <li className="nav-item">
            <NavLink 
              to="/contact"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Get in Touch
            </NavLink>
          </li>
        </ul>
        {/* Social Media Section */}
        <div className="social-buttons-container">
          <button className="social-button" onClick={handleGithub}>
            <img src={process.env.PUBLIC_URL + "/githublogo.png"} alt="GitHub" />
          </button>
          <button className="social-button" onClick={handleDevpost}>
            <img src={process.env.PUBLIC_URL + "/devpostlogo.png"} alt="Devpost" />
          </button>
          <button className="social-button" onClick={handleYoutube}>
            <img src={process.env.PUBLIC_URL + "/youtubelogo.png"} alt="YouTube" />
          </button>
          <button className="social-button" onClick={handleInstagram}>
            <img src={process.env.PUBLIC_URL + "/instagramlogo.png"} alt="Instagram" />
          </button>
          <button className="social-button" onClick={handleLinkedin}>
            <img src={process.env.PUBLIC_URL + "/linkedinlogo.png"} alt="LinkedIn" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 