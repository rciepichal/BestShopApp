import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleProductTile from '../components/home/SingleProductTile';
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
    if (isLoading) return;
    setItems(products[page]);
    console.log(products);
  }, [page]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexFlow: 'row wrap' }}>
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
        {!isLoading && (
          <div className="btn-container">
            {products.map((item, idx) => {
              return (
                <button key={idx} onClick={() => setPage(idx)}>
                  {idx + 1}
                </button>
              );
            })}
          </div>
        )}
      </Box>
    </>
  );
};

export default Products;
