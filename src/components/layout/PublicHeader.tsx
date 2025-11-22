import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Layers } from 'lucide-react';

// --- Fonctions de pré-chargement ---
const preloadPricing = () => import('../../pages/public/PricingPage');
const preloadExcel = () => import('../../pages/public/ExcelFilesPage');
const preloadAbout = () => import('../../pages/public/AboutPage');
const preloadLogin = () => import('../../pages/auth/LoginPage');
const preloadRegister = () => import('../../pages/auth/RegisterPage');

const PublicHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/#' },
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Tarifs', href: '/tarifs', preload: preloadPricing },
    { name: 'Fichiers Excel Pro', href: '/excel-files', preload: preloadExcel },
    { name: 'À propos', href: '/about', preload: preloadAbout },
    { name: 'Réalisations', href: '/#portfolio' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-100/95 backdrop-blur-lg border-b border-stroke' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-violet-500 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-display text-gray-900">LolaTech</span>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onMouseEnter={item.preload}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-blue-500' : 'text-copy-secondary hover:text-blue-500'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Boutons d'action */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              onMouseEnter={preloadLogin}
              className="text-copy-secondary hover:text-blue-500 text-sm font-medium transition-colors"
            >
              Connexion
            </Link>
            <Link
              to="/register"
              onMouseEnter={preloadRegister}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Commencer
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-copy-secondary hover:text-blue-500 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile ouvert */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stroke">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium ${
                      isActive ? 'text-blue-500' : 'text-copy-secondary hover:text-blue-500'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-4 flex flex-col space-y-2">
                <Link
                  to="/login"
                  className="text-copy-secondary hover:text-blue-500 px-3 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connexion
                </Link>
                <Link
                  to="/register"
                  className="bg-primary hover:bg-primary/90 text-white px-3 py-2 rounded-lg text-sm font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Commencer
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default PublicHeader;