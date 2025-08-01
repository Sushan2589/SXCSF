"use client"
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import About from '@/components/About';
import Footer from '@/components/Footer';
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={navigateToPage} />
      <main className="main-content">
        {currentPage === 'home' && <Home onNavigate={navigateToPage} />}
        {currentPage === 'about' && <About />}
      </main>
      <Footer />
    </div>
  );
}

export default App;