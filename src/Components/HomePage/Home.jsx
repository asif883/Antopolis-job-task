import React from 'react';
import HeroSection from '../HomeComponents/HeroSection';
import BestSellingDishes from '../HomeComponents/BestSellingDishes';
import Footer from '../Footer';
import CustomerFeedback from '../HomeComponents/CustomerFeedback';

const HomePage = () => {
    return (
        <div>
          <HeroSection/>
          <BestSellingDishes/>
          <CustomerFeedback/>
          <Footer/>
        </div>
    );
};

export default HomePage;