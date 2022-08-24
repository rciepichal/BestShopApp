import { Grid, Typography, Box, Divider, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import { CartItemModel } from '../../shared/models';
import { useAppDispatch } from '../../shared/utils/hooks';
import { changeAmount } from '../../shared/features/cart/cartSlice';

const CartItem = (props: CartItemModel) => {
  const { id, title, price, image, amount } = props;
  const dispatch = useAppDispatch();

  return (
    <>
      <Grid
        container
        item
        spacing={0}
        alignItems="center"
        sx={{ borderBottom: '1px solid #aeaeae', mt: 0.5 }}
      >
        <Grid item display={{ xs: 'none', sm: 'block' }} sm={2}>
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{ maxHeight: '100px' }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            component="p"
            sx={{ fontSize: { xs: '0.7rem', md: '1rem' } }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Typography
            component="p"
            sx={{ fontSize: { xs: '0.7rem', md: '1rem' } }}
          >
            {price.toFixed(2)}$
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
          <Button onClick={() => dispatch(changeAmount({ id, type: 'inc' }))}>
            <KeyboardArrowUpIcon color="primary" />
          </Button>
          <Button onClick={() => dispatch(changeAmount({ id, type: 'dec' }))}>
            <KeyboardArrowDownIcon color="primary" />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CartItem;
