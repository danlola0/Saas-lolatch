import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PricingCard from '../../components/ui/PricingCard';
import { Pill, Wrench, FileText, Archive, Utensils, School } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const plans = [
    {
      id: 'gestion-de-pharmacie',
      title: 'Gestion de Pharmacie',
      icon: Pill,
      color: 'blue',
      saas: {
        price: 25,
        features: ['Accessible partout', 'Sauvegarde cloud', 'Support premium', 'Mises à jour automatiques'],
      },
      local: {
        price: 9,
        features: ['Installation sur votre PC', 'Fonctionne hors-ligne', 'Support de base', 'Licence à vie'],
      },
    },
    {
      id: 'quincaillerie-pro',
      title: 'Quincaillerie Pro',
      icon: Wrench,
      color: 'orange',
      saas: {
        price: 30,
        features: ['Accessible partout', 'Sauvegarde cloud', 'Support premium', 'Gestion multi-dépôts'],
      },
      local: {
        price: 12,
        features: ['Installation sur votre PC', 'Fonctionne hors-ligne', 'Support de base', 'Factures et devis illimités'],
      },
    },
    {
      id: 'gestion-de-stock',
      title: 'Gestion de Stock',
      icon: Archive,
      color: 'purple',
      saas: {
        price: 20,
        features: ['Accessible partout', 'Sauvegarde cloud', 'Support premium', 'Suivi des mouvements de stock'],
      },
      local: {
        price: 8,
        features: ['Installation sur votre PC', 'Fonctionne hors-ligne', 'Support de base', 'Inventaire facile'],
      },
    },
    {
      id: 'compta-facile',
      title: 'Compta Facile',
      icon: FileText,
      color: 'green',
      saas: {
        price: 35,
        features: ['Accessible partout', 'Sauvegarde cloud', 'Support premium', 'Assistant IA fiscal'],
      },
      local: {
        price: 15,
        features: ['Installation sur votre PC', 'Fonctionne hors-ligne', 'Support de base', 'Rapports financiers complets'],
      },
    },
    {
      id: 'resto-pro',
      title: 'Resto Pro',
      icon: Utensils,
      color: 'red',
      saas: {
        price: 40,
        features: ['Accessible partout', 'Sauvegarde cloud', 'Support premium', 'Gestion des tables et commandes'],
      },
      local: {
        price: 18,
        features: ['Installation sur votre PC', 'Fonctionne hors-ligne', 'Support de base', 'Menu personnalisable'],
      },
    },
    {
      id: 'school-manager',
      title: 'School Manager',
      icon: School,
      color: 'yellow',
      saas: {
        price: 50,
        features: ['Accessible partout', 'Sauvegarde cloud', 'Support premium', 'Portail élèves et parents'],
      },
      local: {
        price: 22,
        features: ['Installation sur votre PC', 'Fonctionne hors-ligne', 'Support de base', 'Gestion des notes et absences'],
      },
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-copy-primary mb-4">
            Des tarifs flexibles pour chaque besoin
          </h2>
          <p className="text-lg text-copy-secondary max-w-3xl mx-auto">
            Choisissez la solution qui vous convient, en ligne pour la flexibilité ou locale pour le contrôle.
          </p>
        </div>

        {/* Toggle Mensuel/Annuel */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`font-medium ${billingCycle === 'monthly' ? 'text-copy-primary' : 'text-copy-secondary'}`}>
            Mensuel
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={billingCycle === 'annually'}
              onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
            />
            <div className="w-11 h-6 bg-surface rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
          <span className={`font-medium ${billingCycle === 'annually' ? 'text-copy-primary' : 'text-copy-secondary'}`}>
            Annuel <span className="text-green-400 text-sm">(-20%)</span>
          </span>
        </div>

        {/* Hook Texts */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="bg-surface border border-stroke rounded-lg p-6">
            <ul className="space-y-3 text-white">
              <li>"Nos tarifs sont flexibles : les montants affichés peuvent être ajustés selon le mode de paiement et vos besoins spécifiques."</li>
              <li>"Les prix indiqués sont à titre de référence. Contactez-nous pour discuter d’une offre personnalisée adaptée à votre budget et à votre façon de payer."</li>
              <li>"Chaque projet est unique, nos tarifs aussi ! Parlons-en ensemble pour trouver la formule la mieux adaptée à vos moyens de paiement."</li>
              <li>"Les montants affichés sont négociables en fonction de la durée d’abonnement ou du mode de règlement choisi."</li>
              <li>"Vous avez un besoin particulier ou un autre mode de paiement ? Nos tarifs peuvent être revus pour mieux correspondre à vos attentes."</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} billingCycle={billingCycle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
