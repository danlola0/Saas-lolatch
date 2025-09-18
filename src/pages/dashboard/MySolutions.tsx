import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Pill, 
  GraduationCap, 
  UtensilsCrossed, 
  Package, 
  Settings, 
  BarChart3, 
  Users,
  ExternalLink,
  Pause,
  Play
} from 'lucide-react';

const MySolutions: React.FC = () => {
  const { user } = useAuth();

  const solutions = [
    {
      id: 'pharmacy',
      name: 'Gestion de Pharmacie',
      description: 'Solution complète pour votre pharmacie',
      icon: Pill,
      color: 'blue',
      status: 'active',
      lastAccess: '2024-01-15',
      users: 5,
      subscription: 'Standard - 99€/mois'
    },
    {
      id: 'school',
      name: 'Gestion d\'École',
      description: 'Plateforme éducative complète',
      icon: GraduationCap,
      color: 'green',
      status: 'active',
      lastAccess: '2024-01-14',
      users: 12,
      subscription: 'Premium - 149€/mois'
    }
  ];

  const subscribedSolutions = solutions.filter(solution => 
    user?.subscriptions.includes(solution.id)
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></div>
            Actif
          </span>
        );
      case 'paused':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-1"></div>
            En pause
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Mes Solutions</h1>
        <p className="text-gray-600 mt-2">
          Gérez vos applications et suivez leur utilisation
        </p>
      </div>

      {/* Solutions actives */}
      {subscribedSolutions.length > 0 ? (
        <div className="space-y-6">
          {subscribedSolutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div key={solution.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-lg bg-${solution.color}-100 flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 text-${solution.color}-600`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {solution.name}
                        </h3>
                        {getStatusBadge(solution.status)}
                      </div>
                      <p className="text-gray-600 mb-4">
                        {solution.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Dernier accès :</span>
                          <div className="font-medium text-gray-900">{solution.lastAccess}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Utilisateurs :</span>
                          <div className="font-medium text-gray-900">{solution.users} actifs</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Abonnement :</span>
                          <div className="font-medium text-gray-900">{solution.subscription}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                      <Pause className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <Link
                      to={`/app/${solution.id}`}
                      className={`inline-flex items-center px-4 py-2 bg-${solution.color}-600 hover:bg-${solution.color}-700 text-white font-medium rounded-lg transition-colors`}
                    >
                      Accéder
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Statistiques
                    </button>
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors">
                      <Users className="w-4 h-4 mr-2" />
                      Utilisateurs
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Aucune solution active
          </h3>
          <p className="text-gray-600 mb-6">
            Vous n'avez pas encore souscrit à nos solutions. Découvrez notre catalogue.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Découvrir les solutions
          </Link>
        </div>
      )}

      {/* Actions */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Besoin d'aide avec vos solutions ?
        </h3>
        <p className="text-gray-600 mb-4">
          Notre équipe support est disponible 24/7 pour vous accompagner
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/dashboard/support"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Contacter le support
          </Link>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 border border-blue-200 hover:border-blue-300 text-blue-700 font-medium rounded-lg transition-colors"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
};

export default MySolutions;