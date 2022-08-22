import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/utils/hooks';
import SingleProductTile from '../common/SingleProductTile';
import CloseIcon from '@mui/icons-material/Close';
import { getTopPick } from '../../shared/features/topPick/topPickSlice';

const TopPick = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { topPick } = useAppSelector((store) => store.topPick);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopPick());
  }, [dispatch]);

  return (
    <Box
      sx={{
        backgroundColor: '#D40000',
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
        <SingleProductTile product={topPick} isOnSale={false} />
      </Box>
    </Box>
  );
};

export default TopPick;
