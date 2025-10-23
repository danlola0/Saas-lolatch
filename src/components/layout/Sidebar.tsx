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

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
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
    <aside 
      className={`
        w-64 bg-slate-800 border-r border-slate-700 fixed left-0 top-0 h-full pt-16 z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}
    >
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
                      ? 'bg-blue-600/20 text-white'
                      : 'text-slate-400 hover:bg-slate-700 hover:text-white'
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
          <div className="border-t border-slate-700 pt-4">
            <Link
              to="#"
              className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-700 hover:text-white rounded-lg transition-colors"
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
