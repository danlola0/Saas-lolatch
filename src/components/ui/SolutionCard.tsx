import React from 'react';
import { DivideIcon as LucideIcon, ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  color: string;
}

const colorClasses = {
  blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
  green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
  orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
  purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
  pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
  indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
  teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
  red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
};

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  color
}) => {
  const gradientClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1">
      {/* Icon */}
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradientClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index} className="text-sm text-gray-500 flex items-center">
            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className="w-full flex items-center justify-center space-x-2 text-gray-700 hover:text-gray-900 font-medium text-sm group-hover:text-blue-600 transition-colors">
        <span>En savoir plus</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default SolutionCard;