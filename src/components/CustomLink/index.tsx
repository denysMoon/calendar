import { useMatch } from 'react-router-dom';
import { StyledLink } from './styles';

interface ICustomLink {
  children: string;
  to: string;
}

export const CustomLink: React.FC<ICustomLink> = ({ children, to }) => {
  const match = !!useMatch(to);

  return (
    <StyledLink to={to} isActive={match}>
      {children}
    </StyledLink>
  );
};
