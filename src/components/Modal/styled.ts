import emotion from '@emotion/styled';
import { Modal } from 'react-bootstrap';

export const ModalBootstrapStyled = emotion(Modal.Body)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '50vh',
  backgroundColor: 'lightgrey',
});

export const ModalBootstrapBodyStyled = emotion(Modal.Body)({
  width: '400px',
});
