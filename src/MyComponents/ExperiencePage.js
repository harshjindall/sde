import React from 'react';
import './styles/ExperiencePage.css';
import BackgroundAnimation from './BackgroundAnimation';
import Navbar from './Navbar';
import './styles/Main.css';

const ExperiencePage = () => {
  
  return (
    <div className="background">
      <BackgroundAnimation />
      <Navbar />
      
      <div className="page-content">
        <div className="header-container">
          <h1 className="hire-me-header">I am willing to work!</h1>
        </div>
      
        <div className="resume-container">
          <div className="resume-header">
            <h1 className="resume-name">HARSH JINDAL</h1>
            <div className="resume-contact">
              <span>harshjindxl@gmail.com</span>
              <span>|</span>
              <a href="https://linkedin.com/in/harshjindal" target="_blank" rel="noopener noreferrer">linkedin.com/in/harshjindal</a>
              <span>|</span>
              <a href="https://github.com/harshjindall" target="_blank" rel="noopener noreferrer">github.com/harshjindall</a>
              <span>|</span>
              <a href="https://sde-sigma.vercel.app" target="_blank" rel="noopener noreferrer">https://sde-sigma.vercel.app</a>
            </div>
          </div>
          
          <section className="resume-section">
            <h2>Education</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Nagpur University</h3>
                <span className="resume-location">Nagpur</span>
              </div>
              <div className="resume-item-subheader">
                <p>Bachelors of Engineering with a major in Computer Science, and Minor in Finance</p>
                <span className="resume-date">Dec. 2021 – March 2025</span>
              </div>
            </div>
          </section>
          
          <section className="resume-section">
            <h2>Work Experience</h2>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <h3>Digital Marketing Executive</h3>
                  <span className="resume-company">Jindal Marketing Agency</span>
                </div>
                <span className="resume-location">Nagpur, India</span>
              </div>
              <div className="resume-item-subheader">
                <span className="resume-date">March. 2025 - Present</span>
              </div>
              <ul className="resume-item-details">
                <li>Spearheaded a multi-channel performance marketing campaign (Google Ads, Meta, and LinkedIn) that boosted qualified lead generation by <strong>65%</strong> within <strong>3 months</strong>.</li>
                <li>Designed and executed SEO and content strategies that improved organic website traffic by <strong>120%</strong>.</li>
              </ul>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <h3>Software Engineer Intern</h3>
                  <span className="resume-company">Stealth AI Startup</span>
                </div>
                <span className="resume-location">San Francisco, USA</span>
              </div>
              <div className="resume-item-subheader">
                <span className="resume-date">Aug. 2025 – Present</span>
              </div>
              <ul className="resume-item-details">
                <li>Developed core backend systems enabling AI-powered warm introductions by mapping trust networks and optimizing connection paths, improving engagement likelihood over traditional cold outreach methods.</li>
                <li>Built and deployed scalable APIs and data pipelines using <strong>Node.js, Python, and PostgreSQL</strong>, reducing response latency by <strong>30%</strong> and supporting seamless integration with third-party platforms.</li>
              </ul>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <h3>Digital Marketing Intern</h3>
                  <span className="resume-company">Lighthouse Info Systems</span>
                </div>
                <span className="resume-location">Nagpur</span>
              </div>
              <div className="resume-item-subheader">
                <span className="resume-date">Dec. 2024 – Mar. 2025</span>
              </div>
              <ul className="resume-item-details">
                <li>Conducted in-depth keyword research, on-page optimization, and technical audits, contributing to a <strong>45%</strong> increase in organic traffic and improved SERP rankings for key client websites.</li>
                <li>Collaborated with content and dev teams to implement structured data, optimize metadata, and improve page speed enhancing overall SEO health scores and boosting crawlability across multiple domains</li>
              </ul>
            </div>
          </section>
          
          <section className="resume-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <h3>Languages:</h3>
                <p>Python, Javascript, Typescript, C/C++</p>
              </div>
              <div className="skill-item">
                <h3>Frameworks:</h3>
                <p>React, Next, Node.js, Flask, FastAPI, CSS</p>
              </div>
              <div className="skill-item">
                <h3>Data Science Libraries:</h3>
                <p>Pandas, SciPy/NumPy, Matplotlib, Scikit-learn, Tensorflow, OCR, OpenCV</p>
              </div>
              
            </div>
          </section>
          
          <section className="resume-section">
            <h2>Competitions</h2>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>1st Place, AI Odyssey 2024 | Python, ML Collaboration, AI Strategy</h3>
                <span className="resume-date">Apr. 2024</span>
              </div>
              <ul className="resume-item-details">
                <li>Secured 1st position at AI Odyssey'24 organized by IEEE CIS & Jarvis GHRCE for developing a winning AI-driven solution.</li>
              </ul>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Ultimate Socio Technocrat Winner, Abhyudaya 2024 | Sustainable Agriculture, Bio-Tech Innovation</h3>
                <span className="resume-date">Sept. 2024</span>
              </div>
              <ul className="resume-item-details">
                <li>Presented an innovative anti-fungal manure concept to combat crop infections while promoting eco-friendly agricultural practices. Won 1st prize among multi-disciplinary teams for practical and scalable design.</li>
              </ul>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>1st Runner Up, Techshastra 2024 | Team Collaboration, Innovation Strategy, Problem-Solving</h3>
                <span className="resume-date">Dec. 2024</span>
              </div>
              <ul className="resume-item-details">
                <li>Developed a comprehensive ideation solution in a high-pressure innovation sprint, placing 2nd out of numerous university-level teams.</li>
              </ul>
            </div>

          </section>
          
          <section className="resume-section">
            <h2>Projects</h2>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Face Traq Attendance System | Python, OpenCV, Face Recognition, Flask</h3>
                <span className="resume-date">Feb. 2024 – Nov. 2024</span>
              </div>
              <ul className="resume-item-details">
                <li>Built a facial recognition-based attendance system using OpenCV and Flask, achieving high detection accuracy and reducing manual attendance time by <strong>75%</strong>.</li>
              </ul>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Warmly AI | Python, GPT-4 API, Node.js, React, Firebase</h3>
                <span className="resume-date">Aug. 2025 – Present</span>
              </div>
              <ul className="resume-item-details">
                <li>Developed a lead-matching platform using GPT-4 for company and persona parsing, Node.js for matchmaking logic, and Firebase for storage, achieving <strong>3×</strong> higher response rates than traditional cold outreach.</li>
              </ul>
            </div>
          </section>
        </div>
        
        
      </div>
    </div>
  );
};

export default ExperiencePage; 
