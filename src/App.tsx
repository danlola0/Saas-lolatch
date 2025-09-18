import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Lazy load pages
const HomePage = lazy(() => import('./pages/public/HomePage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('./pages/auth/ForgotPasswordPage'));
const DashboardHome = lazy(() => import('./pages/dashboard/DashboardHome'));
const MySolutions = lazy(() => import('./pages/dashboard/MySolutions'));
const Billing = lazy(() => import('./pages/dashboard/Billing'));
const Profile = lazy(() => import('./pages/dashboard/Profile'));
const Support = lazy(() => import('./pages/dashboard/Support'));
const PharmacyApp = lazy(() => import('./pages/apps/PharmacyApp'));
const SchoolApp = lazy(() => import('./pages/apps/SchoolApp'));
const RestaurantApp = lazy(() => import('./pages/apps/RestaurantApp'));
const StockApp = lazy(() => import('./pages/apps/StockApp'));

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
        <div className="min-h-screen bg-gray-50">
          <Suspense fallback={<div>Chargement...</div>}>
            <Routes>
              {/* Routes publiques */}
              <Route path="/" element={
                <PublicLayout>
                  <HomePage />
                </PublicLayout>
              } />
              
              {/* Routes d'authentification */}
              <Route path="/login" element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              } />
              <Route path="/register" element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              } />
              <Route path="/forgot-password" element={
                <PublicRoute>
                  <ForgotPasswordPage />
                </PublicRoute>
              } />

              {/* Routes privées - Dashboard */}
              <Route path="/dashboard" element={
                <PrivateRoute>
                  <DashboardLayout>
                    <DashboardHome />
                  </DashboardLayout>
                </PrivateRoute>
              } />
              <Route path="/dashboard/solutions" element={
                <PrivateRoute>
                  <DashboardLayout>
                    <MySolutions />
                  </DashboardLayout>
                </PrivateRoute>
              } />
              <Route path="/dashboard/billing" element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Billing />
                  </DashboardLayout>
                </PrivateRoute>
              } />
              <Route path="/dashboard/profile" element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Profile />
                  </DashboardLayout>
                </PrivateRoute>
              } />
              <Route path="/dashboard/support" element={
                <PrivateRoute>
                  <DashboardLayout>
                    <Support />
                  </DashboardLayout>
                </PrivateRoute>
              } />

              {/* Routes des applications spécifiques */}
              <Route path="/app/pharmacy/*" element={
                <PrivateRoute>
                  <PharmacyApp />
                </PrivateRoute>
              } />
              <Route path="/app/school/*" element={
                <PrivateRoute>
                  <SchoolApp />
                </PrivateRoute>
              } />
              <Route path="/app/restaurant/*" element={
                <PrivateRoute>
                  <RestaurantApp />
                </PrivateRoute>
              } />
              <Route path="/app/stock/*" element={
                <PrivateRoute>
                  <StockApp />
                </PrivateRoute>
              } />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;