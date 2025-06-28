import React from 'react';
import { FaStar } from 'react-icons/fa';

const FoodCard = ({ name, category, image }) => {
  return (
    <div className="overflow-hidden shadow-md transition duration-300 bg-white">
      <img
        src={image}
        alt={name}
        className="w-full h-32 md:h-60 object-cover"
      />
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-sm md:text-lg font-bold text-gray-900">{name}</h2>
          <span className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <div className='flex items-center justify-between mt-4'>          
            <div className="flex gap-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} size={16} />
            ))}
            </div>

            <p className="text-2xl font-bold text-gray-900">$230</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
