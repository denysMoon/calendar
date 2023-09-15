import { useState } from 'react';
import { Button, Modal as ModalBootstrap, FloatingLabel, Form } from 'react-bootstrap';
import { handleAddEvent } from '../../utils/calendarEvents';
import { DateSelectArg } from '@fullcalendar/core/index.js';
import { ModalBootstrapStyled } from './styled';

export const Modal: React.FC<{
  handleCloseModal: (argument0: boolean) => void;
  isShow: boolean;
  selectInfo: DateSelectArg;
}> = ({ handleCloseModal, isShow, selectInfo }) => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const handleSave = () => {
    handleAddEvent(title, comment, selectInfo, handleCloseModal);
  };

  return (
    <ModalBootstrap size="lg" show={isShow} onHide={() => handleCloseModal(false)}>
      <ModalBootstrapStyled>
        <ModalBootstrap.Body>
          <FloatingLabel controlId="floatingTextarea" label="Event Title" className="mb-3">
            <Form.Control
              as="input"
              value={title}
              onChange={(event_: React.ChangeEvent<HTMLInputElement>) => setTitle(event_.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              value={comment}
              onChange={(event_: React.ChangeEvent<HTMLInputElement>) => setComment(event_.target.value)}
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        </ModalBootstrap.Body>

        <ModalBootstrap.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save changes
          </Button>
        </ModalBootstrap.Footer>
      </ModalBootstrapStyled>
    </ModalBootstrap>
  );
};
