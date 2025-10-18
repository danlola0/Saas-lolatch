import React from 'react';
import { AppWindow, Globe, Smartphone, Video, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <AppWindow className="w-8 h-8 text-blue-600" />,
    title: 'Développement d’applications sur mesure',
    description: 'Applications adaptées (gestion de stock, pharmacie, etc.), solutions SaaS et locales, personnalisation complète.',
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: 'Création de sites web',
    description: 'Sites vitrines modernes, e-commerce sécurisé et intégration des paiements en ligne.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: 'Applications mobiles (Android & iOS)',
    description: 'Développement natif ou hybride, applications fluides et optimisées, publication sur les stores.',
  },
  {
    icon: <Video className="w-8 h-8 text-blue-600" />,
    title: 'Installation de caméras de surveillance',
    description: 'Vente et installation professionnelle, suivi en temps réel via smartphone, maintenance et assistance.',
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    title: 'Formations professionnelles',
    description: 'Développement web/mobile, marketing digital, sécurité informatique. Disponibles en présentiel et en ligne.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Nos Services</h2>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Des solutions pour chaque ambition
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
            Chez DanlolaTech Service, nous vous accompagnons avec des solutions technologiques complètes : logiciels sur mesure, sécurité, applications mobiles et formations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-md mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="/devis" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Demander un devis
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
