import { Paper, Typography, Grid, Box, Button } from '@mui/material';

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
        backgroundImage: `url(${imgUrl})`,
        backgroundAttachment: 'fixed',
        height: '100vh',
      }}
      elevation={5}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={imgUrl} alt="" />}
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
              p: { xs: 0, md: 6 },
              textAlign: 'center',
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Welcome to BestShop!
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              Literally the best shop in the internet!
            </Typography>
            <Button variant="contained" size="large">
              Go to products
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HeroBanner;
