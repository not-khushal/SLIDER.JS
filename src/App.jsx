import React, { useRef } from 'react';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
import Slide7 from './components/Slide7';
import Slide8 from './components/Slide8';
import Slide9 from './components/Slide9';

const App = () => {
  const sliderRef = useRef(null);

  const handleScroll = (e) => {
    // Scroll horizontally by adjusting the scrollLeft value of the container
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += e.deltaY; // deltaY captures the vertical scroll, which we use to move horizontally
    }
  };

  return (
    <div 
      className="w-full h-screen overflow-hidden" 
      onWheel={handleScroll} 
      ref={sliderRef}
    >
      <div className="flex">
        <div className="min-w-screen w-screen flex-shrink-0">
          <Slide1 />
        </div>
        <div className="min-w-screen w-screen flex-shrink-0">
          <Slide2 />
        </div>
        <div className="min-w-screen w-screen flex-shrink-0">
          <Slide3 />
        </div>
        <div className="min-w-screen w-screen flex-shrink-0">
          <Slide4 />
        </div>
        <div className="min-w-screen w-screen flex-shrink-0">
          <Slide5 />
        </div>
        <div className="min-w-screen w-screen flex-shrink-0">
          <Slide6 />
        </div>
        <div className="min-w-screen w-screen flex-shrink-0">
          <Slide7 />
        </div>
        <div className="min-w-screen w-screen flex-shrink-0">
          <Slide8 />
        </div>
        <div className="min-w-screen w-screen flex-shrink-0">
          <Slide9 />
        </div>
      </div>
    </div>
  );
};

export default App;
