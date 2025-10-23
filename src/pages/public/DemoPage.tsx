import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Stethoscope, Utensils, School, Warehouse, Building, Hospital, ShoppingCart, Bus, Hotel, Store, Wrench, Hammer, Landmark, Calendar, GraduationCap } from 'lucide-react';

const appDemos = [
  { name: 'Gestion de Pharmacie', path: '/demo/app/pharmacy', icon: <Stethoscope className="w-12 h-12 text-blue-400" /> },
  { name: 'Gestion d\'École', path: '/demo/app/school', icon: <School className="w-12 h-12 text-blue-400" /> },
  { name: 'Gestion de Restaurant', path: '/demo/app/restaurant', icon: <Utensils className="w-12 h-12 text-blue-400" /> },
  { name: 'Gestion de Stock', path: '/demo/app/stock', icon: <Warehouse className="w-12 h-12 text-blue-400" /> },
  { name: 'Comptabilité Facile', path: '/demo/app/comptafacile', icon: <Briefcase className="w-12 h-12 text-blue-400" /> },
  { name: 'Quincaillerie Pro', path: '/demo/app/quincaillerie', icon: <Building className="w-12 h-12 text-blue-400" /> },
  { name: 'Gestion Hospitalière', path: '/demo/app/hospital', icon: <Hospital className="w-12 h-12 text-blue-400" /> },
  { name: 'Gestion de Supermarché', path: '/demo/app/supermarket', icon: <ShoppingCart className="w-12 h-12 text-blue-400" /> },
  { name: 'Gestion de Transport', path: '/demo/app/transport', icon: <Bus className="w-12 h-12 text-blue-400" /> },
  { name: 'Gestion d\'Hôtel', path: '/demo/app/hotel', icon: <Hotel className="w-12 h-12 text-blue-400" /> },
  { name: 'Gestion de Boutique', path: '/demo/app/shop', icon: <Store className="w-12 h-12 text-blue-400" /> },
  { name: 'Gestion de Garage', path: '/demo/app/garage', icon: <Wrench className="w-12 h-12 text-blue-400" /> },
  { name: 'Gestion de Construction', path: '/demo/app/construction', icon: <Hammer className="w-12 h-12 text-blue-400" /> },
  { name: 'Gestion de Microfinance', path: '/demo/app/microfinance', icon: <Landmark className="w-12 h-12 text-blue-400" /> },
  { name: 'Gestion d\'Événements', path: '/demo/app/events', icon: <Calendar className="w-12 h-12 text-blue-400" /> },
  { name: 'Gestion de Formation', path: '/demo/app/training', icon: <GraduationCap className="w-12 h-12 text-blue-400" /> },
];

const DemoPage: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Démonstrations des Applications
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            Explorez nos solutions en action. Cliquez sur une application pour voir un aperçu de ses fonctionnalités.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {appDemos.map((app) => (
            <Link
              key={app.name}
              to={app.path}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-slate-700 hover:border-blue-500 transform hover:-translate-y-2"
            >
              <div className="mb-4">
                {app.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{app.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
