import React from 'react';
import HeroSection from '../../components/sections/HeroSection';
import ServicesSection from '../../components/sections/ServicesSection';
import SolutionsSection from '../../components/sections/SolutionsSection';
import PortfolioSection from '../../components/sections/PortfolioSection';
import ContactSection from '../../components/sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;