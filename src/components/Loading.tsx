import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress sx={{ mt: '5%' }} />
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: { xs: '1rem', lg: '2rem' },
            padding: '0 1rem',
          }}
        >
          Loading...
        </Typography>
      </Box>
    </>
  );
};

export default Loading;
