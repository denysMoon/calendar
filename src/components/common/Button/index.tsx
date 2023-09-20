import { AppState, RedirectLoginOptions } from '@auth0/auth0-react';
import { Button as BootstrapButton } from 'react-bootstrap';

interface IButton {
  text: string;
  clickHandler: (options?: RedirectLoginOptions<AppState> | undefined) => Promise<void>;
}

export const Button: React.FC<IButton> = ({ text, clickHandler }) => {
  return <BootstrapButton onClick={() => clickHandler()}>{text}</BootstrapButton>;
};
