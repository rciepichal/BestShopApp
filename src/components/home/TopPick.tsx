import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Product } from '../../shared/models';
import SingleProductTile from './SingleProductTile';
import CloseIcon from '@mui/icons-material/Close';

type Props = {};

const testProduct: Product = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const TopPick = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Box
      sx={{
        backgroundColor: 'red',
        p: 2,
        position: 'fixed',
        bottom: '0',
        left: '0',
        textAlign: 'center',
        borderRadius: '20px',
        display: {
          xs: 'none',
          md: `${isOpen ? 'block' : 'none'}`,
          transform: 'scale(0.7) translate(-20%, 20%)',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Typography variant="h6">Hot Picks!</Typography>
        <CloseIcon
          onClick={() => setIsOpen(false)}
          sx={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }}
        />
        <SingleProductTile product={testProduct} isOnSale={false} />
      </Box>
    </Box>
  );
};

export default TopPick;
