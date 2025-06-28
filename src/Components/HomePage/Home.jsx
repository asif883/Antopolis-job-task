import React from 'react';
import HeroSection from '../HomeComponents/HeroSection';
import BestSellingDishes from '../HomeComponents/BestSellingDishes';
import Footer from '../Footer';
import CustomerFeedback from '../HomeComponents/CustomerFeedback';
import TeamSection from '../HomeComponents/TeamSection';
import Clients from '../HomeComponents/Clients';

const HomePage = () => {
    return (
        <div>
          <HeroSection/>
          <BestSellingDishes/>
          <CustomerFeedback/>
          <TeamSection/>
          <Clients/>
          <Footer/>
        </div>
    );
};

export default HomePage;