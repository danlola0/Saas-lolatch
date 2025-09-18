import React from 'react';
import SolutionCard from '../ui/SolutionCard';
import { Pill, GraduationCap, UtensilsCrossed, Package, ShoppingCart, Car, Home, Users } from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      title: 'Gestion de Pharmacie',
      description: 'Solution complète pour la gestion des stocks, ordonnances, et ventes en pharmacie.',
      icon: Pill,
      features: ['Gestion des stocks', 'Suivi des ordonnances', 'Point de vente', 'Reporting'],
      color: 'blue'
    },
    {
      title: 'Gestion d\'École',
      description: 'Plateforme éducative pour gérer étudiants, enseignants, notes et programmes.',
      icon: GraduationCap,
      features: ['Gestion des élèves', 'Suivi des notes', 'Planning des cours', 'Communication'],
      color: 'green'
    },
    {
      title: 'Gestion de Restaurant',
      description: 'Système de gestion complète pour restaurants, commandes et livraisons.',
      icon: UtensilsCrossed,
      features: ['Gestion des commandes', 'Contrôle des stocks', 'Point de vente', 'Livraisons'],
      color: 'orange'
    },
    {
      title: 'Gestion de Stock',
      description: 'Solution d\'inventaire et de gestion des stocks pour tous types d\'entreprises.',
      icon: Package,
      features: ['Inventaire temps réel', 'Alertes de stock', 'Fournisseurs', 'Rapports'],
      color: 'purple'
    },
    {
      title: 'E-Commerce',
      description: 'Plateforme de vente en ligne complète avec gestion des produits et commandes.',
      icon: ShoppingCart,
      features: ['Catalogue produits', 'Gestion commandes', 'Paiements', 'Analytics'],
      color: 'pink'
    },
    {
      title: 'Gestion de Flotte',
      description: 'Suivi et gestion de véhicules d\'entreprise en temps réel.',
      icon: Car,
      features: ['Suivi GPS', 'Maintenance', 'Consommation', 'Planning'],
      color: 'indigo'
    },
    {
      title: 'Immobilier',
      description: 'Gestion de biens immobiliers, locataires et contrats de location.',
      icon: Home,
      features: ['Gestion des biens', 'Suivi des loyers', 'Contrats', 'Maintenance'],
      color: 'teal'
    },
    {
      title: 'RH & Paie',
      description: 'Solution complète de gestion des ressources humaines et de la paie.',
      icon: Users,
      features: ['Gestion employés', 'Calcul de paie', 'Congés', 'Recrutement'],
      color: 'red'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Solutions adaptées à votre métier
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos applications spécialisées conçues pour répondre aux besoins spécifiques 
            de votre secteur d'activité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              features={solution.features}
              color={solution.color}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Votre métier n'est pas dans la liste ? Nous développons des solutions sur mesure.
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Demander un devis personnalisé
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;