import React from 'react';

const Navbar = ({ currentPage, onNavigate }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-section" onClick={() => onNavigate('home')}>
          <div className="logo">⚛️</div>
          <h1 className="site-title">SXC Science Fest</h1>
        </div>
        <div className="nav-links">
          <div 
            className={`nav-box ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
           Home
          </div>
          <div 
            className={`nav-box ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => onNavigate('about')}
          >
           About
          </div>
          <div className="nav-box">
            <a href="/results">Results</a>
          </div>
          <div className="nav-box">
            <a href="#register">Register</a> 
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;