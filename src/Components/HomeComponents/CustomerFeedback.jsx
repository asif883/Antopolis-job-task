import React from 'react';
import { FaCircle } from 'react-icons/fa';

const CustomerFeedback = () => {
  return (
    <section className="bg-white px-6 py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4">
            Customer <span className="text-[#8B0000]">Feedback</span>
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Juicy and satisfying. The patties were cooked to perfection, cheese melted like a dream, and the toasted brioche bun held it all together. Great value for a casual bite.
          </p>

          {/* Customer Info */}
          <div className="flex items-center gap-4">
            <img
              src="./assets/user.png"
              alt="Customer"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="text-[#8B0000] font-bold">Tayyab Iqbal</h4>
              <p className="text-sm text-gray-600">Developer</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            <FaCircle className="text-[#8B0000] text-xs" />
            <FaCircle className="text-gray-300 text-xs" />
            <FaCircle className="text-gray-300 text-xs" />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B0000] clip-path-diagonal hidden md:block"></div>
          <img
            src="./assets/chef.png"
            alt="Chef"
            className="relative z-10 max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
