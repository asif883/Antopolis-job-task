"use client"
import React from 'react';
import '../../CSS/animation.css';

const clients = [
  { id: 1, img: '/assets/1.png', alt: 'client' },
  { id: 2, img: '/assets/2.png', alt: 'client' },
  { id: 3, img: '/assets/3.png', alt: 'client' },
  { id: 4, img: '/assets/4.png', alt: 'client' },
  { id: 5, img: '/assets/5.png', alt: 'client' },
  { id: 6, img: '/assets/6.png', alt: 'client' },
];

const Clients = () => {
  return (
    <div className="my-16 md:my-24 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-[#8B0000] font-semibold">Client & partners</p>
        <h1 className="text-3xl font-bold">We Work With The Best People</h1>
      </div>

      <div className="overflow-hidden whitespace-nowrap py-4">
        <div className="inline-block marquee">
          {clients.map(({ img, alt }, index) => (
            <img
              key={index}
              src={img}
              alt={alt}
              className="inline-block h-32 w-32 mx-4 rounded-full object-cover"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
