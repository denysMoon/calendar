import * as yup from 'yup';

export const schemaInputEventDescription = yup
  .object({
    eventDescription: yup.string().required('Type something').min(2, 'Must be at least 2 characters'),
    required: yup.string(),
  })
  .required();
