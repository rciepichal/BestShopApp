import { Box, Typography } from '@mui/material';

const AboutSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 10,
      }}
    >
      <Box
        sx={{
          width: { xs: '80%', md: '50%' },
          textAlign: 'center',
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{ fontSize: { xs: '2rem', md: '4rem' } }}
          gutterBottom
        >
          What we do
        </Typography>
        <Typography
          component="h3"
          variant="body2"
          sx={{ fontSize: { xs: '.8rem', md: '1rem' } }}
        >
          Kitsch wayfarers mixtape kinfolk poutine irony tofu snackwave deep v
          bruh hoodie salvia mollit kickstarter. Swag yuccie kogi listicle non
          8-bit tbh DSA organic. DIY eiusmod mixtape laborum consequat ramps art
          party vibecession hashtag. Duis enim umami deserunt ascot, distillery
          quis readymade freegan hell of food truck fixie bruh master cleanse.
          Crucifix bushwick quinoa selfies praxis, normcore church-key.
          Williamsburg listicle anim hell of dolore taxidermy poke authentic
          narwhal praxis ramps roof party truffaut.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
