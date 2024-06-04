import React, { useState } from 'react';
import Slider from 'react-slick';
import './index.css';
import image1 from '../public/assets/Beauty Tuesday.jpg';
import image2 from '../public/assets/Brita Water.jpg';
import image3 from '../public/assets/Exclusive Products On Jumia.jpg';
import image4 from '../public/assets/Flash Sales.jpg';
import image5 from '../public/assets/Jumia Shopping Festival.jpg';
import image6 from '../public/assets/JumiaPay Providus Bank.jpg';
import image7 from '../public/assets/MayBelline MakeUp Products.jpg';


const App = () => {
    const [images, setImages] = useState([
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg',
      'image5.jpg',
      'image6.jpg',
      'image7.jpg',
    ]);

  

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
