import React from 'react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period,
  description,
  features,
  buttonText,
  popular
}) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-sm border-2 p-8 ${
      popular ? 'border-blue-500 shadow-blue-100 shadow-lg' : 'border-gray-200'
    } transition-all hover:shadow-lg`}>
      
      {/* Badge populaire */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
            <Star className="w-4 h-4" />
            <span>Plus populaire</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-gray-900">{price}€</span>
          <span className="text-gray-600 ml-1">/{period}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        to="/register"
        className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all ${
          popular
            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
        }`}
      >
        {buttonText}
      </Link>

      {/* Garantie */}
      <p className="text-center text-sm text-gray-500 mt-4">
        14 jours d'essai gratuit
      </p>
    </div>
  );
};

export default PricingCard;