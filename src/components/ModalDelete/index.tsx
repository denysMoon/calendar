import { EventClickArg } from '@fullcalendar/core/index.js';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteHoliday } from '../../store/holidays/holidays.slice';
import { BUTTONS } from '../../constants';

interface IModalDelete {
  handleCloseModal: (argument0: boolean) => void;
  // TODO: needs only id
  eventClickInfo: EventClickArg;
  isShow: boolean;
}

export const ModalDelete: React.FC<IModalDelete> = ({ eventClickInfo, isShow, handleCloseModal }) => {
  const dispatch = useDispatch();
  const eventId = eventClickInfo.event.id;
  const handleDelete = () => {
    dispatch(deleteHoliday(eventId));
    handleCloseModal(false);
  };
  return (
    <Modal centered show={isShow} onHide={() => handleCloseModal(false)}>
      <Button onClick={handleDelete}>{BUTTONS.DELETE}</Button>
    </Modal>
  );
};
