import { Button } from 'react-bootstrap';
import { useMatch } from 'react-router-dom';
import { useSaveImage } from '../../hooks/useSaveImage';
import { BUTTONS, ROUTES } from '../../constants';
import { CustomLink } from '../CustomLink';
// import { AuthButtonWrapper } from '../AuthButtonWrapper';
import { HeaderStyled, NavStyled } from './styles';

export const Header: React.FC = () => {
  const match = !!useMatch(ROUTES[0].path);
  const { isLoading, handleSaveAsImage } = useSaveImage();

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
      {/* <AuthButtonWrapper /> */}
      {match && (
        <Button disabled={isLoading} onClick={handleSaveAsImage}>
          {BUTTONS.SAVE_CALENDAR_AS_IMAGE}
        </Button>
      )}
    </HeaderStyled>
  );
};
