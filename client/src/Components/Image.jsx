import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  console.log("Current Index:", currentIndex);

  return (
      <div className="mx-10 flex-auto md:mx-40 ">
       
        <div className=''>
        <button
        //   style={{marginTop:'1200px'}}
          onClick={goToPrevSlide}
          className="absolute top-3/5 left-4 pt-64 transform -translate-y-1/2  align-center text-black md:pl-16 "
        >
          <ChevronLeftIcon className="w-10 h-10 md:w-24 h-24 " />
        </button>
        </div>

        <div className='overflow-hidden rounded-xl'>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-auto rounded-xl"
        />
        </div>


        <div className=''>
        <button
        //   style={{marginTop:'1200px'}}
          onClick={goToNextSlide}
          className="absolute top-3/5 right-4 pb-48 transform -translate-y-1/2 align-center text-black md:pr-16 "
        >
          <ChevronRightIcon className="w-10 h-10 md:w-24 h-24" />
        </button>
        </div>
    </div>
  );
};
 

export default ImageSlider;
