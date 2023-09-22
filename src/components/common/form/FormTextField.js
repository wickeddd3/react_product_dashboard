import { useFormContext } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import { findInputError, isFormInvalid } from '../../../utils/validation/index';
import TextField from '@mui/material/TextField';
import FormInputError from './FormInputError';

export default function FormTextField(props) {
  const {
    id = 'textField',
    name = 'textField',
    label = '',
    autoComplete = 'textField',
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
        autoComplete={autoComplete}
        size={size}
        value={value}
        error={isInvalid}
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
