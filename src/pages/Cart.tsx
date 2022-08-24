import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import CartItem from '../components/cart/CartItem';
import { CartItemModel } from '../shared/models';

const fakeProduct1: CartItemModel = {
  product: {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  amount: 1,
};

type Props = {};

const Cart = (props: Props) => {
  return (
    <>
      <Box
        m={{ xs: '3rem auto 0 auto' }}
        sx={{ textAlign: 'center', width: { xs: '96%', sm: '80%' } }}
      >
        <Typography variant="h4" component="h3" sx={{ mb: 3 }}>
          Your cart:
        </Typography>

        <Grid container>
          <Grid item xs={6} sm={8}>
            <Typography
              component="p"
              sx={{
                fontSize: { xs: '0.7rem', sm: '1rem' },
                fontWeight: 'bold',
              }}
            >
              Product
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Typography
              component="p"
              sx={{
                fontSize: { xs: '0.7rem', sm: '1rem' },
                fontWeight: 'bold',
              }}
            >
              Price
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Typography
              component="p"
              sx={{
                fontSize: { xs: '0.7rem', sm: '1rem' },
                fontWeight: 'bold',
              }}
            >
              Amount
            </Typography>
          </Grid>
        </Grid>
        <CartItem item={fakeProduct1} />
      </Box>
    </>
  );
};

export default Cart;
