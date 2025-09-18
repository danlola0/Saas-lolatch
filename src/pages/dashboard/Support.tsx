import React, { useState } from 'react';
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  AlertTriangle,
  Send
} from 'lucide-react';

const Support: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [ticketData, setTicketData] = useState({
    subject: '',
    priority: 'medium',
    message: ''
  });

  const tickets = [
    {
      id: 'T-2024-001',
      subject: 'Problème de connexion à l\'application',
      status: 'open',
      priority: 'high',
      created: '12 Jan 2024',
      lastUpdate: '12 Jan 2024',
      category: 'Technique'
    },
    {
      id: 'T-2024-002',
      subject: 'Question sur la facturation',
      status: 'resolved',
      priority: 'medium',
      created: '08 Jan 2024',
      lastUpdate: '09 Jan 2024',
      category: 'Facturation'
    },
    {
      id: 'T-2024-003',
      subject: 'Demande de formation utilisateur',
      status: 'in_progress',
      priority: 'low',
      created: '05 Jan 2024',
      lastUpdate: '10 Jan 2024',
      category: 'Formation'
    }
  ];

  const faqItems = [
    {
      question: 'Comment réinitialiser mon mot de passe ?',
      answer: 'Cliquez sur "Mot de passe oublié" sur la page de connexion et suivez les instructions.'
    },
    {
      question: 'Comment ajouter de nouveaux utilisateurs ?',
      answer: 'Rendez-vous dans les paramètres de votre application, section "Utilisateurs", puis cliquez sur "Inviter".'
    },
    {
      question: 'Puis-je exporter mes données ?',
      answer: 'Oui, toutes nos applications incluent des fonctions d\'export en CSV et PDF.'
    },
    {
      question: 'Comment upgrader mon plan ?',
      answer: 'Visitez la page "Facturation" dans votre tableau de bord pour changer de plan.'
    }
  ];

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Chat en direct',
      description: 'Disponible 24/7 pour une assistance immédiate',
      action: 'Démarrer le chat',
      available: true
    },
    {
      icon: Phone,
      title: 'Support téléphonique',
      description: '+33 1 23 45 67 89',
      action: 'Appeler maintenant',
      hours: 'Lun-Ven 9h-18h'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'support@saasplatform.com',
      action: 'Envoyer un email',
      response: 'Réponse sous 2h'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Ouvert
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            En cours
          </span>
        );
      case 'resolved':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Résolu
          </span>
        );
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <span className="w-2 h-2 bg-red-500 rounded-full"></span>;
      case 'medium':
        return <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>;
      case 'low':
        return <span className="w-2 h-2 bg-green-500 rounded-full"></span>;
      default:
        return null;
    }
  };

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nouveau ticket:', ticketData);
    // Réinitialiser le formulaire
    setTicketData({ subject: '', priority: 'medium', message: '' });
    setSelectedCategory('');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Centre de Support</h1>
        <p className="text-gray-600 mt-2">
          Nous sommes là pour vous aider. Consultez notre FAQ ou contactez notre équipe.
        </p>
      </div>

      {/* Méthodes de contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {method.description}
              </p>
              {method.hours && (
                <p className="text-xs text-gray-500 mb-4">{method.hours}</p>
              )}
              {method.response && (
                <p className="text-xs text-gray-500 mb-4">{method.response}</p>
              )}
              {method.available && (
                <div className="flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs text-green-600 font-medium">En ligne</span>
                </div>
              )}
              <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                {method.action}
              </button>
            </div>
          );
        })}
      </div>

      {/* Créer un ticket */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Créer un ticket de support</h2>
        
        <form onSubmit={handleSubmitTicket} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Sélectionner une catégorie</option>
                <option value="technical">Problème technique</option>
                <option value="billing">Question facturation</option>
                <option value="feature">Demande de fonctionnalité</option>
                <option value="training">Formation</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priorité
              </label>
              <select
                value={ticketData.priority}
                onChange={(e) => setTicketData({ ...ticketData, priority: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="low">Basse</option>
                <option value="medium">Moyenne</option>
                <option value="high">Haute</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sujet
            </label>
            <input
              type="text"
              value={ticketData.subject}
              onChange={(e) => setTicketData({ ...ticketData, subject: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Décrivez brièvement votre problème"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description détaillée
            </label>
            <textarea
              value={ticketData.message}
              onChange={(e) => setTicketData({ ...ticketData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Décrivez en détail votre problème ou votre question..."
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <Send className="w-4 h-4 mr-2" />
              Créer le ticket
            </button>
          </div>
        </form>
      </div>

      {/* Mes tickets */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes tickets</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ticket
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sujet
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priorité
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Créé le
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {ticket.id}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{ticket.subject}</div>
                      <div className="text-sm text-gray-500">{ticket.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(ticket.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getPriorityBadge(ticket.priority)}
                        <span className="ml-2 text-sm text-gray-900 capitalize">
                          {ticket.priority}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ticket.created}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Voir détails
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;