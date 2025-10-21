import React, { useState } from 'react';
import { db } from '../../lib/firebaseClient'; // Import de la config Firebase
import { collection, addDoc } from "firebase/firestore"; 

const QuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    appType: 'Gestion de stock',
    features: '',
    budget: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Ajoute un nouveau document dans la collection "quotes"
      await addDoc(collection(db, "quotes"), {
        ...formData,
        createdAt: new Date() // Ajoute la date de création
      });

      setFormStatus('success');
      setFormData({
        fullName: '',
        contact: '',
        appType: 'Gestion de stock',
        features: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-[#F1F5F9] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-10 rounded-2xl shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-[#0F172A]">
            Commander une application sur mesure
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Remplissez le formulaire et nous vous contacterons sous 24h.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-5">
            <InputField label="Nom complet ou nom d’entreprise" name="fullName" value={formData.fullName} onChange={handleChange} required />
            <InputField label="Email ou numéro WhatsApp" name="contact" value={formData.contact} onChange={handleChange} required />
            <div>
              <label htmlFor="appType" className="block text-sm font-medium text-gray-700">Type d’application désirée</label>
              <select
                id="appType"
                name="appType"
                value={formData.appType}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Gestion de stock</option>
                <option>Facturation</option>
                <option>École</option>
                <option>Vente</option>
                <option>Autre</option>
              </select>
            </div>
            <TextAreaField label="Fonctionnalités souhaitées" name="features" value={formData.features} onChange={handleChange} required />
            <InputField label="Budget estimé (Optionnel)" name="budget" value={formData.budget} onChange={handleChange} />
            <TextAreaField label="Message complémentaire" name="message" value={formData.message} onChange={handleChange} />
          </div>

          <div>
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2563EB] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
            >
              {formStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>
          </div>

          {formStatus === 'success' && (
            <p className="text-center text-green-600">Votre demande a été envoyée avec succès !</p>
          )}
          {formStatus === 'error' && (
            <p className="text-center text-red-600">Une erreur est survenue. Veuillez réessayer.</p>
          )}
        </form>
      </div>
    </div>
  );
};

// Composants d'aide pour les champs de formulaire
const InputField = ({ label, name, value, onChange, required = false }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      id={name}
      name={name}
      type="text"
      required={required}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, required = false }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <textarea
      id={name}
      name={name}
      rows={4}
      required={required}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

export default QuotePage;