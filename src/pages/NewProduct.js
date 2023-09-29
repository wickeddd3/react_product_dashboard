import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '@mui/material/Button';
import FormTextField from '../components/common/form/FormTextField';
import FormSelectField from '../components/common/form/FormSelectField';
import { FormProvider, useForm } from 'react-hook-form';
import {
  productNameValidation,
  subDescriptionValidation,
  productCodeValidation,
  productSkuValidation,
  quantityValidation,
  categoryValidation,
} from './../utils/validation/form/productFormValidation';

export default function NewProductPage() {
  const categories = useSelector((state) => state.products.categories);

  const methods = useForm({
    category: '',
  });

  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, mb: 4 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="start"
        sx={{ mb: 2 }}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            spacing={2}
            sx={{ mb: 2 }}
          >
            <Grid item>
              <Typography
                component="h5"
                variant="h5"
              >
                Create a new product
              </Typography>
            </Grid>
            <Grid item>
              <Breadcrumb />
            </Grid>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Box sx={{ width: '100%' }}>
        <FormProvider {...methods}>
          {/* Details */}
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="start"
            sx={{ mb: 2 }}
          >
            <Grid
              item
              xs={4}
            >
              <Typography
                component="h6"
                variant="h6"
              >
                Details
              </Typography>
              <Typography
                component="h6"
                variant="body2"
              >
                Title, short description...
              </Typography>
            </Grid>
            <Grid
              item
              xs={8}
            >
              <Paper sx={{ width: '100%', mt: 2 }}>
                <Grid
                  container
                  spacing={2}
                  sx={{ p: 2 }}
                >
                  <Grid
                    item
                    xs={12}
                  >
                    <FormTextField {...productNameValidation} />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                  >
                    <FormTextField {...subDescriptionValidation} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="start"
            sx={{ mb: 2 }}
          >
            <Grid
              item
              xs={4}
            >
              <Typography
                component="h6"
                variant="h6"
              >
                Properties
              </Typography>
              <Typography
                component="h6"
                variant="body2"
              >
                Additional functions and attributes...
              </Typography>
            </Grid>
            <Grid
              item
              xs={8}
            >
              <Paper sx={{ width: '100%', mt: 2 }}>
                <Grid
                  container
                  spacing={2}
                  sx={{ p: 2 }}
                >
                  <Grid
                    container
                    spacing={2}
                    sx={{ p: 2 }}
                  >
                    <Grid
                      item
                      xs={6}
                    >
                      <FormTextField {...productCodeValidation} />
                    </Grid>
                    <Grid
                      item
                      xs={6}
                    >
                      <FormTextField {...productSkuValidation} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  sx={{ p: 2 }}
                >
                  <Grid
                    container
                    spacing={2}
                    sx={{ p: 2 }}
                  >
                    <Grid
                      item
                      xs={6}
                    >
                      <FormTextField {...quantityValidation} />
                    </Grid>
                    <Grid
                      item
                      xs={6}
                    >
                      <FormSelectField
                        {...categoryValidation}
                        items={categories}
                        propertyValue="name"
                        showProperty="name"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          {/* Properties */}
          <Grid
            container
            justifyContent={'end'}
            sx={{ py: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Create product
            </Button>
          </Grid>
        </FormProvider>
      </Box>
    </Container>
  );
}