import { Box, Button, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/common/Loading';
import CategoryBadge from '../components/products/CategoryBadge';
import { getSingleProduct } from '../shared/features/singleProduct/singleProductSlice';
import { useAppDispatch, useAppSelector } from '../shared/utils/hooks';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../components/common/Footer';

const SingleProduct = () => {
  const productId = useParams().id;
  const { isLoading, singleProduct } = useAppSelector(
    (store) => store.singleProduct
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleProduct(productId));
    console.log('test');
  }, [dispatch, productId]);

  if (isLoading) {
    return <Loading />;
  }
  if (!singleProduct) {
    return <h2>Sorry that product does not exist!</h2>;
  }
  const { title, image, description, rating, category, price } = singleProduct;

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
        }}
      >
        <Box my={{ xs: '10px ', sm: '20px' }} sx={{ width: '80%' }}>
          <Button
            onClick={() => navigate(-1)}
            color="secondary"
            variant="contained"
          >
            <ArrowBackIcon /> Back
          </Button>
        </Box>
        <Grid
          container
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          width={{ xs: '90%', md: '80%' }}
          mx="auto"
        >
          <Grid xs={6} sm={4} item justifyContent="center">
            <Box
              component="img"
              src={image}
              sx={{ maxWidth: '100%', maxHeight: { xs: '50vh', sm: '100vh' } }}
            ></Box>
          </Grid>
          <Grid
            xs={10}
            sm={8}
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            pl={{ sm: 3 }}
            pt={{ xs: 2, sm: 0 }}
          >
            <Grid
              container
              xs={12}
              justifyContent={{ xs: 'center', sm: 'start' }}
            >
              <CategoryBadge category={category} />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: { xs: 'center' } }}>
              <Typography
                sx={{ typography: { xs: 'h5', md: 'h4' }, pb: 2 }}
                component="h5"
              >
                {title}
              </Typography>
            </Grid>
            <Grid xs={12} container justifyContent="center">
              <Rating name="rating" value={rating.rate} precision={0.5} />
              <Typography
                sx={{
                  typography: { xs: 'caption' },
                  textAlign: 'justify',
                }}
                component="span"
                pl={0.5}
              >
                of {rating.count} votes
              </Typography>
            </Grid>
            <Grid item xs={12} my={1}>
              <Typography
                sx={{
                  typography: { xs: 'body2', md: 'body1' },
                  textAlign: 'justify',
                }}
                component="p"
              >
                {description}
              </Typography>
            </Grid>
            <Grid xs={12} justifyContent="center">
              <Typography
                sx={{
                  typography: { xs: 'h6', md: 'h5' },
                  textAlign: 'center',
                }}
                component="p"
              >
                {price.toFixed(2)}$
              </Typography>
            </Grid>

            <Grid xs={12} container justifyContent="center" my={3}>
              <Button color="primary" variant="outlined">
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default SingleProduct;
