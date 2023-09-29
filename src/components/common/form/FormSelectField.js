import { useFormContext, Controller } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import { findInputError, isFormInvalid } from '../../../utils/validation/index';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormInputError from './FormInputError';

export default function FormSelectField(props) {
  const {
    id = 'selectField',
    name = 'selectField',
    label = '',
    size = 'small',
    multiple = false,
    validation,
    items,
    propertyValue,
    showProperty,
  } = props;

  const {
    formState: { errors },
    control,
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <>
      <FormControl
        fullWidth
        size={size}
      >
        <InputLabel
          id={id}
          error={isInvalid}
        >
          {label}
        </InputLabel>
        <Controller
          name={name}
          control={control}
          rules={validation}
          defaultValue={multiple ? [] : ''}
          render={({ field: { value, onChange } }) => (
            <Select
              id={id}
              label={label}
              error={isInvalid}
              multiple={multiple}
              value={value}
              onChange={onChange}
              renderValue={(selected) => {
                if (multiple) {
                  return (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip
                          key={value}
                          label={value}
                        />
                      ))}
                    </Box>
                  );
                } else if (selected.length === 1) {
                  return items.find((item) => item[propertyValue] === selected[0])[showProperty];
                } else {
                  return selected;
                }
              }}
            >
              {items.map((item) => (
                <MenuItem
                  key={`item-${item.id}`}
                  value={item[propertyValue]}
                  dense
                >
                  {item[showProperty]}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
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
