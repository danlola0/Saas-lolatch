import React from 'react';
import { Link } from 'react-router-dom';
import { Hospital, Users, BedDouble, ClipboardPlus, UserPlus, MoreVertical, FileText, Edit, ArrowLeft } from 'lucide-react';

// --- Composant pour les cartes de statistiques ---
const StatCard = ({ icon: Icon, title, value, change, color }) => (
  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-center space-x-4">
    <div className={`w-12 h-12 rounded-lg bg-${color}-500/10 flex items-center justify-center`}>
      <Icon className={`w-6 h-6 text-${color}-400`} />
    </div>
    <div>
      <p className="text-sm text-slate-400">{title}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  </div>
);

// --- Données de démonstration ---
const mockPatients = [
  { id: 1, name: 'Jean Dupont', age: 45, admissionDate: '2025-10-18', room: '302A', diagnosis: 'Pneumonie', status: 'Stable' },
  { id: 2, name: 'Marie Curie', age: 62, admissionDate: '2025-10-19', room: '410B', diagnosis: 'Insuffisance cardiaque', status: 'En observation' },
  { id: 3, name: 'Pierre Martin', age: 33, admissionDate: '2025-10-20', room: '205A', diagnosis: 'Fracture du fémur', status: 'Critique' },
  { id: 4, name: 'Sophie Dubois', age: 51, admissionDate: '2025-10-20', room: '302C', diagnosis: 'Diabète de type 2', status: 'Stable' },
  { id: 5, name: 'Luc Bernard', age: 76, admissionDate: '2025-10-17', room: '501A', diagnosis: 'Post-opératoire', status: 'Stable' },
];

const HospitalApp: React.FC = () => {

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Stable':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-300">Stable</span>;
      case 'En observation':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-300">En observation</span>;
      case 'Critique':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-500/20 text-red-300">Critique</span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-500/20 text-slate-300">{status}</span>;
    }
  };

  return (
    <div className="p-6 bg-slate-900 min-h-screen text-white">
      {/* --- En-tête --- */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard/solutions" className="p-2 rounded-md hover:bg-slate-700 transition-colors">
            <ArrowLeft className="w-6 h-6 text-slate-300" />
          </Link>
          <div className="flex items-center space-x-3">
            <Hospital className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold">Gestion d'Hôpital</h1>
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
          <UserPlus className="w-5 h-5" />
          <span>Ajouter un patient</span>
        </button>
      </header>

      {/* --- Cartes de statistiques --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard icon={Users} title="Total Patients" value="128" color="blue" />
        <StatCard icon={BedDouble} title="Lits Occupés" value="96 / 150" color="purple" />
        <StatCard icon={ClipboardPlus} title="Admissions du Jour" value="12" color="green" />
      </div>

      {/* --- Tableau des patients --- */}
      <div className="bg-slate-800 rounded-xl border border-slate-700">
        <div className="p-4 border-b border-slate-700">
          <h2 className="text-xl font-semibold">Liste des Patients Actuels</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-400 uppercase bg-slate-800">
              <tr>
                <th scope="col" className="px-6 py-3">Nom du Patient</th>
                <th scope="col" className="px-6 py-3">Âge</th>
                <th scope="col" className="px-6 py-3">Date d'admission</th>
                <th scope="col" className="px-6 py-3">Chambre</th>
                <th scope="col" className="px-6 py-3">Diagnostic Principal</th>
                <th scope="col" className="px-6 py-3">Statut</th>
                <th scope="col" className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockPatients.map((patient) => (
                <tr key={patient.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                  <td className="px-6 py-4 font-medium text-white">{patient.name}</td>
                  <td className="px-6 py-4">{patient.age}</td>
                  <td className="px-6 py-4">{patient.admissionDate}</td>
                  <td className="px-6 py-4">{patient.room}</td>
                  <td className="px-6 py-4">{patient.diagnosis}</td>
                  <td className="px-6 py-4">{getStatusBadge(patient.status)}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button className="p-2 text-slate-400 hover:text-white"><FileText className="w-4 h-4" /></button>
                      <button className="p-2 text-slate-400 hover:text-white"><Edit className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HospitalApp;
