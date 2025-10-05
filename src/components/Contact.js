import React from 'react';
import '../styles/Contact.css';

const Contact = () => {

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:i.ekene212@outlook.com">i.ekene212@outlook.com</a></p>
                </div>
              </div>
              <div className="contact-method">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:07063349577">07063349577</a></p>
                </div>
              </div>
              <div className="contact-method">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Nigeria</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/hrh104" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ekenedirichukwu-innocent-a4525a352/" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/tonkrypt" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <iframe 
              src="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__iLuP2NUNEVNSVNZV05UUzM4OFhYNUcxQkUyTERMRy4u&embed=true" 
              width="100%" 
              height="500" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="Contact Form"
              style={{border: 'none', maxWidth: '100%', maxHeight: '100vh'}}
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;