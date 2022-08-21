import { Box, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { getNewestProducts } from '../../shared/features/newestProducts/newestProductsSlice';
import { useAppDispatch, useAppSelector } from '../../shared/utils/hooks';
import { Product } from '../../shared/models';
import SingleProductTile from './SingleProductTile';

type Props = {};

const NewestProducts = (props: Props) => {
  const { isLoading, newestProducts } = useAppSelector(
    (store) => store.newestProducts
  );
  const dispatch = useAppDispatch();
  // console.log(products);

  useEffect(() => {
    dispatch(getNewestProducts(2));
  }, []);

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        py: 4,
      }}
    >
      <Typography component="h2" variant="h4" color={'primary'}>
        Newest products
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
            isOnSale={false}
            key={product.id}
          />
        ))}
      </Box>
    </Paper>
  );
};

export default NewestProducts;
