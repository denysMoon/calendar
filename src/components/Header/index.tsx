import { Button } from 'react-bootstrap';
import { useMatch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSaveImage } from '@/hooks/useSaveImage';
import { BUTTONS, ROUTES } from '@/constants';
import { CustomLink } from '../CustomLink';
import { AuthButtonWrapper } from '../AuthButtonWrapper';
import { Avatar } from '../Avatar';
import { HeaderStyled, NavStyled, ButtonsWrapperStyled } from './styles';

export const Header: React.FC = () => {
  const { user } = useAuth0();
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
      <ButtonsWrapperStyled>
        {match && (
          <Button disabled={isLoading} onClick={handleSaveAsImage}>
            {BUTTONS.SAVE_CALENDAR_AS_IMAGE}
          </Button>
        )}
        <AuthButtonWrapper />
        {user?.picture && <Avatar src={user.picture} />}
      </ButtonsWrapperStyled>
    </HeaderStyled>
  );
};
