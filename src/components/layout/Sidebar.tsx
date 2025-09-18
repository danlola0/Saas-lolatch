import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Layers, 
  CreditCard, 
  User, 
  HelpCircle,
  Settings
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: 'Accueil',
      href: '/dashboard',
      icon: Home
    },
    {
      name: 'Mes Solutions',
      href: '/dashboard/solutions',
      icon: Layers
    },
    {
      name: 'Facturation',
      href: '/dashboard/billing',
      icon: CreditCard
    },
    {
      name: 'Profil',
      href: '/dashboard/profile',
      icon: User
    },
    {
      name: 'Support',
      href: '/dashboard/support',
      icon: HelpCircle
    }
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-200 fixed left-0 top-16 h-full">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="pt-8">
          <div className="border-t border-gray-200 pt-4">
            <Link
              to="#"
              className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Paramètres</span>
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;