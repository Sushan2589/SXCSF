import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg',
      title: 'Hands-on Experiments',
      description: 'Students engage in practical laboratory experiments, applying theoretical knowledge to real-world scenarios.'
    },
    {
      image: 'https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg',
      title: 'Team Collaboration',
      description: 'Participants work together to solve complex scientific challenges, fostering teamwork and communication skills.'
    },
    {
      image: 'https://i.ibb.co/FbxRHrqd/image.png',
      title: 'Scientific Presentations',
      description: 'Students present their research findings and innovative solutions to panels of expert judges.'
    },
    {
      image: 'https://images.pexels.com/photos/8471832/pexels-photo-8471832.jpeg',
      title: 'Recognition & Awards',
      description: 'Outstanding participants receive recognition for their achievements and contributions to science.'
    },
    {
      image: 'https://i.ibb.co/ksQzVVpS/sdm.png',
      title: 'Innovation Showcase',
      description: 'Students display their creative projects and innovative solutions to scientific problems.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slider-section">
      <h2 className="section-title" style={{textAlign: 'center', marginBottom: '2rem'}}>Event Highlights</h2>
      <div className="slider-container">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="slide-overlay">
                <h3 className="slide-title">{slide.title}</h3>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="slider-nav prev" onClick={prevSlide}>&#10094;</button>
        <button className="slider-nav next" onClick={nextSlide}>&#10095;</button>
      </div>
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;