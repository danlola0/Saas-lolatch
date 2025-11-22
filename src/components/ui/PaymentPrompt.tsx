
import React from 'react';
import { DollarSign, CreditCard, Smartphone, Landmark, Shield, X } from 'lucide-react';

interface PaymentPromptProps {
  appName: string;
  isOpen: boolean;
  onClose: () => void;
}

const PaymentPrompt: React.FC<PaymentPromptProps> = ({ appName, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const paymentMethods = [
    { name: 'M-Pesa', icon: <Smartphone className="w-6 h-6 text-green-500" /> },
    { name: 'Airtel Money', icon: <Smartphone className="w-6 h-6 text-red-500" /> },
    { name: 'Equity Bank', icon: <Landmark className="w-6 h-6 text-blue-600" /> },
    { name: 'BCDC', icon: <Landmark className="w-6 h-6 text-yellow-500" /> },
    { name: 'PayPal', icon: <CreditCard className="w-6 h-6 text-blue-800" /> },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Votre demande de paiement a été soumise. Nous vous contacterons bientôt !');
    onClose(); // Ferme la modale après soumission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white"
          aria-label="Fermer"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-6 sm:p-8">
          <div className="text-center">
            <Shield className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-blue-500" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mt-4">
              Accès Exclusif à "{appName}"
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mt-2">
              Passez à la version complète pour débloquer toutes les fonctionnalités.
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-white">Méthodes de Paiement</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4 mt-4 text-center">
              {paymentMethods.map((method) => (
                <div key={method.name} className="p-2 sm:p-4 bg-gray-50 dark:bg-slate-700 rounded-lg flex flex-col items-center justify-center">
                  {method.icon}
                  <span className="mt-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-slate-200">{method.name}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-slate-200">
                Nom Complet
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Votre nom complet"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-slate-200">
                Email ou Numéro de téléphone
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                required
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="email@example.com ou +243..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base sm:text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Procéder au Paiement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPrompt;
