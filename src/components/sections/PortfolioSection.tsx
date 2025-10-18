import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, GraduationCap, UtensilsCrossed, Package, TrendingUp, Users, CheckCircle } from 'lucide-react';

// Interface pour la carte de cas d'usage
interface UseCaseCardProps {
  icon: React.ElementType;
  title: string;
  solutionName: string;
  description: string;
  benefits: string[];
  color: string;
}

// Composant pour la carte de cas d'usage
const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon: Icon, title, solutionName, description, benefits, color }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 text-blue-50',
    green: 'from-green-500 to-green-600 text-green-50',
    orange: 'from-orange-500 to-orange-600 text-orange-50',
    purple: 'from-purple-500 to-purple-600 text-purple-50',
  };
  
  const linkColorClasses = {
    blue: 'text-blue-500 hover:text-blue-600',
    green: 'text-green-500 hover:text-green-600',
    orange: 'text-orange-500 hover:text-orange-600',
    purple: 'text-purple-500 hover:text-purple-600',
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col h-full border border-gray-100">
      <div className="flex-shrink-0">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center mb-6`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 font-display">{title}</h3>
        <p className={`font-semibold mb-4 ${linkColorClasses[color]}`}>{solutionName}</p>
        <p className="text-gray-600 mb-6 text-sm">{description}</p>
      </div>
      <div className="flex-grow">
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <Link to="/devis" className={`font-semibold ${linkColorClasses[color]} transition-colors`}>
          Voir le cas d’usage →
        </Link>
      </div>
    </div>
  );
};

// Section principale des cas d'usage
const PortfolioSection: React.FC = () => {
  const useCases = [
    {
      title: 'Gestion de Pharmacie',
      solutionName: 'Pharma Plus',
      description: 'Une solution complète pour optimiser la gestion de votre officine, des stocks aux ventes, en passant par la conformité réglementaire.',
      icon: Pill,
      benefits: ['Inventaire en temps réel et alertes de péremption', 'Facturation rapide et gestion des assurances', 'Rapports de performance détaillés'],
      color: 'blue',
    },
    {
      title: 'Gestion d’École',
      solutionName: 'Educa Pro',
      description: 'Digitalisez votre établissement scolaire avec une plateforme centralisée pour les élèves, les enseignants et l’administration.',
      icon: GraduationCap,
      benefits: ['Suivi académique et bulletins de notes en ligne', 'Portail de communication parents-enseignants', 'Gestion simplifiée des inscriptions et des frais'],
      color: 'green',
    },
    {
      title: 'Gestion de Restaurant',
      solutionName: 'Gourmet Tech',
      description: 'Un système intégré pour gérer les commandes, les tables, les stocks et fidéliser votre clientèle avec efficacité.',
      icon: UtensilsCrossed,
      benefits: ['Prise de commande rapide sur tablette', 'Gestion des stocks d’ingrédients en temps réel', 'Programme de fidélité et analyse des ventes'],
      color: 'orange',
    },
    {
      title: 'Gestion de Stock et Logistique',
      solutionName: 'Stock Flow',
      description: 'Maîtrisez votre chaîne d’approvisionnement avec une solution puissante pour le suivi des stocks, des entrepôts et des expéditions.',
      icon: Package,
      benefits: ['Traçabilité complète des produits (codes-barres/QR)', 'Optimisation des niveaux de stock et des réapprovisionnements', 'Gestion multi-entrepôts et préparation de commandes'],
      color: 'purple',
    },
  ];

  const stats = [
    { icon: TrendingUp, value: '30+', label: 'Projets réalisés' },
    { icon: Users, value: '2000+', label: 'Utilisateurs' },
    { icon: CheckCircle, value: '98%', label: 'Satisfaction client' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-gray-900 mb-4">
            Nos réalisations concrètes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez comment Lolatech transforme les défis de votre secteur en opportunités de croissance avec des outils SaaS et locaux performants.
          </p>
        </div>

        {/* Grille des cas d'usage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </div>

        {/* Gallerie d'images */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold font-display text-gray-900 mb-8 text-center">
            Quelques unes de nos réalisations en images
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[500px]">
            {/* Main Image */}
            <div className="group h-64 md:h-full w-full rounded-lg overflow-hidden shadow-lg relative cursor-pointer">
              <img src="/demos/Capture.PNG" alt="Realisation 1" className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <h4 className="text-white text-lg md:text-2xl font-bold">Pharma Plus</h4>
                <p className="text-white/90 text-sm md:text-base">Gestion de pharmacie</p>
              </div>
            </div>
            {/* Side Images */}
            <div className="grid grid-cols-1 gap-4 h-full">
              <div className="group h-64 md:h-full w-full rounded-lg overflow-hidden shadow-lg relative cursor-pointer">
                <img src="/demos/Capture1.PNG" alt="Realisation 2" className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-6">
                  <h4 className="text-white text-lg md:text-2xl font-bold">Educa Pro</h4>
                  <p className="text-white/90 text-sm md:text-base">Gestion d'école</p>
                </div>
              </div>
              <div className="group h-64 md:h-full w-full rounded-lg overflow-hidden shadow-lg relative cursor-pointer">
                <img src="/demos/Capture5.PNG" alt="Realisation 3" className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-6">
                  <h4 className="text-white text-lg md:text-2xl font-bold">Gourmet Tech</h4>
                  <p className="text-white/90 text-sm md:text-base">Gestion de restaurant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section des statistiques */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-900 font-display">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
