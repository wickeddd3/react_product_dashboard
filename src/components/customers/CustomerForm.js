import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCustomer } from '../../store/reducers/customers';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DrawerContent from '../common/DrawerContent';
import FormTextField from '../common/form/FormTextField';

export default function CustomerForm({ close }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleSetName = (value) => setName(value);
  const handleSetEmail = (value) => setEmail(value);
  const handleSetContact = (value) => setContact(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = {
      name,
      email,
      contact,
    };
    dispatch(createCustomer(form));
  };

  return (
    <DrawerContent
      title="Create new customer"
      buttonText="Create"
      close={close}
      submit={handleSubmit}
    >
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
            <FormTextField
              id="customerName"
              name="customerName"
              label="Customer Name"
              autoComplete="customerName"
              value={name}
              setValue={handleSetName}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <FormTextField
              id="email"
              name="email"
              label="Email"
              autoComplete="email"
              value={email}
              setValue={handleSetEmail}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <FormTextField
              id="contact"
              name="contact"
              label="Contact"
              autoComplete="contact"
              value={contact}
              setValue={handleSetContact}
            />
          </Grid>
        </Grid>
      </Box>
    </DrawerContent>
  );
}
