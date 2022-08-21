import { Box, Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import SingleProductTile from '../components/home/SingleProductTile';
import Loading from '../components/Loading';
import { getAllProducts } from '../shared/features/allProducts/allProductsSlice';
import { useAppDispatch, useAppSelector } from '../shared/utils/hooks';
import { Product } from '../shared/models';

const Products = () => {
  const { isLoading, allProducts } = useAppSelector(
    (store) => store.allProducts
  );
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading) return;
    setItems(allProducts[page]);
  }, [isLoading, page, allProducts]);

  if (isLoading || allProducts === []) {
    return <Loading />;
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexFlow: 'column wrap',
          maxWidth: '40rem',
          m: { xs: 'auto', lg: '1rem auto 0 auto' },
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
          maxWidth: '42rem',
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
          <Box sx={{ py: 5, margin: 'auto' }}>
            {allProducts.map((item, idx) => {
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
