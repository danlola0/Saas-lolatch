import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const QuoteForm: React.FC = () => {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-copy-secondary">
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full bg-surface border border-stroke rounded-md shadow-sm py-3 px-4 text-copy-primary focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-copy-secondary">
          Entreprise (Optionnel)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="mt-1 block w-full bg-surface border border-stroke rounded-md shadow-sm py-3 px-4 text-copy-primary focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-copy-secondary">
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full bg-surface border border-stroke rounded-md shadow-sm py-3 px-4 text-copy-primary focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-copy-secondary">
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 block w-full bg-surface border border-stroke rounded-md shadow-sm py-3 px-4 text-copy-primary focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-copy-secondary">
          Décrivez votre projet
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="mt-1 block w-full bg-surface border border-stroke rounded-md shadow-sm py-3 px-4 text-copy-primary focus:ring-primary focus:border-primary"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-primary/20"
        >
          Envoyer la demande
        </button>
      </div>
    </form>
  );
};


const QuotePage: React.FC = () => {
  return (
    <div className="bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold font-display text-copy-primary mb-4">
            Demander un Devis Personnalisé
          </h1>
          <p className="text-lg text-copy-secondary max-w-2xl mx-auto">
            Décrivez-nous votre projet et nous reviendrons vers vous avec une proposition sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Formulaire */}
          <div className="bg-surface p-8 rounded-lg border border-stroke">
            <h2 className="text-2xl font-bold text-copy-primary mb-6">Votre projet</h2>
            <QuoteForm />
          </div>

          {/* Contact direct */}
          <div className="space-y-6">
            <div className="bg-surface p-8 rounded-lg border border-stroke">
              <h2 className="text-2xl font-bold text-copy-primary mb-4">Contact Direct</h2>
              <p className="text-copy-secondary mb-6">
                Pour les demandes urgentes, contactez-nous directement.
              </p>
              <div className="space-y-4">
                <a href="https://wa.me/243823263196" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-background transition-colors">
                  <MessageSquare className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="font-semibold text-copy-primary">WhatsApp</p>
                    <p className="text-sm text-copy-secondary">+243 823 263 196</p>
                  </div>
                </a>
                <a href="mailto:daniellolayongo@gmail.com" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-background transition-colors">
                  <Mail className="w-8 h-8 text-red-500" />
                  <div>
                    <p className="font-semibold text-copy-primary">Email</p>
                    <p className="text-sm text-copy-secondary">daniellolayongo@gmail.com</p>
                  </div>
                </a>
                 <a href="tel:+243823263196" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-background transition-colors">
                  <Phone className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="font-semibold text-copy-primary">Téléphone</p>
                    <p className="text-sm text-copy-secondary">+243 823 263 196</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
