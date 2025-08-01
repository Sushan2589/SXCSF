"use client"
import React from "react";
import ImageSlider from "./ImageSlider";
import HomeImageSlider from "./HomeImageSlider";
import { useState } from "react";


const Home = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleRegister = () => {
    alert("Registration portal will open soon! Stay tuned for updates.");
  };

  return (
    <section className="hero">
       
      
      <HomeImageSlider>
      <div className="hero-container">
        <h1 className="hero-title">Welcome to SXCSF</h1>
        <p className="hero-subtitle">
          Dive into the world of <span className="highlight">innovation</span>,
          discovery, and student-powered creativity.
        </p>

        <div className="button-group">
          <button className="btn-primary" onClick={handleRegister}>
            Register Your Team
          </button>

          <a href="/results">
            <button className="btn-secondary">Event Day Results</button>
          </a>
        </div>
      </div>
      </HomeImageSlider>
      
    </section>
  );
};

export default Home;
