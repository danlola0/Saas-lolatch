import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  FileText,
  TrendingUp,
  Receipt,
  Briefcase,
  Landmark,
  Bot,
  Archive,
  Bell,
  ArrowLeft,
  BarChart3,
  Settings
} from 'lucide-react';

const ComptaDashboard: React.FC = () => {
  const stats = [
    {
      name: 'Revenus (30j)',
      value: '45,780€',
      change: '+12.5%',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      name: 'Factures en attente',
      value: '12,340€',
      change: '+3',
      icon: Receipt,
      color: 'text-orange-600'
    },
    {
      name: 'Dépenses (30j)',
      value: '21,560€',
      change: '-2.1%',
      icon: TrendingUp,
      color: 'text-red-600'
    },
    {
      name: 'Prochaine échéance',
      value: 'TVA - 28/09',
      change: 'dans 10 jours',
      icon: Landmark,
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center py-12">
        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Tableau de bord ComptaFacile</h2>
        <p className="text-gray-600">Interface complète en cours de développement</p>
      </div>
    </div>
  );
};

const ComptaFacileApp: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Tableau de Bord', href: '/app/comptafacile', icon: BarChart3 },
    { name: 'Transactions', href: '/app/comptafacile/transactions', icon: TrendingUp },
    { name: 'Facturation', href: '/app/comptafacile/invoicing', icon: Receipt },
    { name: 'Opérations', href: '/app/comptafacile/operations', icon: Briefcase },
    { name: 'Fiscalité et IPR', href: '/app/comptafacile/tax', icon: Landmark },
    { name: 'Assistant IA', href: '/app/comptafacile/ai-assistant', icon: Bot },
    { name: 'Archives', href: '/app/comptafacile/archives', icon: Archive },
    { name: 'Notifications', href: '/app/comptafacile/notifications', icon: Bell },
    { name: 'Paramètres', href: '/app/comptafacile/settings', icon: Settings }
  ];

  const isActive = (href: string) => {
    if (href === '/app/comptafacile') {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de l'application */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au dashboard
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-cyan-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">ComptaFacile RDC</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Dossier Fiscal 2025</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar de l'application */}
        <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
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
                          ? 'bg-cyan-50 text-cyan-700 border-r-2 border-cyan-700'
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
          </nav>
        </aside>

        {/* Contenu principal */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<ComptaDashboard />} />
            <Route path="/*" element={
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Module en développement</h2>
                <p className="text-gray-600">Cette fonctionnalité sera bientôt disponible</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default ComptaFacileApp;