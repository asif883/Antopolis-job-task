"use client"
import React from 'react';
import { FaPinterestP, FaTwitter, FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa';
import { MdEmail, MdAccessTime, MdLocationOn, MdPhone } from 'react-icons/md';

const images = [
    {
        id: 1,
        src:"./assets/footer-image-1.jpg"
    },
    {
        id: 2,
        src:"./assets/footer-image-2.jpeg"
    },
    {
        id: 3,
        src:"./assets/footer-image-3.jpg"
    },
    {
        id: 4,
        src:"./assets/footer-image-4.webp"
    },
    {
        id: 5,
        src:"./assets/footer-image-5.jpg"
    },
    {
        id: 6,
        src:"./assets/footer-image-6.webp"
    },
]

const Footer = () => {
  return (
    <footer className="bg-[#8B0008] text-white pt-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">RESTAURANT</h2>
          <p className="mb-4">
            Subscribe our newsletter and get discount 25% off
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-l-md text-black w-full bg-white"
            />
            <button className="bg-[#A52A2A] px-4 py-2 rounded-r-md">
              ➤
            </button>
          </div>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaPinterestP />
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact us</h2>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <MdLocationOn className="mt-1" />
              3517 W. Gray St. Utica, Pennsylvania 57867
            </p>
            <p className="flex items-center gap-2">
              <MdPhone /> (480) 555-0103
            </p>
            <p className="flex items-center gap-2">
              <MdEmail /> M.Alyaqout@4house.Co
            </p>
            <p className="flex items-center gap-2">
              <MdAccessTime /> Sun - Sat / 10:00 AM - 8:00 PM
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-bold mb-4">Links</h2>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Contact Us</li>
            <li>Our Menu</li>
            <li>Team</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-xl font-bold mb-4">Instagram Gallery</h2>
          <div className="grid grid-cols-3 gap-2">
            {images.map((image, i) => (
              <div
                key={i}
                className="w-20 h-20 bg-white/10 rounded overflow-hidden"
              >
                <img
                  src={image?.src}
                  alt={`Insta ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 mt-12 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-white/80">
        <p>Copyright © 2025. All rights reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <p>Privacy Policy</p>
          <p>Term of Use</p>
          <p>Partner</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
