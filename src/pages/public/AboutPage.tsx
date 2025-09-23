import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-display">
              À propos du <span className="text-primary">Directeur Général</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 font-sans">
              Fondateur et visionnaire de Lolatech
            </p>
          </div>

          {/* Section principale avec photo */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  className="h-full w-full object-cover object-top transform transition-transform duration-500 hover:scale-105" 
                  src="/images/danlola copie.jpg" 
                  alt="Daniel Lola, Directeur Général de Lolatech" 
                />
              </div>
              <div className="p-8 md:p-10 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-display">Je m’appelle Daniel Lola</h2>
                <div className="text-gray-700 space-y-4 text-base md:text-lg font-sans leading-relaxed">
                  <p>
                    Fondateur et Directeur Général de Lolatech. Passionné par la technologie et l’innovation, j’ai créé cette entreprise avec un objectif clair : aider les particuliers, les PME et les grandes entreprises à digitaliser leurs activités à travers des solutions modernes et accessibles.
                  </p>
                  <p>
                    Je suis licencié à l’Université de Kinshasa. Au cours de mon parcours professionnel, j’ai eu la chance de collaborer avec plusieurs entreprises, ce qui m’a permis de comprendre les véritables préoccupations qui touchent la République Démocratique du Congo, en particulier la ville de Kinshasa où je vis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section Vision et Équipe */}
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 text-gray-700 space-y-4 text-base md:text-lg bg-white p-8 rounded-2xl shadow-xl font-sans leading-relaxed">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-display">Notre Mission</h3>
              <p>
                C’est face à ces défis que j’ai décidé de mettre en place cette plateforme, afin de faciliter l’accès aux services numériques et de simplifier la gestion quotidienne des entreprises à travers la digitalisation.
              </p>
              <p>
                Je ne travaille pas seul : derrière chaque projet, il y a une équipe dynamique et engagée, prête à offrir le meilleur pour répondre aux besoins des clients.
              </p>
            </div>
            <div className="md:col-span-2">
              <img 
                className="rounded-2xl shadow-xl w-full h-full object-cover transform transition-transform duration-500 hover:scale-105 hover:rotate-3" 
                src="/images/IMG-20231227-WA0089.jpg" 
                alt="L'équipe Lolatech"
              />
            </div>
          </div>

          {/* Section Loisirs et Conclusion */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="md:flex items-center gap-8">
              <div className="flex-1 text-gray-700 space-y-4 text-base md:text-lg font-sans leading-relaxed">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-display">Au-delà du travail</h3>
                <p>
                  En dehors de la technologie, j’aime pratiquer la pêche — une activité qui m’apprend la patience, la stratégie et la persévérance, des valeurs que j’applique aussi dans ma manière de diriger.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <p className="text-center text-xl font-semibold text-primary p-6 border-2 border-primary rounded-lg font-display">
                  "Faites-nous confiance, et vous ne serez jamais déçus..."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
