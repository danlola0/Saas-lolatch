import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SolutionCard from '../ui/SolutionCard';
import { Pill, GraduationCap, UtensilsCrossed, Package, ShoppingCart, Car, Home, Users, FileText, Wrench } from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      id: 'gestion-de-pharmacie',
      title: 'Gestion de Pharmacie',
      description: 'Solution complète pour la gestion des stocks, ordonnances, et ventes en pharmacie.',
      icon: Pill,
      features: ['Gestion des stocks', 'Suivi des ordonnances', 'Point de vente', 'Reporting'],
      color: 'blue'
    },
    {
      id: 'school-manager',
      title: 'Gestion d\'École',
      description: 'Plateforme éducative pour gérer étudiants, enseignants, notes et programmes.',
      icon: GraduationCap,
      features: ['Gestion des élèves', 'Suivi des notes', 'Planning des cours', 'Communication'],
      color: 'green'
    },
    {
      id: 'resto-pro',
      title: 'Gestion de Restaurant',
      description: 'Système de gestion complète pour restaurants, commandes et livraisons.',
      icon: UtensilsCrossed,
      features: ['Gestion des commandes', 'Contrôle des stocks', 'Point de vente', 'Livraisons'],
      color: 'orange'
    },
    {
      id: 'gestion-de-stock',
      title: 'Gestion de Stock',
      description: 'Solution d\'inventaire et de gestion des stocks pour tous types d\'entreprises.',
      icon: Package,
      features: ['Inventaire temps réel', 'Alertes de stock', 'Fournisseurs', 'Rapports'],
      color: 'purple'
    },
    {
      id: 'compta-facile',
      title: 'ComptaFacile RDC',
      description: 'Solution de comptabilité et gestion financière pour les entreprises en RDC.',
      icon: FileText,
      features: ['Tableau de bord', 'Facturation', 'Fiscalité & IPR', 'Assistant IA'],
      color: 'cyan'
    },
    {
      id: 'quincaillerie-pro',
      title: 'Quincaillerie Pro',
      description: 'Gestion complète pour quincailleries : produits, inventaire, commandes et facturation.',
      icon: Wrench,
      features: ['Gestion des articles', 'Inventaire', 'Commandes clients', 'Facturation'],
      color: 'yellow'
    },
    {
      id: 'gestion-shop',
      title: 'Gestion de shop multi utilisateurs',
      description: 'Gérez votre boutique, stocks et ventes avec des accès dédiés pour vos collaborateurs.',
      icon: ShoppingCart,
      features: ['Gestion des produits', 'Suivi des stocks', 'Point de vente (POS)', 'Gestion des utilisateurs'],
      color: 'gray'
    },
    {
      id: 'e-commerce',
      title: 'E-Commerce',
      description: 'Plateforme de vente en ligne complète avec gestion des produits et commandes.',
      icon: ShoppingCart,
      features: ['Catalogue produits', 'Gestion commandes', 'Paiements', 'Analytics'],
      color: 'pink'
    },
    {
      id: 'gestion-de-flotte',
      title: 'Gestion de Flotte',
      description: 'Suivi et gestion de véhicules d\'entreprise en temps réel.',
      icon: Car,
      features: ['Suivi GPS', 'Maintenance', 'Consommation', 'Planning'],
      color: 'indigo'
    },
    {
      id: 'immobilier',
      title: 'Immobilier',
      description: 'Gestion de biens immobiliers, locataires et contrats de location.',
      icon: Home,
      features: ['Gestion des biens', 'Suivi des loyers', 'Contrats', 'Maintenance'],
      color: 'teal'
    },
    {
      id: 'rh-paie',
      title: 'RH & Paie',
      description: 'Solution complète de gestion des ressources humaines et de la paie.',
      icon: Users,
      features: ['Gestion employés', 'Calcul de paie', 'Congés', 'Recrutement'],
      color: 'red'
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let intervalId: NodeJS.Timeout;

    const startScrolling = () => {
      intervalId = setInterval(() => {
        if (!isHovered) {
          const scrollAmount = 300; // Width of one card
          if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      }, 3000); // Change card every 3 seconds
    };

    startScrolling();

    return () => clearInterval(intervalId);
  }, [isHovered]);


  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-copy-primary mb-4">
            Solutions adaptées à votre métier
          </h2>
          <p className="text-lg text-copy-secondary max-w-3xl mx-auto">
            Découvrez nos applications spécialisées conçues pour répondre aux besoins spécifiques 
            de votre secteur d'activité.
          </p>
        </div>

        <div 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] md:auto-cols-[31%] lg:auto-cols-[30%] gap-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 scrollbar-hide -mx-4 px-4"
        >
          {solutions.map((solution, index) => (
            <div key={index} className="snap-center">
              <Link to={`/tarifs#${solution.id || ''}`} className="h-full flex">
                <SolutionCard
                  title={solution.title}
                  description={solution.description}
                  icon={solution.icon}
                  features={solution.features}
                  color={solution.color}
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-copy-secondary mb-6">
            Votre métier n'est pas dans la liste ? Nous développons des solutions sur mesure.
          </p>
          <Link
            to="/devis"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Demander un devis personnalisé
          </Link>
        </div>
      </div>
    </section>
  );

};

export default SolutionsSection;