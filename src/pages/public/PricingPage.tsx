import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, FlaskConical, Crown, Wrench, MessageSquare } from 'lucide-react';
import PaymentPrompt from '../../components/ui/PaymentPrompt';

// Composant pour une carte de tarif individuelle
const PlanCard = ({ icon: Icon, title, description, price, actionText, to, features, isFeatured, onActionClick }) => (
  <div className={`relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 flex flex-col transition-transform transform hover:-translate-y-2 duration-300 ${isFeatured ? 'shadow-2xl shadow-blue-500/20 border-blue-500' : 'shadow-lg'}`}>
    {isFeatured && (
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
          Le plus populaire
        </span>
      </div>
    )}
    
    <div className="flex-grow">
      <div className="flex items-center gap-4 mb-4">
        <Icon className={`w-10 h-10 ${isFeatured ? 'text-blue-500' : 'text-slate-300'}`} />
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-slate-400 mb-6 h-16">{description}</p>
      
      <div className="mb-8">
        <p className="text-4xl font-bold text-white">
          {price}
          {title === 'Pro' && <span className="text-lg font-normal text-slate-400">/mois</span>}
        </p>
      </div>

      <ul className="space-y-3 text-slate-300 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    
    {to ? (
      <Link
        to={to}
        className={`w-full block text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
          isFeatured
            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
            : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
        }`}
      >
        {actionText}
      </Link>
    ) : (
      <button
        onClick={onActionClick}
        className={`w-full text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
          isFeatured
            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
            : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
        }`}
      >
        {actionText}
      </button>
    )}
  </div>
);

const PricingPage: React.FC = () => {
  const [isPaymentPromptOpen, setPaymentPromptOpen] = useState(false);

  const plans = [
    {
      icon: FlaskConical,
      title: 'Découverte',
      description: 'Idéal pour explorer nos fonctionnalités avec une version démo gratuite.',
      price: 'Gratuit',
      actionText: 'Essayer maintenant',
      to: '/demo',
      features: ['1 App Démo', 'Fonctionnalités limitées', 'Pas de carte de crédit requise', 'Support par email'],
      isFeatured: false,
    },
    {
      icon: Crown,
      title: 'Pro',
      description: 'La solution complète pour gérer votre activité avec une de nos applications.',
      price: '10 $',
      actionText: 'Choisir ce plan',
      features: ['Accès complet à 1 app', 'Mises à jour incluses', 'Sauvegarde Cloud sécurisée', 'Support prioritaire 24/7'],
      isFeatured: true,
      onActionClick: () => setPaymentPromptOpen(true),
    },
    {
      icon: Wrench,
      title: 'Sur mesure',
      description: 'Une application entièrement conçue et développée pour vos besoins uniques.',
      price: 'Sur devis',
      actionText: 'Commander maintenant',
      to: '/devis',
      features: ['Développement dédié', 'Fonctionnalités illimitées', 'Intégrations personnalisées', 'Contrat de maintenance'],
      isFeatured: false,
    },
  ];

  return (
    <div className="bg-[#0F172A] min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-900/50 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-indigo-900/50 rounded-full filter blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Une solution pour chaque ambition
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Choisissez le plan qui correspond à vos besoins ou contactez-nous pour créer l'outil parfait pour votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {plans.map((plan) => (
            <PlanCard key={plan.title} {...plan} />
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-lg text-slate-400">
            Pour toute demande spéciale, contactez-nous directement sur{' '}
            <a href="https://wa.me/243823263196" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-500 hover:underline">
              WhatsApp
            </a>.
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/243823263196"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 z-20"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageSquare className="w-8 h-8" />
      </a>
      
      <PaymentPrompt 
        appName="Plan Pro" 
        isOpen={isPaymentPromptOpen} 
        onClose={() => setPaymentPromptOpen(false)} 
      />
    </div>
  );
};

export default PricingPage;
