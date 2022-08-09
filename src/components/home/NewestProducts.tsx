import { Box, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/hooks';
import { Product } from '../../shared/models';
import { getNewestProducts } from '../../shared/slice/productSlice';
import SingleProductTile from './SingleProductTile';

type Props = {};

const NewestProducts = (props: Props) => {
  const { isLoading, newestProducts } = useAppSelector(
    (store) => store.product
  );
  const dispatch = useAppDispatch();
  // console.log(products);

  useEffect(() => {
    dispatch(getNewestProducts());
    console.log(isLoading);
  }, []);

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        p: 2,
        background:
          'linear-gradient(180deg, rgba(255,165,0,1) 0%, rgba(255,223,0,1) 100%);',
      }}
    >
      <Typography component="h2" variant="h4" gutterBottom color={'primary'}>
        Hot picks!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexFlow: { xs: 'column', md: 'row' },
          justifyContent: 'space-around',
          alignItems: 'center',
          p: 2,
          width: '60%',
        }}
      >
        {newestProducts.map((product) => (
          <SingleProductTile
            product={product}
            isOnSale={true}
            key={product.id}
          />
        ))}
      </Box>
    </Paper>
  );
};

export default NewestProducts;
