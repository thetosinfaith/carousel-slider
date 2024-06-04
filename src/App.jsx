import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [slider, setNewSlider] = useState(" ");

  const handleSwipe = () => {
    setNewSlider(" "); 
  };

  return (
    <div className="parent-container">
      <div className="inner-container">
      <h1>{slider}</h1>
      <div onClick={handleSwipe}>Swipe</div>
    </div>

    </div>
  );
};

export default App;
