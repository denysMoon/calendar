import emotion from '@emotion/styled';
import { Modal } from 'react-bootstrap';

export const ModalBootstrapStyled = emotion(Modal.Body)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'lightgrey',
});
