import React, { useState, useEffect } from 'react';

// Import images from the assets folder
import ImageSlider1 from '../assets/ImageSlider_1.avif';
import ImageSlider2 from '../assets/ImageSlider_2.avif';
import ImageSlider3 from '../assets/ImageSlider_3.avif';
import ImageSlider4 from '../assets/ImageSlider_4.avif';
import ImageSlider5 from '../assets/ImageSlider_5.webp';
import ImageSlider6 from '../assets/ImageSlider_6.webp';
import ImageSlider7 from '../assets/ImageSlider_7.avif';

const ImageSlider = () => {
  // Array of image sources
  const images = [
    ImageSlider1,
    ImageSlider2,
    ImageSlider3,
    ImageSlider4,
    ImageSlider5,
    ImageSlider6,
    ImageSlider7,

    ImageSlider1,
    ImageSlider2,
    ImageSlider3,
    ImageSlider4,
    ImageSlider5,
    ImageSlider6,
    ImageSlider7,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length); // Move by 3 images
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up the interval
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length); // Move by 3 on next click
  };

  return (
    <div className="relative overflow-hidden">
      {/* Image container */}
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${(currentIndex * 100) / 3}%)`, // Move by 33% (3 images) at a time
        }}
      >
        {/* Map through images in groups of 3 */}
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-1/3 mx-2"> {/* Added margin mx-2 */}
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg scale-90" // Ensures clean framing with object-cover and scale to 90%
            />
          </div>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;
