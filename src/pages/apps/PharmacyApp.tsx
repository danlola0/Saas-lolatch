import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Pill, 
  Package, 
  ShoppingCart, 
  TrendingUp,
  Users,
  AlertTriangle,
  DollarSign,
  Calendar,
  BarChart3,
  Settings,
  ArrowLeft
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const PharmacyDashboard: React.FC = () => {
  const salesData = [
    { name: 'Lun', ventes: 1200 },
    { name: 'Mar', ventes: 1900 },
    { name: 'Mer', ventes: 800 },
    { name: 'Jeu', ventes: 2400 },
    { name: 'Ven', ventes: 2100 },
    { name: 'Sam', ventes: 3200 },
    { name: 'Dim', ventes: 1600 }
  ];

  const stats = [
    {
      name: 'Ventes du jour',
      value: '2,450€',
      change: '+12%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      name: 'Produits en stock',
      value: '1,234',
      change: '-2%',
      icon: Package,
      color: 'text-blue-600'
    },
    {
      name: 'Ordonnances',
      value: '47',
      change: '+5%',
      icon: Pill,
      color: 'text-purple-600'
    },
    {
      name: 'Alertes stock',
      value: '12',
      change: '+3',
      icon: AlertTriangle,
      color: 'text-red-600'
    }
  ];

  const recentSales = [
    { id: 1, customer: 'Marie Dubois', items: 3, amount: '45.50€', time: '14:30' },
    { id: 2, customer: 'Jean Martin', items: 1, amount: '12.90€', time: '14:25' },
    { id: 3, customer: 'Sophie Laurent', items: 5, amount: '78.20€', time: '14:15' },
    { id: 4, customer: 'Paul Durand', items: 2, amount: '33.40€', time: '14:00' }
  ];

  const lowStockItems = [
    { name: 'Doliprane 1000mg', stock: 5, minimum: 50 },
    { name: 'Serum physiologique', stock: 12, minimum: 100 },
    { name: 'Pansements', stock: 8, minimum: 30 },
    { name: 'Thermomètres', stock: 2, minimum: 20 }
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Graphique des ventes */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ventes de la semaine</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="ventes" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Ventes récentes */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ventes récentes</h3>
          <div className="space-y-4">
            {recentSales.map((sale) => (
              <div key={sale.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{sale.customer}</p>
                  <p className="text-sm text-gray-600">{sale.items} article(s)</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{sale.amount}</p>
                  <p className="text-sm text-gray-600">{sale.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alertes de stock */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Alertes de stock</h3>
          <Link
            to="/app/pharmacy/stock"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Voir tout
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {lowStockItems.map((item, index) => (
            <div key={index} className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span className="text-sm font-medium text-red-800">Stock bas</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">{item.name}</h4>
              <p className="text-sm text-gray-600">
                Stock: {item.stock} / Min: {item.minimum}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PharmacyApp: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Tableau de bord', href: '/app/pharmacy', icon: BarChart3 },
    { name: 'Stock', href: '/app/pharmacy/stock', icon: Package },
    { name: 'Ventes', href: '/app/pharmacy/sales', icon: ShoppingCart },
    { name: 'Ordonnances', href: '/app/pharmacy/prescriptions', icon: Pill },
    { name: 'Rapports', href: '/app/pharmacy/reports', icon: TrendingUp },
    { name: 'Utilisateurs', href: '/app/pharmacy/users', icon: Users },
    { name: 'Paramètres', href: '/app/pharmacy/settings', icon: Settings }
  ];

  const isActive = (href: string) => {
    if (href === '/app/pharmacy') {
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
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Pill className="w-5 h-5 text-blue-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Gestion de Pharmacie</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Pharmacie du Centre</span>
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
          </nav>
        </aside>

        {/* Contenu principal */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<PharmacyDashboard />} />
            <Route path="/stock" element={
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Gestion du Stock</h2>
                <p className="text-gray-600">Module en cours de développement</p>
              </div>
            } />
            <Route path="/sales" element={
              <div className="text-center py-12">
                <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Point de Vente</h2>
                <p className="text-gray-600">Module en cours de développement</p>
              </div>
            } />
            <Route path="/prescriptions" element={
              <div className="text-center py-12">
                <Pill className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Gestion des Ordonnances</h2>
                <p className="text-gray-600">Module en cours de développement</p>
              </div>
            } />
            <Route path="/*" element={
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
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

export default PharmacyApp;