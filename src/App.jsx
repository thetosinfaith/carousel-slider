import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [images, setImages] = useState([
    'src/images/Beauty Tuesday.jpg',
    'src/images/Brita Water.jpg',
    'src/images/Flash Sales.jpg',
    'src/images/Jumia Shopping Festival.jpg',
    'src/images/JumiaPay Providus Bank.jpg',
    'src/images/MayBelline MakeUp Products.jpg',
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  console.log("Current image path:", images[currentImageIndex]);

  return (
    <div className="inner-container">
      <div className="slider-container">
        <button onClick={handlePrev} className="prev-button">Previous</button>
        <img 
          src={images[currentImageIndex]} 
          alt={`Slide ${currentImageIndex + 1}`} 
          className="slider-image" 
        />
        <button onClick={handleNext} className="next-button">Next</button>
      </div>
    </div>
  );
};

export default App;
