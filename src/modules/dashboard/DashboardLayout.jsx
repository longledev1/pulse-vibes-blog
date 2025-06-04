import React from 'react';
import Sidebar from './DashboardSideBar';
import Header from './DashboardHeader';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import NotFoundPage from '../../pages/NotFoundPage';
function DashboardLayout() {
  const { userInfo } = useAuth();
  if (!userInfo) {
    return <NotFoundPage></NotFoundPage>;
  }
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar full height */}
      <Sidebar />

      {/* Nội dung chính */}
      <div className="flex-1 flex flex-col ">
        <Header />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
