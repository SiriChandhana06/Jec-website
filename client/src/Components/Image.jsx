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
    <div className="">
      <div className="overflow-hidden rounded-xl">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-auto rounded-xl"
        />
        <div className=''>
        <button
          onClick={goToPrevSlide}
          className="absolute top-4/5 left-2 transform -translate-y-1/2  pl-72 align-center pb-96 text-black"
        >
          <ChevronLeftIcon className="w-20 h-20" />
        </button>
        </div>

        <div className=''>
        <button
          onClick={goToNextSlide}
          className="absolute top-4/5 right-2 transform -translate-y-1/2 pr-72 align-center pb-96 text-black"
        >
          <ChevronRightIcon className="w-20 h-20" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
