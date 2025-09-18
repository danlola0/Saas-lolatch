import React from 'react';
import { Download, CreditCard, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const Billing: React.FC = () => {
  const subscriptions = [
    {
      id: 1,
      name: 'Gestion de Pharmacie',
      plan: 'Standard',
      price: 99,
      status: 'active',
      nextBilling: '2024-02-15',
      features: ['3 utilisateurs', 'Support prioritaire', '100GB stockage']
    },
    {
      id: 2,
      name: 'Gestion d\'École',
      plan: 'Premium',
      price: 149,
      status: 'active',
      nextBilling: '2024-02-10',
      features: ['Utilisateurs illimités', 'Support 24/7', 'Stockage illimité']
    }
  ];

  const invoices = [
    {
      id: 'INV-2024-001',
      date: '15 Jan 2024',
      amount: 248,
      status: 'paid',
      description: 'Abonnement mensuel - Janvier 2024'
    },
    {
      id: 'INV-2023-012',
      date: '15 Déc 2023',
      amount: 248,
      status: 'paid',
      description: 'Abonnement mensuel - Décembre 2023'
    },
    {
      id: 'INV-2023-011',
      date: '15 Nov 2023',
      amount: 248,
      status: 'paid',
      description: 'Abonnement mensuel - Novembre 2023'
    },
    {
      id: 'INV-2023-010',
      date: '15 Oct 2023',
      amount: 149,
      status: 'paid',
      description: 'Abonnement mensuel - Octobre 2023'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Actif
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            En attente
          </span>
        );
      case 'cancelled':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <AlertCircle className="w-3 h-3 mr-1" />
            Annulé
          </span>
        );
      default:
        return null;
    }
  };

  const getInvoiceStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Payée
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            En attente
          </span>
        );
      case 'overdue':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            En retard
          </span>
        );
      default:
        return null;
    }
  };

  const totalMonthly = subscriptions.reduce((sum, sub) => sum + sub.price, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Facturation</h1>
        <p className="text-gray-600 mt-2">
          Gérez vos abonnements et consultez l'historique de vos paiements
        </p>
      </div>

      {/* Résumé mensuel */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-blue-100">Coût mensuel total</h2>
            <p className="text-3xl font-bold">{totalMonthly}€</p>
            <p className="text-blue-100">pour {subscriptions.length} solutions actives</p>
          </div>
          <div className="text-right">
            <p className="text-blue-100">Prochain paiement</p>
            <p className="text-xl font-semibold">10 février 2024</p>
          </div>
        </div>
      </div>

      {/* Abonnements actifs */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Abonnements Actifs</h2>
        <div className="space-y-4">
          {subscriptions.map((subscription) => (
            <div key={subscription.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {subscription.name}
                    </h3>
                    {getStatusBadge(subscription.status)}
                  </div>
                  <p className="text-gray-600 mb-4">
                    Plan {subscription.plan} - {subscription.price}€/mois
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {subscription.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500">
                    Prochain paiement : {subscription.nextBilling}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium text-sm">
                    Modifier
                  </button>
                  <button className="px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium text-sm rounded-lg transition-colors">
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Méthode de paiement */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Méthode de paiement</h3>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
            <CreditCard className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
            <p className="text-sm text-gray-500">Expire 12/2025</p>
          </div>
          <button className="px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors">
            Modifier
          </button>
        </div>
      </div>

      {/* Historique des factures */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Historique des factures</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Facture
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Montant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {invoice.id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{invoice.date}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{invoice.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {invoice.amount}€
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getInvoiceStatusBadge(invoice.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-medium rounded-md transition-colors">
                        <Download className="w-4 h-4 mr-1" />
                        Télécharger
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;