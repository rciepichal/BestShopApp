import { Paper, Typography, Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import heroBannerImg from '../../media/heroBanner2.jpg';

type Props = {};

const imgUrl =
  'https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

const HeroBanner = (props: Props) => {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.600',
        color: '#fff',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${heroBannerImg})`,
        backgroundAttachment: 'fixed',
        height: '100vh',
      }}
      elevation={5}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100vh' }}
      >
        <Grid item>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 4 },
              textAlign: 'center',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: 'blur(10px)',
              background: ' rgba( 255, 255, 255, 0.25 )',
              borderRadius: '20px',
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              sx={{ textShadow: '3px 3px 0px rgba(255, 0, 0, 0.5)' }}
            >
              Welcome to BestShop!
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              paragraph
              sx={{ textShadow: '2px 2px 0px rgba(255, 0, 0, 0.5)' }}
            >
              Literally the best shop in the internet!
            </Typography>
            <Link to="/products" style={{ textDecoration: 'none' }}>
              <Button variant="contained" size="large">
                Go to products
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HeroBanner;
