import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import Footer from '../components/common/Footer';
import SingleProductTile from '../components/common/SingleProductTile';
import Loading from '../components/common/Loading';
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
  const [category, setCategory] = useState('');

  const generateLink = useCallback(
    (page: number | null) =>
      `?${query ? 'query=' + query + '&' : ''}page=${page}`,
    [query]
  );

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

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
            fontSize: { xs: '1.3rem', lg: '2rem' },
            margin: '2rem 0 1.5rem',
          }}
        >
          Browse our products
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
          }}
        >
          <TextField
            variant="outlined"
            label="Search for..."
            sx={{ width: { xs: '80%', sm: '40%' } }}
          />
          <Box sx={{ width: 150, m: { xs: '15px 0 0 0', sm: '0 0 0 10px' } }}>
            <FormControl fullWidth>
              <InputLabel id="category">Category</InputLabel>
              <Select
                labelId="category"
                id="category-select"
                value={category}
                label="Category"
                onChange={handleChange}
                MenuProps={{ sx: { width: '100px' } }}
              >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'electronic'}>Electronics</MenuItem>
                <MenuItem value={'jewelery'}>Jewelry</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
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
              color={'primary'}
              renderItem={(item) =>
                item.disabled ? (
                  <PaginationItem {...item} />
                ) : (
                  <Link
                    to={generateLink(item.page)}
                    style={{ textDecoration: 'none' }}
                  >
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
