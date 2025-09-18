import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  FileText,
  Calendar,
  BarChart3,
  Settings,
  ArrowLeft,
  UserCheck,
  Award,
  TrendingUp
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const SchoolDashboard: React.FC = () => {
  const gradeData = [
    { name: 'Excellent', value: 25, color: '#10B981' },
    { name: 'Bien', value: 35, color: '#3B82F6' },
    { name: 'Moyen', value: 30, color: '#F59E0B' },
    { name: 'Faible', value: 10, color: '#EF4444' }
  ];

  const attendanceData = [
    { name: 'Lun', present: 180, absent: 20 },
    { name: 'Mar', present: 175, absent: 25 },
    { name: 'Mer', present: 185, absent: 15 },
    { name: 'Jeu', present: 170, absent: 30 },
    { name: 'Ven', present: 165, absent: 35 }
  ];

  const stats = [
    {
      name: 'Élèves inscrits',
      value: '1,234',
      change: '+23',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      name: 'Enseignants',
      value: '45',
      change: '+2',
      icon: UserCheck,
      color: 'text-green-600'
    },
    {
      name: 'Cours cette semaine',
      value: '127',
      change: '+5',
      icon: BookOpen,
      color: 'text-purple-600'
    },
    {
      name: 'Taux de réussite',
      value: '87%',
      change: '+3%',
      icon: Award,
      color: 'text-yellow-600'
    }
  ];

  const recentActivities = [
    { type: 'enrollment', student: 'Emma Dubois', class: '5ème A', time: '10:30' },
    { type: 'grade', student: 'Lucas Martin', subject: 'Mathématiques', grade: '16/20', time: '09:45' },
    { type: 'absence', student: 'Julie Laurent', class: '3ème B', time: '09:00' },
    { type: 'payment', student: 'Pierre Durand', amount: '450€', time: '08:30' }
  ];

  const upcomingEvents = [
    { date: '15 Jan', event: 'Réunion parents-professeurs', class: 'Toutes classes' },
    { date: '18 Jan', event: 'Examen de mathématiques', class: '4ème A' },
    { date: '20 Jan', event: 'Sortie pédagogique', class: '6ème B' },
    { date: '22 Jan', event: 'Conseil de classe', class: '3ème C' }
  ];

  return (
    <div className="space-y-8">
      {/* Stats principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600">
                    {stat.change} ce mois
                  </p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Répartition des notes */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Répartition des notes</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={gradeData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {gradeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Assiduité */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Assiduité cette semaine</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="present" fill="#10B981" name="Présents" />
              <Bar dataKey="absent" fill="#EF4444" name="Absents" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Événements à venir */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Événements à venir</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{event.event}</p>
                  <p className="text-sm text-gray-600">{event.class}</p>
                  <p className="text-xs text-gray-500">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activités récentes */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Activités récentes</h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'enrollment' ? 'bg-green-500' :
                  activity.type === 'grade' ? 'bg-blue-500' :
                  activity.type === 'absence' ? 'bg-red-500' :
                  'bg-yellow-500'
                }`}></div>
                <div>
                  {activity.type === 'enrollment' && (
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.student}</span> inscrit en {activity.class}
                    </p>
                  )}
                  {activity.type === 'grade' && (
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.student}</span> - {activity.subject}: {activity.grade}
                    </p>
                  )}
                  {activity.type === 'absence' && (
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.student}</span> absent en {activity.class}
                    </p>
                  )}
                  {activity.type === 'payment' && (
                    <p className="text-sm text-gray-900">
                      Paiement de <span className="font-medium">{activity.amount}</span> par {activity.student}
                    </p>
                  )}
                </div>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SchoolApp: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Tableau de bord', href: '/app/school', icon: BarChart3 },
    { name: 'Étudiants', href: '/app/school/students', icon: Users },
    { name: 'Enseignants', href: '/app/school/teachers', icon: UserCheck },
    { name: 'Cours', href: '/app/school/courses', icon: BookOpen },
    { name: 'Notes', href: '/app/school/grades', icon: FileText },
    { name: 'Calendrier', href: '/app/school/calendar', icon: Calendar },
    { name: 'Rapports', href: '/app/school/reports', icon: TrendingUp },
    { name: 'Paramètres', href: '/app/school/settings', icon: Settings }
  ];

  const isActive = (href: string) => {
    if (href === '/app/school') {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de l'application */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au dashboard
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Gestion d'École</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">École Internationale</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar de l'application */}
        <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'bg-green-50 text-green-700 border-r-2 border-green-700'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Contenu principal */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<SchoolDashboard />} />
            <Route path="/students" element={
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Gestion des Étudiants</h2>
                <p className="text-gray-600">Module en cours de développement</p>
              </div>
            } />
            <Route path="/teachers" element={
              <div className="text-center py-12">
                <UserCheck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Gestion des Enseignants</h2>
                <p className="text-gray-600">Module en cours de développement</p>
              </div>
            } />
            <Route path="/courses" element={
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Gestion des Cours</h2>
                <p className="text-gray-600">Module en cours de développement</p>
              </div>
            } />
            <Route path="/*" element={
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Module en développement</h2>
                <p className="text-gray-600">Cette fonctionnalité sera bientôt disponible</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default SchoolApp;