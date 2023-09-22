import { useDispatch } from 'react-redux';
import { createCustomer } from '../../store/reducers/customers';
import { FormProvider, useForm } from 'react-hook-form';
import { nameValidation, emailValidation, contactValidation } from '../../utils/validation/form/customerFormValidation';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DrawerContent from '../common/DrawerContent';
import FormTextField from '../common/form/FormTextField';

export default function CustomerForm({ close }) {
  const dispatch = useDispatch();
  const methods = useForm();

  const handleSubmit = methods.handleSubmit((data) => {
    dispatch(createCustomer(data));
    methods.reset();
    close();
  });

  return (
    <DrawerContent
      title="Create new customer"
      buttonText="Create"
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
