import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16 px-4">
        <Outlet />
        {children}
      </main>
    </div>
  );
};
