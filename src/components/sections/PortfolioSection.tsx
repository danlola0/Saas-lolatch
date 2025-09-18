import React from 'react';
import { ExternalLink, Users, TrendingUp, Award } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      title: 'Pharmacie Chain Plus',
      description: 'Solution complète pour une chaîne de 15 pharmacies avec gestion centralisée des stocks.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg',
      category: 'Pharmacie',
      metrics: {
        users: '250+ utilisateurs',
        improvement: '+35% productivité',
        rating: '4.9/5 satisfaction'
      }
    },
    {
      title: 'École Internationale',
      description: 'Plateforme éducative pour 2000 étudiants avec gestion complète des notes et communications.',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg',
      category: 'Éducation',
      metrics: {
        users: '2000+ étudiants',
        improvement: '+50% communication',
        rating: '4.8/5 satisfaction'
      }
    },
    {
      title: 'Restaurant Le Gourmet',
      description: 'Système de commandes et gestion de stock pour restaurant gastronomique.',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
      category: 'Restaurant',
      metrics: {
        users: '50+ employés',
        improvement: '+25% efficacité',
        rating: '4.7/5 satisfaction'
      }
    },
    {
      title: 'Entrepôt LogiStock',
      description: 'Solution d\'inventaire en temps réel pour un entrepôt de 10,000m².',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg',
      category: 'Logistique',
      metrics: {
        users: '100+ employés',
        improvement: '+40% précision',
        rating: '4.9/5 satisfaction'
      }
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos solutions ont transformé les opérations 
            de centaines d'entreprises à travers différents secteurs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-200 overflow-hidden transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700">{project.metrics.users}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{project.metrics.improvement}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">{project.metrics.rating}</span>
                  </div>
                </div>

                <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm group">
                  <span>Voir le cas d'usage</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats globales */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Projets réalisés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50k+</div>
              <div className="text-sm text-gray-600">Utilisateurs actifs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support technique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;