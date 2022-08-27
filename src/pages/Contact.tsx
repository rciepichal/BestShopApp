import {
  Button,
  TextField,
  Box,
  Typography,
  Grid,
  Paper,
  Modal,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Footer from '../components/common/Footer';

type Props = {};

const Contact = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      phone: 123,
    },
    onSubmit: (values) => {
      setIsModalOpen(true);
      console.log(values);
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Paper
        sx={{
          width: { xs: '95%', sm: '50%', lg: '40%' },
          m: '2rem auto 0 auto',
          py: 3,
        }}
        elevation={3}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{ textAlign: 'center' }}
          gutterBottom
        >
          Contact us!
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ textAlign: 'center', mb: 3 }}
        >
          We will reply ASAP!
        </Typography>
        <Box width="80%" mx={'auto'}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container sx={{ textAlign: 'center' }} rowSpacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="firstName"
                  label="First name"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="lastName"
                  label="Last name"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="phone"
                  label="Phone number"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="message"
                  label="Your message"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  multiline
                  rows={2}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" sx={{ m: 'auto' }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            minWidth: '10rem',
            minHeight: '10rem',
            p: 3,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CloseIcon
            sx={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }}
            onClick={() => setIsModalOpen(false)}
          />
          <Typography variant="h6" component="span">
            Thank you for contacting us!
          </Typography>
        </Paper>
      </Modal>
      <Footer />
    </>
  );
};

export default Contact;
