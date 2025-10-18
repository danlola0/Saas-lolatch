import React from 'react';
import { Check, DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Plan {
  price: number;
  features: string[];
}

interface PricingCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  saas: Plan;
  local: Plan;
  billingCycle: 'monthly' | 'annually';
}

const colorClasses = {
  blue: 'from-blue-500 to-blue-600',
  orange: 'from-orange-500 to-orange-600',
  green: 'from-green-500 to-green-600',
  purple: 'from-purple-500 to-purple-600',
  red: 'from-red-500 to-red-600',
  yellow: 'from-yellow-500 to-yellow-600',
};

const PlanDisplay: React.FC<{
  title: string;
  price: number;
  period: string;
  features: string[];
}> = ({ title, price, period, features }) => (
  <div className="flex-1 flex flex-col p-4 rounded-lg border border-stroke h-full">
    <h4 className="font-semibold text-copy-primary text-center mb-4">{title}</h4>
    <div className="flex items-baseline justify-center mb-4">
      <span className="text-3xl font-bold text-copy-primary">{price}€</span>
      <span className="text-copy-secondary ml-1">{period}</span>
    </div>
    <ul className="space-y-2 text-sm flex-grow mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
          <span className="text-copy-secondary">{feature}</span>
        </li>
      ))}
    </ul>
    <div className="space-y-3 mt-auto">
      <Link
        to="/register"
        className="block w-full text-center py-2 px-3 rounded-lg font-semibold transition-all bg-primary hover:bg-primary/90 text-white text-sm"
      >
        S'abonner
      </Link>
      <Link
        to="/devis"
        className="block w-full text-center py-2 px-3 rounded-lg font-semibold transition-all bg-surface hover:bg-background border border-stroke text-sm"
      >
        Essai gratuit 3 jours
      </Link>
    </div>
  </div>
);

const PricingCard: React.FC<PricingCardProps> = ({
  id,
  title,
  icon: Icon,
  color,
  saas,
  local,
  billingCycle,
}) => {
  const gradientClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  const calculatePrice = (price: number) => {
    return billingCycle === 'annually' ? Math.round(price * 12 * 0.8) : price;
  };

  const saasPrice = calculatePrice(saas.price);
  const localPrice = calculatePrice(local.price);
  const period = billingCycle === 'annually' ? '/an' : '/mois';

  return (
    <div id={id} className="bg-surface rounded-2xl border border-stroke p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/40">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradientClass} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold font-display text-copy-primary">{title}</h3>
      </div>

      {/* Options */}
      <div className="flex-grow flex flex-col sm:flex-row gap-4">
        <PlanDisplay
          title="En ligne (SaaS)"
          price={saasPrice}
          period={period}
          features={saas.features}
        />
        <PlanDisplay
          title="Local (PC)"
          price={localPrice}
          period={period}
          features={local.features}
        />
      </div>
    </div>
  );
};

export default PricingCard;