import emotion from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = emotion(Link)<{ isActive: boolean }>(({ isActive }) => ({
  textDecoration: 'none',
  fontSize: '1.4rem',
  fontWeight: 'bold',
  color: 'inherit',
  borderBottom: isActive ? '1px solid #000' : 'none',
}));
