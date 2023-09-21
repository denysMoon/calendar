import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DateSelectArg } from '@fullcalendar/core/index.js';
import { Button, Modal as ModalBootstrap, Form } from 'react-bootstrap';
import { schemaInputEventDescription } from '../../utils/yup';
import { InputDescription } from '../../types';
import { BUTTONS, COLORS, LABELS } from '../../constants';
import { Input } from '../Input';
import { Dropdown } from '../Dropdown';
import { ModalBootstrapStyled } from './styled';
import { useDispatch } from 'react-redux';
import { addHoliday } from '../../store/holidays/holidays.slice';

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
  const dispatch = useDispatch();

  const handleSave: SubmitHandler<InputDescription> = (data) => {
    dispatch(addHoliday({ name: data.eventDescription, date: selectInfo.startStr, color: data.color }));
    handleCloseModal(false);
    reset();
  };

  return (
    <ModalBootstrap centered show={isShow} onHide={() => handleCloseModal(false)}>
      <ModalBootstrapStyled>
        <Form onSubmit={handleSubmit(handleSave)}>
          <ModalBootstrap.Body>
            <Input type={'textarea'} label={LABELS.TYPE_DESCRIPTION} register={register} errors={errors} />
          </ModalBootstrap.Body>
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
