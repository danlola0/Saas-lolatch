import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, X } from 'lucide-react';

const UpgradeProBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-lg shadow-lg mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Crown className="w-6 h-6 mr-3" />
          <div>
            <p className="font-bold">Vous explorez la version Démo.</p>
            <p className="text-sm">Passez au mode Pro pour débloquer toutes les fonctionnalités !</p>
          </div>
        </div>
        <Link
          to="/tarifs"
          className="hidden sm:inline-block bg-white text-blue-600 font-bold py-2 px-4 rounded-lg text-sm hover:bg-gray-200 transition-colors"
        >
          Voir les offres
        </Link>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-white hover:text-gray-200"
        aria-label="Fermer la bannière"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default UpgradeProBanner;
