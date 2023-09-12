import React from 'react';
import { ROUTES } from '../../constants';
import { CustomLink } from '../CustomLink';
import { HeaderStyled, NavStyled } from './styles';

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <NavStyled>
        {ROUTES.map((route) => {
          return (
            <CustomLink key={route.path} to={route.path}>
              {route.name}
            </CustomLink>
          );
        })}
      </NavStyled>
    </HeaderStyled>
  );
};
