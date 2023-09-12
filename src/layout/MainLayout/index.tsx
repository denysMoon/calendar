import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
