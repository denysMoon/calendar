import React from 'react';
import { Link } from 'react-router-dom';

interface ICustomLink {
  children: string;
  to: string;
}

export const CustomLink: React.FC<ICustomLink> = ({ children, to, ...properties }) => {
  return (
    <Link to={to} {...properties}>
      {children}
    </Link>
  );
};
