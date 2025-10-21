import React from 'react';
import { Link } from 'react-router-dom';
import { Check, FlaskConical, Crown, Wrench, MessageSquare } from 'lucide-react';

// Composant pour une carte de tarif individuelle
const PlanCard = ({ icon: Icon, title, description, price, actionText, to, features, isFeatured }) => (
  <div className={`relative bg-white rounded-2xl p-8 flex flex-col transition-transform transform hover:-translate-y-2 duration-300 ${isFeatured ? 'shadow-2xl border-2 border-blue-500' : 'shadow-lg'}`}>
    {isFeatured && (
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
          Le plus populaire
        </span>
      </div>
    )}
    
    <div className="flex-grow">
      <div className="flex items-center gap-4 mb-4">
        <Icon className={`w-10 h-10 ${isFeatured ? 'text-blue-600' : 'text-gray-700'}`} />
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6 h-16">{description}</p>
      
      <div className="mb-8">
        <p className="text-4xl font-bold text-gray-900">
          {price}
          {title === 'Pro' && <span className="text-lg font-normal text-gray-500">/mois</span>}
        </p>
      </div>

      <ul className="space-y-3 text-gray-700 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <Link
      to={to}
      className={`w-full text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
        isFeatured
          ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {actionText}
    </Link>
  </div>
);

const PricingPage: React.FC = () => {
  const plans = [
    {
      icon: FlaskConical,
      title: 'Découverte',
      description: 'Idéal pour explorer nos fonctionnalités avec une version démo gratuite.',
      price: 'Gratuit',
      actionText: 'Essayer maintenant',
      to: '/register',
      features: ['1 App Démo', 'Fonctionnalités limitées', 'Pas de carte de crédit requise', 'Support par email'],
      isFeatured: false,
    },
    {
      icon: Crown,
      title: 'Pro',
      description: 'La solution complète pour gérer votre activité avec une de nos applications.',
      price: '10 $',
      actionText: 'Choisir ce plan',
      to: '/register',
      features: ['Accès complet à 1 app', 'Mises à jour incluses', 'Sauvegarde Cloud sécurisée', 'Support prioritaire 24/7'],
      isFeatured: true,
    },
    {
      icon: Wrench,
      title: 'Sur mesure',
      description: 'Une application entièrement conçue et développée pour vos besoins uniques.',
      price: 'Sur devis',
      actionText: 'Commander maintenant',
      to: '/quote',
      features: ['Développement dédié', 'Fonctionnalités illimitées', 'Intégrations personnalisées', 'Contrat de maintenance'],
      isFeatured: false,
    },
  ];

  return (
    <div className="bg-[#F1F5F9] min-h-screen py-20 relative overflow-hidden">
      {/* Forme décorative en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-200/30 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-indigo-200/30 rounded-full filter blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titre */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-4">
            Une solution pour chaque ambition
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choisissez le plan qui correspond à vos besoins ou contactez-nous pour créer l'outil parfait pour votre entreprise.
          </p>
        </div>

        {/* Cartes de tarifs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {plans.map((plan) => (
            <PlanCard key={plan.title} {...plan} />
          ))}
        </div>

        {/* Message additionnel */}
        <div className="text-center mt-20">
          <p className="text-lg text-gray-600">
            Pour toute demande spéciale, contactez-nous directement sur{' '}
            <a href="https://wa.me/243823263196" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">
              WhatsApp
            </a>.
          </p>
        </div>
      </div>

      {/* Bouton WhatsApp Flottant */}
      <a
        href="https://wa.me/243823263196"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 z-20"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageSquare className="w-8 h-8" />
      </a>
    </div>
  );
};

export default PricingPage;
