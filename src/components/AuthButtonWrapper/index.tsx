import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '../common/Button';
import { BUTTONS } from '../../constants';

export const AuthButtonWrapper: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Button isLogin={true} text={BUTTONS.LOGIN} login={loginWithRedirect} />;
  }

  return <Button text={BUTTONS.LOG_OUT} logout={logout} />;
};
