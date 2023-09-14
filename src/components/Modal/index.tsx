import React, { useState } from 'react';
import { Button, Modal as ModalBootstrap } from 'react-bootstrap';
import { handleAddEvent } from '../../utils/calendarEvents';
import { DateSelectArg } from '@fullcalendar/core/index.js';

export const Modal: React.FC<{
  handleCloseModal: (argument0: boolean) => void;
  isShow: boolean;
  selectInfo: DateSelectArg;
}> = ({ handleCloseModal, isShow, selectInfo }) => {
  const [title, setTitle] = useState('');

  const handleSave = () => {
    handleAddEvent(title, selectInfo, handleCloseModal);
  };

  return (
    <ModalBootstrap show={isShow} onHide={() => handleCloseModal(false)}>
      <ModalBootstrap.Dialog>
        <ModalBootstrap.Header>
          <ModalBootstrap.Title>Modal title</ModalBootstrap.Title>
        </ModalBootstrap.Header>

        <ModalBootstrap.Body>
          <input
            type="text"
            value={title}
            onChange={(event_: React.ChangeEvent<HTMLInputElement>) => setTitle(event_.target.value)}
            placeholder="Event Title"
          />
        </ModalBootstrap.Body>

        <ModalBootstrap.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save changes
          </Button>
        </ModalBootstrap.Footer>
      </ModalBootstrap.Dialog>
    </ModalBootstrap>
  );
};
