import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  UtensilsCrossed, 
  ShoppingCart, 
  Package, 
  Users,
  Clock,
  BarChart3,
  Settings,
  ArrowLeft,
  DollarSign,
  Truck
} from 'lucide-react';

const RestaurantDashboard: React.FC = () => {
  const stats = [
    {
      name: 'Commandes du jour',
      value: '87',
      change: '+12%',
      icon: ShoppingCart,
      color: 'text-blue-600'
    },
    {
      name: 'Revenus',
      value: '2,340€',
      change: '+8%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      name: 'Temps moyen',
      value: '18min',
      change: '-2min',
      icon: Clock,
      color: 'text-purple-600'
    },
    {
      name: 'Livraisons',
      value: '34',
      change: '+15%',
      icon: Truck,
      color: 'text-orange-600'
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
                    {stat.change} vs hier
                  </p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center py-12">
        <UtensilsCrossed className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Tableau de bord Restaurant</h2>
        <p className="text-gray-600">Interface complète en cours de développement</p>
      </div>
    </div>
  );
};

const RestaurantApp: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Tableau de bord', href: '/app/restaurant', icon: BarChart3 },
    { name: 'Commandes', href: '/app/restaurant/orders', icon: ShoppingCart },
    { name: 'Menu', href: '/app/restaurant/menu', icon: UtensilsCrossed },
    { name: 'Stock', href: '/app/restaurant/stock', icon: Package },
    { name: 'Livraisons', href: '/app/restaurant/deliveries', icon: Truck },
    { name: 'Personnel', href: '/app/restaurant/staff', icon: Users },
    { name: 'Paramètres', href: '/app/restaurant/settings', icon: Settings }
  ];

  const isActive = (href: string) => {
    if (href === '/app/restaurant') {
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
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-orange-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Gestion de Restaurant</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Restaurant Le Gourmet</span>
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
                          ? 'bg-orange-50 text-orange-700 border-r-2 border-orange-700'
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
            <Route path="/" element={<RestaurantDashboard />} />
            <Route path="/*" element={
              <div className="text-center py-12">
                <UtensilsCrossed className="w-16 h-16 text-gray-400 mx-auto mb-4" />
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

export default RestaurantApp;