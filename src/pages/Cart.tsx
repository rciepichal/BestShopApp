import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import CartItem from '../components/cart/CartItem';
import { CartItemModel } from '../shared/models';
import { useAppSelector } from '../shared/utils/hooks';

const Cart = () => {
  const { cartItems, totalPrice } = useAppSelector((store) => store.cart);

  return (
    <>
      <Box
        m={{ xs: '3rem auto 0 auto' }}
        sx={{ textAlign: 'center', width: { xs: '96%', sm: '80%' } }}
      >
        <Box>
          <Typography variant="h4" component="h3" sx={{ mb: 3 }}>
            Your cart:
          </Typography>
        </Box>
        {cartItems.length > 0 ? (
          <Grid container rowSpacing={1}>
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
            {cartItems.map((item) => {
              return (
                <Grid item container xs={12} key={item.id}>
                  <CartItem {...item} />
                </Grid>
              );
            })}

            <Grid
              item
              container
              xs={6}
              sm={6}
              alignItems="center"
              justifyContent="end"
            >
              <Typography
                component="p"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Total:
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={6}
              sm={2}
              alignItems="center"
              justifyContent="start"
            >
              <Typography
                component="p"
                sx={{
                  textAlign: 'start',
                  pl: 1,
                }}
              >
                {totalPrice.toFixed(2)}$
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button variant="contained">Proceed</Button>
            </Grid>
          </Grid>
        ) : (
          'is empty!!'
        )}
      </Box>
    </>
  );
};

export default Cart;
