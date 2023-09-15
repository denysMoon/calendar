import { Button } from 'react-bootstrap';
import { useMatch } from 'react-router-dom';
import { BUTTONS, ROUTES } from '../../constants';
import { handleSaveAsImage } from '../../helpers';
import { CustomLink } from '../CustomLink';
import { HeaderStyled, NavStyled } from './styles';

export const Header: React.FC = () => {
  const match = !!useMatch(ROUTES[0].path);

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
      {match && <Button onClick={handleSaveAsImage}>{BUTTONS.SAVE_CALENDAR_AS_IMAGE}</Button>}
    </HeaderStyled>
  );
};
