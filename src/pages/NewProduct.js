import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from './../components/layouts/DefaultLayout';
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
  regularPriceValidation,
  salePriceValidation,
  tagsValidation,
} from './../utils/validation/form/productFormValidation';
import { createProduct } from '../store/reducers/products';
import { useSnackbar } from 'notistack';

export default function NewProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const categories = useSelector((state) => state.products.categories);
  const [productImage, setProductImage] = useState({ name: '', url: '' });
  const methods = useForm({
    category: '',
  });

  const handleImageChange = (file) => {
    const reader = (readFile) =>
      new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result) => setProductImage({ name: file?.name, url: result }));
  };

  const handleSubmit = methods.handleSubmit((data) => {
    const form = { ...data, image: productImage.url };
    dispatch(createProduct(form))
      .unwrap()
      .then(() => {
        navigate('/products');
        enqueueSnackbar('Product has been successfully added.', { variant: 'success' });
      });
  });

  return (
    <DefaultLayout>
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
            {/* Details */}
            {/* Properties */}
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
                  <Grid
                    container
                    sx={{ p: 2 }}
                  >
                    <FormSelectField
                      {...tagsValidation}
                      items={categories}
                      propertyValue="name"
                      showProperty="name"
                      multiple={true}
                    />
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            {/* Properties */}
            {/* Pricing */}
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
                  Pricing
                </Typography>
                <Typography
                  component="h6"
                  variant="body2"
                >
                  Price related inputs
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
                      <FormTextField {...regularPriceValidation} />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                    >
                      <FormTextField {...salePriceValidation} />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            {/* Pricing */}
            {/* Image */}
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
                  Image
                </Typography>
                <Typography
                  component="h6"
                  variant="body2"
                >
                  Upload Image
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
              >
                <Paper sx={{ width: '100%', mt: 2, p: 2, display: 'flex', alignItems: 'center' }}>
                  <Button
                    component="label"
                    sx={{ width: 'fit-content', textTransform: 'capitalize' }}
                  >
                    Choose Image
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={(e) => {
                        handleImageChange(e.target.files[0]);
                      }}
                    />
                  </Button>
                  <Typography
                    fontSize={14}
                    color="#808191"
                    sx={{ wordBreak: 'break-all', px: 2 }}
                  >
                    {productImage?.name}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            {/* Image */}
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
    </DefaultLayout>
  );
}
