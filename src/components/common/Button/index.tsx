import { AppState, LogoutOptions, RedirectLoginOptions } from '@auth0/auth0-react';
import { Button as BootstrapButton } from 'react-bootstrap';

interface IButton {
  text: string;
  login?: (options?: RedirectLoginOptions<AppState> | undefined) => Promise<void>;
  logout?: (options?: LogoutOptions | undefined) => Promise<void>;
  isLogin?: boolean;
}

export const Button: React.FC<IButton> = ({ text, isLogin, login, logout }) => {
  // Yeah, it's a bit ugly, but it's just temporary
  // TODO: refactor this
  const clickHandler = () => {
    if (isLogin && login) {
      login();
    } else if (!isLogin && logout) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    }
  };
  return <BootstrapButton onClick={clickHandler}>{text}</BootstrapButton>;
};
