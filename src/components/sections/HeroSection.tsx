import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-background py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-copy-primary leading-tight">
              LolaTech, la solution de
              <span className="gradient-text">
                {' '}gestion complète
              </span>
            </h1>
            <p className="mt-6 text-lg text-copy-secondary leading-relaxed">
              Digitalisez votre entreprise avec nos solutions SaaS sur mesure. 
              Pharmacie, école, restaurant, stock - une plateforme, toutes vos activités.
            </p>

            {/* Points clés */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-copy-secondary">Solutions métier spécialisées</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-copy-secondary">Interface moderne et intuitive</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-copy-secondary">Support technique dédié</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-primary/20"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border border-stroke hover:bg-surface text-copy-primary font-semibold rounded-xl transition-colors">
                <Play className="mr-2 w-5 h-5" />
                Voir la démo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-copy-primary">500+</div>
                <div className="text-sm text-copy-secondary">Entreprises</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-copy-primary">50k+</div>
                <div className="text-sm text-copy-secondary">Utilisateurs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-copy-primary">99.9%</div>
                <div className="text-sm text-copy-secondary">Disponibilité</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-stroke">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                  alt="Dashboard Preview"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-surface p-4 rounded-lg shadow-lg border border-stroke">
                <div className="text-sm font-medium text-copy-primary">+15%</div>
                <div className="text-xs text-copy-secondary">Productivité</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-surface p-4 rounded-lg shadow-lg border border-stroke">
                <div className="text-sm font-medium text-copy-primary">24/7</div>
                <div className="text-xs text-copy-secondary">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;