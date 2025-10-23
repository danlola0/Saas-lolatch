import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, User, Home, Menu } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-slate-800 border-b border-slate-700 fixed top-0 left-0 right-0 z-50">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Mobile sidebar toggle */}
            <button onClick={onMenuClick} className="lg:hidden p-2 text-slate-400 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
            <Link 
              to="/" 
              className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              <Home className="w-4 h-4 text-slate-300" />
              <span className="text-sm font-medium text-white">Retour au site</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Barre de recherche */}
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-sm text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Notifications */}
            <button className="p-2 text-slate-400 hover:text-white relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-slate-800"></span>
            </button>

            {/* Menu utilisateur */}
            <div className="relative group">
              <button className="flex items-center space-x-2 p-1 rounded-lg hover:bg-slate-700">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-white hidden sm:block">
                  {user?.name}
                </span>
              </button>

              {/* Dropdown menu */}
              <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
                    Mon profil
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
                    Paramètres
                  </a>
                  <hr className="my-1 border-slate-700" />
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-slate-700 hover:text-red-400"
                  >
                    Déconnexion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
