import React from 'react';
import '../styles/About.css';
import profileImage from './profile.jpeg';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a love for creating efficient, 
              scalable web applications. My journey in web development started with curiosity 
              and has evolved into a career focused on building meaningful digital experiences.
            </p>
            <p>
              I specialize in modern JavaScript frameworks and have experience across the 
              entire development stack. I'm always eager to learn new technologies and 
              tackle challenging problems.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>15+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>6+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={profileImage} alt="Your Name" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;