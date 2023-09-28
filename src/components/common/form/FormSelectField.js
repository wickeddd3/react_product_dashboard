import { useMemo } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import { findInputError, isFormInvalid } from '../../../utils/validation/index';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import FormInputError from './FormInputError';
import { groupBy } from './../../../utils/group';

export default function FormSelectField(props) {
  const {
    id = 'selectField',
    name = 'selectField',
    label = '',
    size = 'small',
    validation,
    items,
    groupByProperty,
    // propertyValue,
    showProperty,
  } = props;

  const {
    formState: { errors },
    control,
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  const groupedItems = useMemo(() => groupBy(items, groupByProperty) || [], [items, groupByProperty]);

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
          defaultValue={{
            id: 4,
            group: 'Clothing',
            name: 'Pants',
          }}
          render={({ field: { value, onChange } }) => (
            <Select
              id={id}
              label={label}
              error={isInvalid}
              value={value}
              onChange={onChange}
            >
              {Object.keys(groupedItems).map((group) => (
                <MenuList
                  key={`group-${group}`}
                  sx={{ p: 0 }}
                >
                  <ListSubheader sx={{ fontWeight: 'bold' }}>{group}</ListSubheader>
                  {groupedItems[group].map((item) => (
                    <MenuItem
                      key={`item-${item.id}`}
                      value={item}
                      dense
                    >
                      {item[showProperty]}
                    </MenuItem>
                  ))}
                </MenuList>
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
