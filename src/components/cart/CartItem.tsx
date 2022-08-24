import { Grid, Typography, Box, Divider } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import { CartItemModel } from '../../shared/models';

type Props = { item: CartItemModel };

const CartItem = (props: Props) => {
  const { product, amount } = props.item;
  console.log(product);

  return (
    <>
      <Grid container item spacing={0} alignItems="center">
        <Grid item display={{ xs: 'none', sm: 'block' }} sm={2}>
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{ maxHeight: '100px' }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            component="p"
            sx={{ fontSize: { xs: '0.7rem', md: '1rem' } }}
          >
            {product.title}
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Typography
            component="p"
            sx={{ fontSize: { xs: '0.7rem', md: '1rem' } }}
          >
            {product.price}$
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            component="p"
            sx={{ fontSize: { xs: '0.7rem', md: '1rem' } }}
          >
            {amount}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sm={1}
          display="flex"
          sx={{ flexFlow: 'column', alignItems: 'center' }}
        >
          <KeyboardArrowUpIcon color="primary" />
          <KeyboardArrowDownIcon color="primary" />
        </Grid>
      </Grid>
      <Divider sx={{ pt: 1 }} />
    </>
  );
};

export default CartItem;
