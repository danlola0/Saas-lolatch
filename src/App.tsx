import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Lazy load pages
const HomePage = lazy(() => import('./pages/public/HomePage'));
const PricingPage = lazy(() => import('./pages/public/PricingPage'));
const QuotePage = lazy(() => import('./pages/public/QuotePage'));
const ExcelFilesPage = lazy(() => import('./pages/public/ExcelFilesPage'));
const AboutPage = lazy(() => import('./pages/public/AboutPage'));
const DemoPage = lazy(() => import('./pages/public/DemoPage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('./pages/auth/ForgotPasswordPage'));
const DashboardHome = lazy(() => import('./pages/dashboard/DashboardHome'));
const MySolutions = lazy(() => import('./pages/dashboard/MySolutions'));
const Billing = lazy(() => import('./pages/dashboard/Billing'));
const Profile = lazy(() => import('./pages/dashboard/Profile'));
const Support = lazy(() => import('./pages/dashboard/Support'));

// --- Applications existantes ---
const PharmacyApp = lazy(() => import('./pages/apps/PharmacyApp'));
const SchoolApp = lazy(() => import('./pages/apps/SchoolApp'));
const RestaurantApp = lazy(() => import('./pages/apps/RestaurantApp'));
const StockApp = lazy(() => import('./pages/apps/StockApp'));
const ComptaFacileApp = lazy(() => import('./pages/apps/ComptaFacileApp'));
const QuincaillerieProApp = lazy(() => import('./pages/apps/QuincaillerieProApp'));

// --- Nouvelles applications ---
const HospitalApp = lazy(() => import('./pages/apps/HospitalApp'));
const SupermarketApp = lazy(() => import('./pages/apps/SupermarketApp'));
const TransportApp = lazy(() => import('./pages/apps/TransportApp'));
const HotelApp = lazy(() => import('./pages/apps/HotelApp'));
const ShopApp = lazy(() => import('./pages/apps/ShopApp'));
const GarageApp = lazy(() => import('./pages/apps/GarageApp'));
const ConstructionApp = lazy(() => import('./pages/apps/ConstructionApp'));
const MicrofinanceApp = lazy(() => import('./pages/apps/MicrofinanceApp'));
const EventsApp = lazy(() => import('./pages/apps/EventsApp'));
const TrainingApp = lazy(() => import('./pages/apps/TrainingApp'));


// Composant pour protéger les routes privées
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

// Composant pour rediriger les utilisateurs connectés
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-slate-900">
          <Suspense fallback={<div className="flex justify-center items-center h-screen text-white">Chargement...</div>}>
            <Routes>
              {/* Routes publiques */}
              <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
              <Route path="/tarifs" element={<PublicLayout><PricingPage /></PublicLayout>} />
              <Route path="/pricing" element={<Navigate to="/tarifs" />} />
              <Route path="/devis" element={<PublicLayout><QuotePage /></PublicLayout>} />
              <Route path="/excel-files" element={<PublicLayout><ExcelFilesPage /></PublicLayout>} />
              <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
              <Route path="/demo" element={<PublicLayout><DemoPage /></PublicLayout>} />
              
              {/* Routes d'authentification */}
              <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
              <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
              <Route path="/forgot-password" element={<PublicRoute><ForgotPasswordPage /></PublicRoute>} />

              {/* Routes privées - Dashboard */}
              <Route path="/dashboard" element={<PrivateRoute><DashboardLayout><DashboardHome /></DashboardLayout></PrivateRoute>} />
              <Route path="/dashboard/solutions" element={<PrivateRoute><DashboardLayout><MySolutions /></DashboardLayout></PrivateRoute>} />
              <Route path="/dashboard/billing" element={<PrivateRoute><DashboardLayout><Billing /></DashboardLayout></PrivateRoute>} />
              <Route path="/dashboard/profile" element={<PrivateRoute><DashboardLayout><Profile /></DashboardLayout></PrivateRoute>} />
              <Route path="/dashboard/support" element={<PrivateRoute><DashboardLayout><Support /></DashboardLayout></PrivateRoute>} />

              {/* Routes des applications spécifiques */}
              <Route path="/app/pharmacy/*" element={<PrivateRoute><PharmacyApp /></PrivateRoute>} />
              <Route path="/app/school/*" element={<PrivateRoute><SchoolApp /></PrivateRoute>} />
              <Route path="/app/restaurant/*" element={<PrivateRoute><RestaurantApp /></PrivateRoute>} />
              <Route path="/app/stock/*" element={<PrivateRoute><StockApp /></PrivateRoute>} />
              <Route path="/app/comptafacile/*" element={<PrivateRoute><ComptaFacileApp /></PrivateRoute>} />
              <Route path="/app/quincaillerie/*" element={<PrivateRoute><QuincaillerieProApp /></PrivateRoute>} />
              
              {/* --- Routes des nouvelles applications --- */}
              <Route path="/app/hospital/*" element={<PrivateRoute><HospitalApp /></PrivateRoute>} />
              <Route path="/app/supermarket/*" element={<PrivateRoute><SupermarketApp /></PrivateRoute>} />
              <Route path="/app/transport/*" element={<PrivateRoute><TransportApp /></PrivateRoute>} />
              <Route path="/app/hotel/*" element={<PrivateRoute><HotelApp /></PrivateRoute>} />
              <Route path="/app/shop/*" element={<PrivateRoute><ShopApp /></PrivateRoute>} />
              <Route path="/app/garage/*" element={<PrivateRoute><GarageApp /></PrivateRoute>} />
              <Route path="/app/construction/*" element={<PrivateRoute><ConstructionApp /></PrivateRoute>} />
              <Route path="/app/microfinance/*" element={<PrivateRoute><MicrofinanceApp /></PrivateRoute>} />
              <Route path="/app/events/*" element={<PrivateRoute><EventsApp /></PrivateRoute>} />
              <Route path="/app/training/*" element={<PrivateRoute><TrainingApp /></PrivateRoute>} />

              {/* --- Routes de démonstration des applications --- */}
              <Route path="/demo/app/pharmacy/*" element={<PublicLayout><PharmacyApp /></PublicLayout>} />
              <Route path="/demo/app/school/*" element={<PublicLayout><SchoolApp /></PublicLayout>} />
              <Route path="/demo/app/restaurant/*" element={<PublicLayout><RestaurantApp /></PublicLayout>} />
              <Route path="/demo/app/stock/*" element={<PublicLayout><StockApp /></PublicLayout>} />
              <Route path="/demo/app/comptafacile/*" element={<PublicLayout><ComptaFacileApp /></PublicLayout>} />
              <Route path="/demo/app/quincaillerie/*" element={<PublicLayout><QuincaillerieProApp /></PublicLayout>} />
              <Route path="/demo/app/hospital/*" element={<PublicLayout><HospitalApp /></PublicLayout>} />
              <Route path="/demo/app/supermarket/*" element={<PublicLayout><SupermarketApp /></PublicLayout>} />
              <Route path="/demo/app/transport/*" element={<PublicLayout><TransportApp /></PublicLayout>} />
              <Route path="/demo/app/hotel/*" element={<PublicLayout><HotelApp /></PublicLayout>} />
              <Route path="/demo/app/shop/*" element={<PublicLayout><ShopApp /></PublicLayout>} />
              <Route path="/demo/app/garage/*" element={<PublicLayout><GarageApp /></PublicLayout>} />
              <Route path="/demo/app/construction/*" element={<PublicLayout><ConstructionApp /></PublicLayout>} />
              <Route path="/demo/app/microfinance/*" element={<PublicLayout><MicrofinanceApp /></PublicLayout>} />
              <Route path="/demo/app/events/*" element={<PublicLayout><EventsApp /></PublicLayout>} />
              <Route path="/demo/app/training/*" element={<PublicLayout><TrainingApp /></PublicLayout>} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
