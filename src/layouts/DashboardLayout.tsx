import React, { useState } from 'react';
import DashboardHeader from '../components/layout/DashboardHeader';
import Sidebar from '../components/layout/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <DashboardHeader onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 lg:ml-64 p-6 mt-16">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
