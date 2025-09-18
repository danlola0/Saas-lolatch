import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Pill, 
  GraduationCap, 
  UtensilsCrossed, 
  Package, 
  ArrowRight, 
  CheckCircle,
  Clock,
  TrendingUp,
  Users
} from 'lucide-react';

const DashboardHome: React.FC = () => {
  const { user } = useAuth();

  const availableSolutions = [
    {
      id: 'pharmacy',
      name: 'Gestion de Pharmacie',
      description: 'Solution complète pour votre pharmacie',
      icon: Pill,
      color: 'blue',
      price: '99€/mois',
      features: ['Gestion des stocks', 'Ordonnances', 'Point de vente']
    },
    {
      id: 'school',
      name: 'Gestion d\'École',
      description: 'Plateforme éducative complète',
      icon: GraduationCap,
      color: 'green',
      price: '149€/mois',
      features: ['Gestion des élèves', 'Notes', 'Communication']
    },
    {
      id: 'restaurant',
      name: 'Gestion de Restaurant',
      description: 'Système pour restaurants',
      icon: UtensilsCrossed,
      color: 'orange',
      price: '79€/mois',
      features: ['Commandes', 'Stocks', 'Livraisons']
    },
    {
      id: 'stock',
      name: 'Gestion de Stock',
      description: 'Inventaire et stocks',
      icon: Package,
      color: 'purple',
      price: '69€/mois',
      features: ['Inventaire', 'Alertes', 'Rapports']
    }
  ];

  const subscribedSolutions = availableSolutions.filter(solution => 
    user?.subscriptions.includes(solution.id)
  );

  const unsubscribedSolutions = availableSolutions.filter(solution => 
    !user?.subscriptions.includes(solution.id)
  );

  const stats = [
    {
      name: 'Solutions actives',
      value: subscribedSolutions.length.toString(),
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      name: 'Uptime',
      value: '99.9%',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      name: 'Support',
      value: '24/7',
      icon: Clock,
      color: 'text-purple-600'
    },
    {
      name: 'Utilisateurs',
      value: '12',
      icon: Users,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header de bienvenue */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Bonjour, {user?.name} !
        </h1>
        <p className="text-blue-100">
          Bienvenue dans votre espace de gestion. Gérez vos solutions et suivez vos performances.
        </p>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Solutions souscrites */}
      {subscribedSolutions.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Mes Solutions Actives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subscribedSolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div key={solution.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${solution.color}-100 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${solution.color}-600`} />
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Actif
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {solution.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {solution.description}
                  </p>

                  <Link
                    to={`/app/${solution.id}`}
                    className={`inline-flex items-center justify-center w-full px-4 py-2 bg-${solution.color}-600 hover:bg-${solution.color}-700 text-white font-medium rounded-lg transition-colors`}
                  >
                    Accéder
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Solutions disponibles */}
      {unsubscribedSolutions.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Solutions Disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unsubscribedSolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div key={solution.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-gray-400" />
                    </div>
                    <span className="text-lg font-bold text-gray-900">
                      {solution.price}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {solution.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {solution.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full px-4 py-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors">
                    S'abonner
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Actions rapides */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Actions Rapides
        </h3>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/dashboard/billing"
            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            Voir ma facturation
          </Link>
          <Link
            to="/dashboard/support"
            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            Contacter le support
          </Link>
          <Link
            to="/dashboard/profile"
            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            Modifier mon profil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;