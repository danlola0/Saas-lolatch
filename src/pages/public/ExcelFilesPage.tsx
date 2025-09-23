import React from 'react';
import { ShoppingCart, FileSpreadsheet } from 'lucide-react';

const excelFiles = [
  {
    name: 'Gestion de Stock',
    description: 'Suivez vos ventes et vos entrées de stock de manière simple et automatique.',
    price: '15$',
    filePath: '/excel-templates/gestion-de-stock.xlsx',
  },
  {
    name: 'Suivi de Caisse',
    description: 'Contrôlez vos flux de trésorerie quotidiens avec précision et facilité.',
    price: '10$',
    filePath: '/excel-templates/suivi-de-caisse.xlsx',
  },
  {
    name: 'Gestion des Salaires',
    description: 'Calcul automatique des salaires, déductions et génération de fiches de paie.',
    price: '20$',
    filePath: '/excel-templates/gestion-des-salaires.xlsx',
  },
  {
    name: 'Facturation Automatique',
    description: 'Créez et envoyez des factures professionnelles en quelques clics.',
    price: '15$',
    filePath: '/excel-templates/facturation-automatique.xlsx',
  },
  {
    name: 'Suivi des Ventes',
    description: 'Tableau de bord des ventes, classement des produits et suivi des clients fidèles.',
    price: '15$',
    filePath: '/excel-templates/suivi-des-ventes.xlsx',
  },
  {
    name: 'Gestion des Achats',
    description: 'Suivi des commandes fournisseurs, contrôle des paiements et historique des achats.',
    price: '15$',
    filePath: '/excel-templates/gestion-des-achats.xlsx',
  },
  {
    name: 'Gestion de Projets',
    description: 'Suivi des tâches avec échéances, diagramme de Gantt simplifié et suivi des budgets.',
    price: '15$',
    filePath: '/excel-templates/gestion-de-projets.xlsx',
  },
  {
    name: 'Analyse Financière',
    description: 'Calcul des marges, projection de trésorerie et tableaux de bord financiers.',
    price: '20$',
    filePath: '/excel-templates/analyse-financiere.xlsx',
  },
  {
    name: 'Gestion RH',
    description: 'Gérez efficacement vos ressources humaines. Suivi complet des employés, gestion des congés, absences, contrats, et évaluation des performances.',
    price: '15$',
    filePath: '/excel-templates/gestion-rh.xlsx',
  },
  {
    name: 'Budget Familial',
    description: 'Planifiez et suivez les dépenses de votre ménage pour atteindre vos objectifs financiers.',
    price: '10$',
    filePath: '/excel-templates/budget-familial.xlsx',
  },
];

const ExcelFilesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Texte d'introduction */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Prêts à l'emploi</h2>
          <h1 className="mt-2 text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Fichiers Excel Professionnels
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Découvrez nos modèles prêts à l'emploi pour simplifier votre gestion. Chaque fichier est entièrement personnalisable.
          </p>
        </div>

        {/* Grille des fichiers Excel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {excelFiles.map((file, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FileSpreadsheet className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-lg font-bold text-gray-800">
                    {file.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {file.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {file.description}
                </p>
              </div>
              <div className="bg-white rounded-b-2xl p-6 pt-0">
                <a
                  href={file.filePath}
                  download
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Acheter maintenant</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExcelFilesPage;
