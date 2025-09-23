import React, { useState } from 'react';
import { DollarSign, TrendingDown, TrendingUp, Printer, User, Hash } from 'lucide-react';

interface PayslipData {
  employeeName: string;
  employeeId: string;
  baseSalary: number;
  bonuses: { description: string; amount: number }[];
  deductions: { description: string; amount: number }[];
  totalBonuses: number;
  totalDeductions: number;
  grossSalary: number;
  netSalary: number;
  payPeriod: string;
}

const SalaryCalculator: React.FC = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [baseSalary, setBaseSalary] = useState<number>(0);
  const [bonuses, setBonuses] = useState<{ description: string; amount: number }[]>([{ description: 'Prime de performance', amount: 0 }]);
  const [deductions, setDeductions] = useState<{ description: string; amount: number }[]>([{ description: 'Cotisation Sociale', amount: 0 }]);
  const [payslip, setPayslip] = useState<PayslipData | null>(null);

  const handleBonusChange = (index: number, field: 'description' | 'amount', value: string | number) => {
    const newBonuses = [...bonuses];
    if (field === 'amount') {
      newBonuses[index][field] = parseFloat(value as string) || 0;
    } else {
      newBonuses[index][field] = value as string;
    }
    setBonuses(newBonuses);
  };

  const handleDeductionChange = (index: number, field: 'description' | 'amount', value: string | number) => {
    const newDeductions = [...deductions];
    if (field === 'amount') {
      newDeductions[index][field] = parseFloat(value as string) || 0;
    } else {
      newDeductions[index][field] = value as string;
    }
    setDeductions(newDeductions);
  };

  const addBonus = () => setBonuses([...bonuses, { description: '', amount: 0 }]);
  const addDeduction = () => setDeductions([...deductions, { description: '', amount: 0 }]);

  const calculateSalary = () => {
    const totalBonuses = bonuses.reduce((acc, bonus) => acc + bonus.amount, 0);
    const totalDeductions = deductions.reduce((acc, deduction) => acc + deduction.amount, 0);
    const grossSalary = baseSalary + totalBonuses;
    const netSalary = grossSalary - totalDeductions;

    setPayslip({
      employeeName,
      employeeId,
      baseSalary,
      bonuses,
      deductions,
      totalBonuses,
      totalDeductions,
      grossSalary,
      netSalary,
      payPeriod: new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
    });
  };

  const generatePayslipHTML = (data: PayslipData) => {
    const bonusesHTML = data.bonuses.map(b => `<div class="flex justify-between"><span class="text-gray-700">${b.description}</span><span class="font-medium">+ ${b.amount.toFixed(2)} €</span></div>`).join('');
    const deductionsHTML = data.deductions.map(d => `<div class="flex justify-between"><span class="text-gray-700">${d.description}</span><span class="font-medium">- ${d.amount.toFixed(2)} €</span></div>`).join('');

    return `
      <html>
        <head>
          <title>Fiche de Paie - ${data.employeeName}</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-100 p-8 font-sans">
          <div class="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg">
            <div class="flex justify-between items-center border-b-2 pb-4 mb-6">
              <h1 class="text-3xl font-bold text-gray-800">Fiche de Paie</h1>
              <div class="text-right">
                <h2 class="text-xl font-semibold">${data.employeeName}</h2>
                <p class="text-gray-600">ID Employé: ${data.employeeId}</p>
                <p class="text-gray-600">Période: ${data.payPeriod}</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-8">
              <div>
                <h3 class="text-lg font-semibold text-green-600 border-b pb-2 mb-3">Gains</h3>
                <div class="space-y-2">
                  <div class="flex justify-between"><span class="text-gray-700">Salaire de base</span><span class="font-medium">${data.baseSalary.toFixed(2)} €</span></div>
                  ${bonusesHTML}
                </div>
                <div class="flex justify-between font-bold text-lg border-t pt-2 mt-3">
                  <span>Salaire Brut Total</span>
                  <span>${data.grossSalary.toFixed(2)} €</span>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-red-600 border-b pb-2 mb-3">Retenues</h3>
                <div class="space-y-2">
                  ${deductionsHTML}
                </div>
                <div class="flex justify-between font-bold text-lg border-t pt-2 mt-3">
                  <span>Total des Retenues</span>
                  <span>${data.totalDeductions.toFixed(2)} €</span>
                </div>
              </div>
            </div>
            <div class="mt-10 bg-blue-50 p-6 rounded-lg text-center">
              <h3 class="text-xl font-bold text-blue-800">Salaire Net à Payer</h3>
              <p class="text-4xl font-extrabold text-blue-900 mt-2">${data.netSalary.toFixed(2)} €</p>
            </div>
          </div>
        </body>
      </html>
    `;
  };

  const handlePrint = () => {
    if (payslip) {
      const payslipHTML = generatePayslipHTML(payslip);
      const printWindow = window.open('', '_blank');
      printWindow?.document.write(payslipHTML);
      printWindow?.document.close();
      setTimeout(() => printWindow?.print(), 500);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mt-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Outil de Gestion des Salaires</h2>
      <p className="text-gray-600 mb-8">Calculez les salaires, les retenues et générez des fiches de paie simplifiées.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Section de saisie */}
        <div className="space-y-6">
          {/* Infos Employé */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Informations de l'employé</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="text-gray-400" />
                <input type="text" placeholder="Nom complet de l'employé" value={employeeName} onChange={e => setEmployeeName(e.target.value)} className="w-full p-3 border rounded-lg text-black" />
              </div>
              <div className="flex items-center gap-3">
                <Hash className="text-gray-400" />
                <input type="text" placeholder="Matricule (ID)" value={employeeId} onChange={e => setEmployeeId(e.target.value)} className="w-full p-3 border rounded-lg text-black" />
              </div>
            </div>
          </div>

          {/* Gains */}
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-4 border-b pb-2">Gains</h3>
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="text-gray-400" />
              <input type="number" placeholder="Salaire de base" value={baseSalary} onChange={e => setBaseSalary(parseFloat(e.target.value) || 0)} className="w-full p-3 border rounded-lg text-black" />
            </div>
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex gap-3 mb-2">
                <input type="text" placeholder="Description de la prime" value={bonus.description} onChange={e => handleBonusChange(index, 'description', e.target.value)} className="w-2/3 p-3 border rounded-lg text-black" />
                <input type="number" placeholder="Montant" value={bonus.amount} onChange={e => handleBonusChange(index, 'amount', e.target.value)} className="w-1/3 p-3 border rounded-lg text-black" />
              </div>
            ))}
            <button onClick={addBonus} className="text-blue-600 hover:text-blue-800 font-medium mt-2">+ Ajouter une prime</button>
          </div>

          {/* Retenues */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-4 border-b pb-2">Retenues</h3>
            {deductions.map((deduction, index) => (
              <div key={index} className="flex gap-3 mb-2">
                <input type="text" placeholder="Description de la retenue" value={deduction.description} onChange={e => handleDeductionChange(index, 'description', e.target.value)} className="w-2/3 p-3 border rounded-lg text-black" />
                <input type="number" placeholder="Montant" value={deduction.amount} onChange={e => handleDeductionChange(index, 'amount', e.target.value)} className="w-1/3 p-3 border rounded-lg text-black" />
              </div>
            ))}
            <button onClick={addDeduction} className="text-blue-600 hover:text-blue-800 font-medium mt-2">+ Ajouter une retenue</button>
          </div>
        </div>

        {/* Section de résultat */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Aperçu de la Fiche de Paie</h3>
          <button onClick={calculateSalary} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all mb-6">
            Calculer le Salaire
          </button>

          {payslip && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Salaire Brut</p>
                  <p className="font-bold text-lg text-green-600">{payslip.grossSalary.toFixed(2)} €</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Total Retenues</p>
                  <p className="font-bold text-lg text-red-600">{payslip.totalDeductions.toFixed(2)} €</p>
                </div>
              </div>
              <div className="p-6 bg-blue-100 rounded-lg shadow-inner mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-blue-800 font-bold text-xl">Salaire Net</p>
                  <p className="font-extrabold text-2xl text-blue-900">{payslip.netSalary.toFixed(2)} €</p>
                </div>
              </div>
              <button onClick={handlePrint} className="w-full mt-6 bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2">
                <Printer size={18} />
                Générer et Imprimer la Fiche de Paie
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;