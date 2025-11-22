import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../../components/sections/HeroSection';
import ServicesSection from '../../components/sections/ServicesSection';
import ITServicesSection from '../../components/sections/ITServicesSection';
import SolutionsSection from '../../components/sections/SolutionsSection';
import PortfolioSection from '../../components/sections/PortfolioSection';
import ContactSection from '../../components/sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>LolaTech - Solutions de Gestion SaaS sur Mesure</title>
        <meta name="description" content="Découvrez LolaTech, votre partenaire pour la digitalisation d'entreprise. Nous offrons des solutions SaaS complètes pour la gestion de pharmacie, école, restaurant, et plus encore." />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <ITServicesSection />
      <SolutionsSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;