import { Box, Button, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column',
        p: 5,
      }}
    >
      <Typography component="h4" variant="h4" sx={{ color: 'primary.main' }}>
        Error 404
      </Typography>
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: '2rem' }} />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" sx={{ mt: 5 }}>
          <ArrowBackIcon /> Home
        </Button>
      </Link>
    </Box>
  );
};

export default Error;
