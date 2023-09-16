import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DateSelectArg } from '@fullcalendar/core/index.js';
import { Button, Modal as ModalBootstrap, Form } from 'react-bootstrap';
import { handleAddEvent } from '../../utils/calendarEvents';
import { schemaInputEventDescription } from '../../utils/yup';
import { InputDescription } from '../../types';
import { BUTTONS, COLORS, LABELS } from '../../constants';
import { Input } from '../Input';
import { Dropdown } from '../Dropdown';
import { ModalBootstrapStyled, ModalBootstrapBodyStyled } from './styled';

export const Modal: React.FC<{
  handleCloseModal: (argument0: boolean) => void;
  isShow: boolean;
  selectInfo: DateSelectArg;
}> = ({ handleCloseModal, isShow, selectInfo }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<InputDescription>({ resolver: yupResolver(schemaInputEventDescription) });

  const handleSave: SubmitHandler<InputDescription> = (data) => {
    handleAddEvent(data.eventDescription, selectInfo, handleCloseModal, data.color);
    reset();
  };

  return (
    <ModalBootstrap centered show={isShow} onHide={() => handleCloseModal(false)}>
      <ModalBootstrapStyled>
        <Form onSubmit={handleSubmit(handleSave)}>
          <ModalBootstrapBodyStyled>
            <Input type={'textarea'} label={LABELS.TYPE_DESCRIPTION} register={register} errors={errors} />
          </ModalBootstrapBodyStyled>
          <ModalBootstrap.Footer>
            <Dropdown control={control} colors={COLORS} />

            {/* Button will be common component */}
            <Button variant="secondary" onClick={() => handleCloseModal(false)}>
              {BUTTONS.CLOSE}
            </Button>
            <Button variant="primary" type="submit">
              {BUTTONS.SAVE}
            </Button>
          </ModalBootstrap.Footer>
        </Form>
      </ModalBootstrapStyled>
    </ModalBootstrap>
  );
};