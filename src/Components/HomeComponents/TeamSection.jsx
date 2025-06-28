'use client';
import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Mark Henry',
    role: 'Owner',
    image: '/assets/henry.jpg',
  },
  {
    id: 2,
    name: 'Lucky Helen',
    role: 'Chef',
    image: '/assets/henry.jpg',
  },
  {
    id: 3,
    name: 'Moon Henry',
    role: 'Founder',
    image: '/assets/henry.jpg',
  },
  {
    id: 4,
    name: 'Tom Monrow',
    role: 'Specialist',
    image: '/assets/henry.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="relative mb-16">
      <div
        className="py-24 text-white text-center relative"
        style={{ backgroundImage: 'url("/assets/bg-team.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#AD1519] opacity-80 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Team Member</h2>
          <p className="text-base text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Varius sed pharetra dictum neque massa congue
          </p>
        </div>
      </div>

      {/* Team Cards */}
      <div className="-mt-12 max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 z-10 relative">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white text-black shadow-md"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
