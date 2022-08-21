import {
  Box,
  Pagination,
  PaginationItem,
  TextField,
  Typography,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import SingleProductTile from '../components/home/SingleProductTile';
import Loading from '../components/Loading';
import { getAllProducts } from '../shared/features/allProducts/allProductsSlice';
import { useAppDispatch, useAppSelector } from '../shared/utils/hooks';
import { Product } from '../shared/models';
import { Link, useSearchParams } from 'react-router-dom';

const Products = () => {
  const { isLoading, allProducts } = useAppSelector(
    (store) => store.allProducts
  );
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const query = searchParams.get('query');

  const [items, setItems] = useState<Product[]>([]);

  const generateLink = useCallback(
    (page: number | null) =>
      `?${query ? 'query=' + query + '&' : ''}page=${page}`,
    [query]
  );

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading) return;
    setItems(allProducts[page - 1]);
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
            <Pagination
              count={allProducts.length}
              page={page}
              renderItem={(item) =>
                item.disabled ? (
                  <PaginationItem {...item} />
                ) : (
                  <Link to={generateLink(item.page)}>
                    <PaginationItem {...item} />
                  </Link>
                )
              }
            />
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Products;
