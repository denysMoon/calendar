import { EventClickArg } from '@fullcalendar/core/index.js';
import { Modal, Button } from 'react-bootstrap';
import { BUTTONS } from '../../constants';

interface IModalDelete {
  handleCloseModal: (argument0: boolean) => void;
  eventClickInfo: EventClickArg;
  isShow: boolean;
}

export const ModalDelete: React.FC<IModalDelete> = ({ eventClickInfo, isShow, handleCloseModal }) => {
  const handleDelete = () => {
    eventClickInfo.event.remove();
    handleCloseModal(false);
  };
  return (
    <Modal centered show={isShow} onHide={() => handleCloseModal(false)}>
      <Button onClick={handleDelete}>{BUTTONS.DELETE}</Button>
    </Modal>
  );
};
