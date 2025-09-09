// In Components/HeroSlider.jsx

import React from 'react';
import './HeroSlider.css';

// This component is now much "dumber". It just displays what it's told.
function HeroSlider({ slide, onPrev, onNext }) {
  return (
    <div className="slider-container">
      {/* Left Arrow */}
      <div className="arrow left-arrow" onClick={onPrev}>
        &#10094;
      </div>
      {/* Right Arrow */}
      <div className="arrow right-arrow" onClick={onNext}>
        &#10095;
      </div>

      {/* The Image Slide */}
      <div
        className="slide"
        style={{ backgroundImage: `url(${slide.url})` }}
      >
        <div className="slide-title">{slide.title}</div>
      </div>
      
      {/* The dots have been removed from here */}
    </div>
  );
}

export default HeroSlider;