import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCustomer, updateCustomer } from '../../store/reducers/customers';
import { FormProvider, useForm } from 'react-hook-form';
import { nameValidation, emailValidation, contactValidation } from '../../utils/validation/form/customerFormValidation';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DrawerContent from '../common/DrawerContent';
import FormTextField from '../common/form/FormTextField';

export default function CustomerForm({ close }) {
  const selectedCustomer = useSelector((state) => state.customers.selectedCustomer);
  const dispatch = useDispatch();
  const methods = useForm({ defaultValues: selectedCustomer });

  const handleSubmit = methods.handleSubmit((data) => {
    selectedCustomer?.id ? dispatch(updateCustomer(data)) : dispatch(createCustomer(data));
    methods.reset();
    close();
  });

  const drawerTitle = useMemo(() => {
    return selectedCustomer?.id ? 'Edit customer' : 'Create new customer';
  }, [selectedCustomer]);

  const submitButtonText = useMemo(() => {
    return selectedCustomer?.id ? 'Update' : 'Create';
  }, [selectedCustomer]);

  return (
    <DrawerContent
      title={drawerTitle}
      buttonText={submitButtonText}
      close={close}
      submit={handleSubmit}
    >
      <FormProvider {...methods}>
        <Box
          component="form"
          noValidate
          sx={{ mt: 2 }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
            >
              <FormTextField {...nameValidation} />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <FormTextField {...emailValidation} />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <FormTextField {...contactValidation} />
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </DrawerContent>
  );
}
