import React from 'react';
import HeroSection from '../../components/sections/HeroSection';
import SolutionsSection from '../../components/sections/SolutionsSection';
import PricingSection from '../../components/sections/PricingSection';
import PortfolioSection from '../../components/sections/PortfolioSection';
import ContactSection from '../../components/sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <SolutionsSection />
      <PricingSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;