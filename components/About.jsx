import React from 'react';
import ImageSlider from './ImageSlider';

const About = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">About SXC Science Fest</h1>
        <p className="page-subtitle">
          Discover the story behind Nepal's premier student science competition
        </p>
      </div>

      <section className="about-section">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Our Mission</h2>
            <p>
              The <span className="highlight">SXC Science Fest</span> is Nepal's premium inter-school science competition, designed to ignite curiosity, foster innovation, and celebrate the brilliant minds of tomorrow. Since our inception, we have been committed to providing a platform where students can showcase their scientific knowledge, creativity, and problem-solving skills.
            </p>
            <p>
              Our festival brings together the brightest young minds from across Nepal, creating an environment where <span className="highlight">collaboration meets competition</span>, and where learning transcends traditional classroom boundaries.
            </p>
          </div>
          <div className="about-text">
            <h2 className="section-title">What We Offer</h2>
            <p>
              Through a series of carefully designed challenges, experiments, and presentations, participants engage with cutting-edge scientific concepts while developing critical thinking and teamwork skills. Our event features multiple competition rounds, each designed to test different aspects of scientific understanding.
            </p>
            <p>
              From <span className="highlight">theoretical knowledge</span> to practical applications, from individual brilliance to team collaboration, the SXC Science Fest offers a comprehensive scientific experience that prepares students for future academic and professional success.
            </p>
          </div>
        </div>
      </section>

      <ImageSlider />

    </div>
  );
};

export default About;