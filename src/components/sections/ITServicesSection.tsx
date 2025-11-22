import React from 'react';
import { ArrowRight } from 'lucide-react';

const itServices = [
  {
    image: '/images/it 1.jpg',
    title: 'Installation de caméras de surveillance (CCTV)',
    description: 'Installation de caméras IP/analogiques, configuration DVR/NVR, accès à distance et maintenance.',
  },
  {
    image: '/images/it 2.jpg',
    title: 'Configuration de réseaux LAN, WAN & Wi-Fi',
    description: 'Câblage, configuration de switchs (VLAN), routeurs, optimisation Wi-Fi et sécurisation de votre réseau.',
  },
  {
    image: '/images/it 3.jpg',
    title: 'Installation et configuration de serveurs',
    description: 'Serveurs Windows/Linux, Active Directory, serveurs de fichiers (NAS) et sauvegarde automatique.',
  },
  {
    image: '/images/it 4.png',
    title: 'Maintenance & dépannage informatique',
    description: 'Installation de logiciels, formatage, suppression de virus, réparation PC/laptop, sur site ou à distance.',
  },
  {
    image: '/images/it 1.jpg',
    title: 'Cybersécurité & protection des équipements',
    description: 'Audit de sécurité, installation de firewall, contrôle d’accès et bonnes pratiques de sécurité.',
  },
  {
    image: '/images/it 2.jpg',
    title: 'Support technique & assistance continue',
    description: 'Assistance technique 7j/7, résolution de problèmes à distance et accompagnement pour vos projets IT.',
  },
];

const ITServicesSection: React.FC = () => {
  return (
    <section id="it-services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Services IT & Solutions Techniques</h2>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Une expertise technique à votre service
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
            Nous proposons un ensemble complet de services informatiques adaptés aux besoins des entreprises et particuliers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itServices.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <img className="h-56 w-full object-cover" src={service.image} alt={service.title} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a 
            href="/devis" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Obtenir un devis IT
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ITServicesSection;
