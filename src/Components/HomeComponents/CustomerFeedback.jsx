"use client"
import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';

const feedbacks = [
  {
    "id": "1",
    "name": "Sadia Rahman",
    "profession": "Software Engineer",
    "description": "This platform really helped me stay organized, motivated, and focused on my daily goals. The interface is smooth, easy to navigate, and perfect for busy professionals like me.",
    "image": "https://media.licdn.com/dms/image/v2/D5603AQFD1eW8Jj-lFg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712309096968?e=2147483647&v=beta&t=FB8Xc0lV5bDvGTDgEhULSCtc3WM4_3oC4hCI1G3FJPo"
  },
  {
    "id": "2",
    "name": "Tanvir Hasan",
    "profession": "Fitness Trainer",
    "description": "I found the service extremely reliable, efficient, and helpful in managing daily activities. It saves me time, boosts productivity, and offers features that align perfectly with my lifestyle and routine.",
    "image": "https://i1.rgstatic.net/ii/profile.image/935570373087235-1600068767775_Q512/Tanvir-Hasan-7.jpg"
  },
  {
    "id": "3",
    "name": "Nusrat Jahan",
    "profession": "Dietitian",
    "description": "Amazing support and great features make this platform truly stand out. It's user-friendly, well-designed, and ideal for those who care about quality, convenience, and a seamless experience every day.",
    "image": "https://banglabharati.com/wp-content/uploads/2023/12/Nusrat-Jahan.jpg"
  }
];



const CustomerFeedback = () => {
  const [feedbackShow , setFeedback] = useState(feedbacks[0])

  const handleFeedback = (feedback) => {
      setFeedback(feedback)
  }
  return (
    <section className="px-6 md:px-16 py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">
            Customer <span className="text-[#8B0000]">Feedback</span>
          </h2>
              <div>
                 <p className="text-gray-700 mb-6 text-lg">{feedbackShow?.description}</p>
                   {/* Customer Info */}
                <div className="flex items-center justify-between">
                      <div className='flex items-center gap-4'>
                          <img
                          src={feedbackShow?.image}
                          alt="Customer"
                          className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-[#8B0000] font-bold">{feedbackShow.name}</h4>
                          <p className="text-sm text-gray-600">{feedbackShow?.profession}</p>
                        </div>
                      </div>

                      {/* Dots */}
                      <div className="flex gap-2 mt-6">
                        {
                          feedbacks?.map((feedback) => <button className='cursor-pointer' 
                          onClick={()=> handleFeedback(feedback)}
                          key={feedback?.id}>
                            <FaCircle className={`text-xs border border-[#8B0000] rounded-full ${feedbackShow.id === feedback.id ? "text-[#8B0000]" :"text-gray-50"}`} />
                          </button>)
                        }
                      </div>
                </div>
              </div>
          </div>



        {/* Right Side Image */}
        <div className="relative">
          <div className="absolute bottom-0 right-0 w-72 md:w-84 h-80 bg-[#8B0000] hidden md:block"></div>
          <img
            src="./assets/chef.png"
            alt="Chef"
            className="relative z-10 max-w-sm md:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
