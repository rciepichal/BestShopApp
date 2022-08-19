import { Box, Typography } from '@mui/material';
import React from 'react';

type Props = {
  category: string;
};

const CategoryBadge = (props: Props) => {
  const imagePicker = (category: string) => {
    switch (category) {
      case 'electronics':
        return 'rgba(0, 22, 22, 0.4)';
      case 'jewelery':
        return 'rgba(255, 255, 0, 0.4)';
      case "men's clothing":
        return 'rgba(0, 0, 255, 0.4)';
      case "women's clothing":
        return 'rgba(245, 40, 145, 0.4)';
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: imagePicker(props.category),
        opacity: 0.8,
        borderRadius: '10px',
        textTransform: 'uppercase',
        zIndex: 3,
        display: 'inline-flex',
        mx: 'auto',
      }}
    >
      <Typography
        variant="body2"
        component="p"
        sx={{
          fontSize: { xs: '0.5rem', lg: '0.6rem' },
          padding: '0.2rem 1rem',
        }}
      >
        {props.category}
      </Typography>
    </Box>
  );
};

export default CategoryBadge;
