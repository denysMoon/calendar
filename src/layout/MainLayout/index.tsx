import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import React from 'react';

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
