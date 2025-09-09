// In Components/HeroSection.jsx

import React, { useState, useEffect, useCallback } from 'react';
import HeroSlider from './HeroSlider.jsx';
import './HeroSection.css';

// The slide data now lives here
const slides = [
  { url: '/assets/slide1.jpg', title: 'Telangana Library Office' },
  { url: '/assets/slide2.jpg', title: 'Chairman' },
  { url: '/assets/slide3.jpg', title: 'Mission 2047' },
  { url: '/assets/slide4.jpg', title: 'Telangana Talli' },
];

function HeroSection() {
  // All the slideshow state and functions are now in this component
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 6000);
    return () => clearTimeout(timer);
  }, [currentIndex, goToNext]);

  return (
    <div className="hero-section-wrapper">
      <div className="slider-column">
        {/* We pass the necessary info down to the slider as props */}
        <HeroSlider 
          slide={slides[currentIndex]} 
          onPrev={goToPrevious} 
          onNext={goToNext} 
        />
        
        {/* The dots are now here, in the parent component */}
        <div className="dots-container-external">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`dot ${currentIndex === slideIndex ? 'active' : ''}`}
              onClick={() => goToSlide(slideIndex)}
            >
              &#9679;
            </div>
          ))}
        </div>
      </div>

      {/* The content column remains the same */}
    {/* Replace the empty content-column with this one */}
<div className="content-column">
  {/* Profile 1 */}
 

  {/* Profile 2 */}
  <div className="profile-card">
    <img src="/assets/revanth-reddy.jpg" alt="A. Revanth Reddy" className="profile-image" />
    <div className="profile-text">
      <p className="profile-name">Sri A. Revanth Reddy</p>
      <p className="profile-title">Chief Minister of Telangana</p>
    </div>
  </div>

  {/* Profile 3 */}
  <div className="profile-card">
    <img src="/assets/dr-riyaz.jpg" alt="Dr. Riyaz" className="profile-image" />
    <div className="profile-text">
      <p className="profile-name">Dr. Riyaz</p>
      <p className="profile-title">Chairman, Telangana State Libraries</p>
    </div>
  </div>
</div>
    </div>
  );
}

export default HeroSection;