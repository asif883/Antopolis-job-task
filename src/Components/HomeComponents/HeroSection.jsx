'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';

const imageOptions = [
  {
    id: 1,
    src: './assets/img-1.webp',
    bg: '#880808',
  },
  {
    id: 2,
    src: './assets/img-2.jpeg',
    bg: '#0A4669',
  },
  {
    id: 3,
    src: './assets/img-3.png',
    bg: '#953553',
  },
  {
    id: 4,
    src: './assets/img-4.jpeg',
    bg: '#006666',
  },
];

const HeroSection = () => {
  const [selected, setSelected] = useState(imageOptions[0]);
  const [imageKey, setImageKey] = useState(0); // for triggering animation

  const handleImageClick = (item) => {
    setSelected(item);
    setImageKey(prev => prev + 1); // change key to trigger re-render + animation
  };

  return (
    <div
      className="text-white px-10 py-10 relative overflow-hidden min-h-screen transition-all duration-500"
      style={{ backgroundColor: selected.bg }}
    >
      <div className=''>
        <Navbar />
      </div>

      <div className="flex gap-20 sm:gap-0 flex-col md:flex-row items-center justify-between pt-10 md:pt-28">
        {/* Left Section */}
        <div className="z-10 max-w-lg text-white">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">BREAKFAST</h1>
          <p className="text-md mb-6">
            Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet.
          </p>

          {/* Mini Image Buttons */}
          <div className="flex space-x-4">
            {imageOptions.map((item) => (
              <button
                key={item.id}
                onClick={() => handleImageClick(item)}
                className={`w-15 md:w-28 h-15 md:h-28 rounded-full overflow-hidden border-4 transition-all duration-300 cursor-pointer ${
                  selected.id === item.id ? 'border-white' : 'border-transparent'
                }`}
              >
                <img
                  src={item.src}
                  alt={`breakfast-${item.id}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Image with Animation */}
        <div className="z-10">
          <AnimatePresence mode="wait">
            <motion.img
              key={imageKey}
              src={selected.src}
              alt="Selected breakfast"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4 , ease: 'easeOut'}}
              className="w-[270px] md:w-[420px] h-[250px] md:h-[400px] object-cover rounded-full"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Background Circles */}
      <div className="absolute left-[-150px] top-[-100px] w-[450px] md:w-[700px] h-[450px] md:h-[700px] bg-white opacity-10 rounded-full z-0"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white opacity-10 rounded-full z-0"></div>
    </div>
  );
};

export default HeroSection;
