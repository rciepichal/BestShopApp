import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import SingleProductTile from '../components/home/SingleProductTile';
import { useAppDispatch, useAppSelector } from '../shared/hooks/hooks';
import { getAllProducts } from '../shared/slice/productSlice';

type Props = {};

const testProduct = {
  id: 9,
  title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
  price: 64,
  description:
    'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
  category: 'electronics',
  image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  rating: {
    rate: 3.3,
    count: 203,
  },
};

const Products = (props: Props) => {
  const { isLoading, products } = useAppSelector((store) => store.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex', flexFlow: 'row wrap' }}>
        {products.map((product) => {
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
    </>
  );
};

export default Products;
