import React from 'react';
import { Layers, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface text-copy-secondary border-t border-stroke">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-violet-500 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-display text-copy-primary">LolaTech</span>
            </div>
            <p className="mb-4 max-w-md mx-auto md:mx-0">
              LolaTech, la solution complète pour digitaliser votre entreprise. 
              Solutions personnalisées pour tous les secteurs d'activité.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>daniellolayongo@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+243 823263196</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Commune lemba</span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-semibold text-copy-primary mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-copy-primary transition-colors">Gestion Pharmacie</a></li>
              <li><a href="#" className="hover:text-copy-primary transition-colors">Gestion École</a></li>
              <li><a href="#" className="hover:text-copy-primary transition-colors">Gestion Restaurant</a></li>
              <li><a href="#" className="hover:text-copy-primary transition-colors">Gestion Stock</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-copy-primary mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-copy-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-copy-primary transition-colors">Centre d'aide</a></li>
              <li><Link to="/login" className="hover:text-copy-primary transition-colors">Connexion</Link></li>
              <li><Link to="/register" className="hover:text-copy-primary transition-colors">Inscription</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stroke mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2024 SaasPlatform. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-copy-primary transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-sm hover:text-copy-primary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-sm hover:text-copy-primary transition-colors">
                CGU
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;