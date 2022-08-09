import { Box } from '@mui/material';
import React, { useState } from 'react';
import { Product } from '../../shared/models';

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
        position: 'fixed',
        bottom: '0',
        left: '0',
        display: `${isOpen ? 'block' : 'none'}`,
      }}
    >
      Test
    </Box>
  );
};

export default TopPick;
