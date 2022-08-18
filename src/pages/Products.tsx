import { Box, Button, Input, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../components/home/Footer';
import SingleProductTile from '../components/home/SingleProductTile';
import Loading from '../components/Loading';
import usePagination, {
  useAppDispatch,
  useAppSelector,
} from '../shared/hooks/hooks';
import { Product } from '../shared/models';
import { getAllProducts } from '../shared/slice/productSlice';

type Props = {};

const Products = (props: Props) => {
  const { isLoading, products } = useAppSelector((store) => store.product);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    if (isLoading) return;
    setItems(products[page]);
    console.log(products);
  }, [isLoading, page]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexFlow: 'column wrap',
          maxWidth: '50rem',
          m: 'auto',
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: { xs: '0.9rem', lg: '2rem' },
            margin: '1rem 0',
          }}
        >
          Browse our products
        </Typography>
        <TextField
          variant="outlined"
          label="Search for..."
          sx={{ width: { xs: '80%', lg: '50%' } }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column wrap',
          maxWidth: '50rem',
          m: 'auto',
        }}
      >
        <Box
          display={'flex'}
          sx={{ justifyContent: 'space-around', flexFlow: 'row wrap' }}
        >
          {items.map((product) => {
            return (
              <SingleProductTile
                key={product.id}
                product={product}
                isOnSale={false}
                isProductPage={true}
              />
            );
          })}
        </Box>
        {!isLoading && (
          <Box sx={{ pt: 3, margin: 'auto' }}>
            {products.map((item, idx) => {
              return (
                <Button
                  key={idx}
                  variant={page === idx ? 'contained' : 'outlined'}
                  sx={{ minWidth: '1rem', mx: 1 }}
                  onClick={() => setPage(idx)}
                >
                  {idx + 1}
                </Button>
              );
            })}
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Products;
