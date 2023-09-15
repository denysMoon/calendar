import { FloatingLabel, Form } from 'react-bootstrap';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { InputDescription } from '../../types';

interface IInput {
  type: 'textarea' | 'input';
  label: string;
  register: UseFormRegister<InputDescription>;
  errors: FieldErrors<InputDescription>;
}

export const Input: React.FC<IInput> = ({ type, label, register, errors }) => {
  const isTextarea = type === 'textarea';

  return (
    <FloatingLabel controlId="floatingTextarea" label={label} className="mb-3">
      <Form.Control
        as={type}
        style={{ width: isTextarea ? '100%' : 'auto', height: isTextarea ? '300px' : 'auto' }}
        {...register('eventDescription')}
      />
      {errors.eventDescription && <span>{errors.eventDescription?.message}</span>}
    </FloatingLabel>
  );
};
