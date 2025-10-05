import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Full-Stack Developer</h1>
            <p className="hero-subtitle">
              Crafting digital experiences with modern technologies and clean code
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-block">
              <div className="code-header">
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                </div>
                <div className="code-line indent">
                  <span className="property">name</span>: <span className="string">'Your Name'</span>,
                </div>
                <div className="code-line indent">
                  <span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'Node.js'</span>],
                </div>
                <div className="code-line indent">
                  <span className="property">passion</span>: <span className="string">'Building amazing apps'</span>
                </div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;