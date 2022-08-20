import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../media/footerBckg.svg';

const Footer = () => {
  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          flexFlow: { xs: 'column-reverse', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          p: 3,
          backgroundColor: '#8D8D8D',
          backgroundImage: `url(${backgroundImage})`,
        }}
        elevation={5}
      >
        <Paper sx={{ p: 0.5 }} elevation={4}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1243.2482093740698!2d19.45472271281245!3d51.77678265008294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcada0d168995%3A0xcf30ab67508acc5!2zcGxhYyBXb2xub8WbY2ksIDkxLTAwMSDFgcOzZMW6!5e0!3m2!1spl!2spl!4v1660040134160!5m2!1spl!2spl"
            width="270"
            height="250"
            loading="lazy"
            title="Company"
            frameBorder={0}
          ></iframe>
        </Paper>
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'column wrap',
            justifyContent: 'center',
            pl: 3,
            textAlign: { xs: 'center', md: 'left' },
            color: '#fff',
          }}
        >
          <Divider />
          <Typography variant="body1" component="p">
            Our address:
          </Typography>
          <Typography variant="body2" component="p">
            Best Shop
          </Typography>
          <Typography variant="body2" component="p">
            plac Wolności 1
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ pb: { xs: 1, md: 0 } }}
          >
            00-000 Łódź
          </Typography>
          <Divider />
        </Box>
      </Paper>
      <Typography
        variant="caption"
        component="p"
        align="center"
        sx={{ color: '#fff', backgroundColor: 'black' }}
      >
        Copyright &copy;2022 by <Link to={'/'}>BestShop</Link>
      </Typography>
    </>
  );
};

export default Footer;
