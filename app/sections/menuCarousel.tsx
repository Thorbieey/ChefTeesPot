"use client";
import React, { useEffect, useState } from 'react'
import Image from "next/image";

const MenuCarousel = ({images}: { images: ImageProps[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
        clearInterval(interval);
    console.log(currentIndex)
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };



  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-black/90">
      {/* Flex container to keep all slides in a single row */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => {
          const scale = "scale-100 opacity-60";
          const object = image.flyer ? "object-contain" : "object-cover";
          return (
            <div
              key={index}
              className={`flex-shrink-0 w-full transition-all duration-500 ease-in-out ${scale}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={500}
                className={`w-full h-96 ${object} rounded-lg`}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 p-1 md:p-2 bg-white rounded-full shadow-md -translate-y-1/2"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 p-1 md:p-2 bg-white rounded-full shadow-md -translate-y-1/2"
      >
        ▶
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  )
}

interface ImageProps {
  src: string;
  alt: string;
  flyer?: boolean;
}
export default MenuCarousel
