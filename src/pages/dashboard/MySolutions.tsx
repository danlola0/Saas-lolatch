import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Pill, GraduationCap, UtensilsCrossed, Package, Settings, BarChart3, Users,
  ExternalLink, Hospital, ShoppingCart, Truck, Hotel, Store,
  Wrench, Building2, Landmark, Calendar, BookOpen
} from 'lucide-react';

// --- Composant pour une carte de solution dans le catalogue ---
const CatalogSolutionCard = ({ solution }) => {
  const Icon = solution.icon;
  return (
    <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-4 mb-3">
          <div className={`w-12 h-12 rounded-lg bg-${solution.color}-500/10 flex items-center justify-center`}>
            <Icon className={`w-6 h-6 text-${solution.color}-400`} />
          </div>
          <h3 className="text-lg font-semibold text-white">{solution.name}</h3>
        </div>
        <p className="text-slate-400 text-sm h-20">{solution.description}</p>
      </div>
      <Link
        to={`/app/${solution.id}`}
        className={`mt-6 w-full inline-flex items-center justify-center px-4 py-2 bg-${solution.color}-600 hover:bg-${solution.color}-700 text-white font-medium rounded-lg transition-colors`}
      >
        Accéder à l'application
      </Link>
    </div>
  );
};


const MySolutions: React.FC = () => {
  const { user } = useAuth();

  // Catalogue complet de toutes les solutions disponibles
  const allSolutions = [
    { id: 'pharmacy', name: 'Gestion de Pharmacie', description: 'Solution complète pour votre officine.', icon: Pill, color: 'blue' },
    { id: 'school', name: "Gestion d'École", description: 'Plateforme éducative pour tous les niveaux.', icon: GraduationCap, color: 'green' },
    { id: 'restaurant', name: 'Gestion de Restaurant', description: 'Optimisez vos services et commandes.', icon: UtensilsCrossed, color: 'red' },
    { id: 'hospital', name: "Gestion d'Hôpital ou Clinique", description: 'Dossiers patients, facturation et stocks.', icon: Hospital, color: 'pink' },
    { id: 'supermarket', name: 'Gestion de Supermarché', description: 'Suivi des ventes, inventaire et fournisseurs.', icon: ShoppingCart, color: 'orange' },
    { id: 'transport', name: 'Gestion de Transport et Livraison', description: 'Suivi de flotte, chauffeurs et livraisons.', icon: Truck, color: 'yellow' },
    { id: 'hotel', name: "Gestion d'Hôpital ou Auberge", description: 'Réservations, check-in/out et facturation.', icon: Hotel, color: 'purple' },
    { id: 'shop', name: 'Gestion de Boutique ou Magasin', description: 'Produits, ventes, stock et rapports.', icon: Store, color: 'teal' },
    { id: 'garage', name: 'Gestion de Garage Automobile', description: 'Réparations, pièces, devis et factures.', icon: Wrench, color: 'indigo' },
    { id: 'construction', name: 'Gestion de Société de Construction', description: 'Suivi des chantiers, dépenses et matériel.', icon: Building2, color: 'gray' },
    { id: 'microfinance', name: 'Gestion de Microfinance', description: 'Comptes clients, prêts et épargne.', icon: Landmark, color: 'lime' },
    { id: 'events', name: "Gestion d'Événements", description: 'Organisation, billetterie et suivi des dépenses.', icon: Calendar, color: 'cyan' },
    { id: 'training', name: 'Gestion de Centre de Formation', description: 'Inscriptions, modules et paiements.', icon: BookOpen, color: 'amber' }
  ];

  // Solutions auxquelles l'utilisateur est abonné
  const subscribedSolutions = allSolutions
    .filter(solution => user?.subscriptions.includes(solution.id))
    .map(solution => ({
      ...solution,
      status: 'active',
      lastAccess: '2025-10-20',
      users: Math.floor(Math.random() * 20) + 1,
      subscription: 'Standard - 10$/mois'
    }));

  // Solutions que l'utilisateur n'a pas encore
  const availableSolutions = allSolutions.filter(solution => !user?.subscriptions.includes(solution.id));

  const getStatusBadge = (status: string) => (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-300">
      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5"></div>
      Actif
    </span>
  );

  return (
    <div className="space-y-12">
      {/* Section des solutions de l'utilisateur */}
      <div>
        <h1 className="text-3xl font-bold text-white">Mes Solutions</h1>
        <p className="text-slate-400 mt-2">
          Gérez vos applications et suivez leur utilisation.
        </p>
      </div>

      {subscribedSolutions.length > 0 ? (
        <div className="space-y-6">
          {subscribedSolutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div key={solution.id} className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-lg bg-${solution.color}-500/10 flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 text-${solution.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{solution.name}</h3>
                        {getStatusBadge(solution.status)}
                      </div>
                      <p className="text-slate-400 mb-4">{solution.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div><span className="text-slate-500">Dernier accès :</span><div className="font-medium text-slate-300">{solution.lastAccess}</div></div>
                        <div><span className="text-slate-500">Utilisateurs :</span><div className="font-medium text-slate-300">{solution.users} actifs</div></div>
                        <div><span className="text-slate-500">Abonnement :</span><div className="font-medium text-slate-300">{solution.subscription}</div></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"><Settings className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-700">
                  <div className="flex items-center space-x-4">
                    <Link to={`/app/${solution.id}`} className={`inline-flex items-center px-4 py-2 bg-${solution.color}-600 hover:bg-${solution.color}-700 text-white font-medium rounded-lg transition-colors`}>
                      Accéder <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-800 rounded-xl border border-slate-700">
          <div className="w-24 h-24 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-12 h-12 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Aucune solution active</h3>
          <p className="text-slate-400 mb-6">Vous n'avez pas encore souscrit à nos solutions.</p>
        </div>
      )}

      {/* Section Catalogue */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Découvrez notre catalogue</h2>
          <p className="text-slate-400 mt-1">Explorez toutes les solutions que nous proposons pour booster votre activité.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableSolutions.map(solution => (
            <CatalogSolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySolutions;
