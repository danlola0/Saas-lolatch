import React from 'react';

const PaymentPartnersSection: React.FC = () => {
  // Using local images from the public/images directory.
  const partners = [
    { name: 'M-Pesa', logoUrl: '/images/mpesa.png' },
    { name: 'Orange Money', logoUrl: '/images/OrangeMoney.jpg' },
    { name: 'Airtel Money', logoUrl: '/images/airtelmoney.jpg' },
    { name: 'Equity Bank', logoUrl: '/images/equitybank.png' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900 dark:text-white">
          Nos partenaires de paiement de confiance
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {partners.map((partner) => (
            <img
              key={partner.name}
              className="col-span-1 max-h-16 w-full object-contain"
              src={partner.logoUrl}
              alt={partner.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentPartnersSection;
