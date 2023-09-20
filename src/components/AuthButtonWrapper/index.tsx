import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '../common/Button';
import { BUTTONS } from '../../constants';

export const AuthButtonWrapper: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  console.log('isAuthenticated', isAuthenticated);

  if (!isAuthenticated) {
    return <Button text={BUTTONS.LOGIN} clickHandler={loginWithRedirect} />;
  }

  return <Button text={BUTTONS.LOG_OUT} clickHandler={logout} />;
};
