import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import CategoryBadge from '../components/products/CategoryBadge';
import { getSingleProduct } from '../shared/features/singleProduct/singleProductSlice';
import { useAppDispatch, useAppSelector } from '../shared/utils/hooks';

const SingleProduct = () => {
  const productId = useParams().id;
  const { isLoading, singleProduct } = useAppSelector(
    (store) => store.singleProduct
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (!singleProduct) {
    return <h2>Sorry that product does not exist!</h2>;
  }
  const { id, title, image, description, rating, category, price } =
    singleProduct;

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
      }}
    >
      <Button onClick={() => navigate(-1)}>Back</Button>
      <Grid
        container
        spacing={1}
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        width={{ xs: '100%', sm: '90%', md: '80%' }}
        sx={{ m: 0 }}
      >
        <Grid xs={6} sm={4} container justifyContent="center">
          <Box component="img" src={image} sx={{ width: '100%' }}></Box>
        </Grid>
        <Grid xs={10} sm={8}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              xs={12}
              container
              justifyContent={{ xs: 'center', sm: 'start' }}
            >
              <CategoryBadge category={category} />
            </Grid>
            <Grid xs={12} sx={{ textAlign: { xs: 'center' } }}>
              {title}
            </Grid>
            <Grid xs={12}>{description}</Grid>
            <Grid xs={12} justifyContent="center">
              {price}$
            </Grid>
            <Grid xs={12} container justifyContent="center">
              <Button>Add to cart</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleProduct;
