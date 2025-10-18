import React from 'react';
import PricingCard from '../ui/PricingCard';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Basique',
      price: '49',
      period: 'mois',
      description: 'Parfait pour les petites entreprises',
      features: [
        '1 application incluse',
        '5 utilisateurs maximum',
        'Support par email',
        'Stockage 10GB',
        'Rapports de base'
      ],
      buttonText: 'Commencer',
      popular: false
    },
    {
      name: 'Standard',
      price: '99',
      period: 'mois',
      description: 'Pour les entreprises en croissance',
      features: [
        '3 applications incluses',
        '25 utilisateurs maximum',
        'Support prioritaire',
        'Stockage 100GB',
        'Rapports avancés',
        'API accès',
        'Intégrations tierces'
      ],
      buttonText: 'Choisir Standard',
      popular: true
    },
    {
      name: 'Premium',
      price: '199',
      period: 'mois',
      description: 'Solution complète pour grandes entreprises',
      features: [
        'Toutes les applications',
        'Utilisateurs illimités',
        'Support dédié 24/7',
        'Stockage illimité',
        'Rapports personnalisés',
        'API complète',
        'White-label',
        'Formation incluse'
      ],
      buttonText: 'Choisir Premium',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tarifs transparents et flexibles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le plan qui correspond à vos besoins. 
            Tous nos plans incluent une période d'essai gratuite de 14 jours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Questions fréquentes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Puis-je changer de plan à tout moment ?
              </h4>
              <p className="text-gray-600">
                Oui, vous pouvez upgrade ou downgrade votre plan à tout moment. 
                Les changements prennent effet immédiatement.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Y a-t-il des frais de setup ?
              </h4>
              <p className="text-gray-600">
                Aucun frais de setup. Commencez immédiatement après votre inscription 
                avec notre période d'essai gratuite.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Le support technique est-il inclus ?
              </h4>
              <p className="text-gray-600">
                Oui, tous nos plans incluent le support technique. 
                Le niveau de support varie selon votre plan.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Mes données sont-elles sécurisées ?
              </h4>
              <p className="text-gray-600">
                Absolument. Nous utilisons un chiffrement de niveau bancaire 
                et des sauvegardes automatiques quotidiennes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;