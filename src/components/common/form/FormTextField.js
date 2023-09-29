import { useFormContext } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import { findInputError, isFormInvalid } from '../../../utils/validation/index';
import TextField from '@mui/material/TextField';
import FormInputError from './FormInputError';

export default function FormTextField(props) {
  const {
    id = 'textField',
    name = 'textField',
    type = 'text',
    label = '',
    size = 'small',
    validation,
    value,
    setValue,
  } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <>
      <TextField
        fullWidth
        id={id}
        label={label}
        name={name}
        size={size}
        value={value}
        error={isInvalid}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        {...register(name, validation)}
      />
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        {isInvalid && (
          <FormInputError
            message={inputErrors.error.message}
            key={inputErrors.error.message}
          />
        )}
      </AnimatePresence>
    </>
  );
}
