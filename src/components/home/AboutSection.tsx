import { Box, Typography } from '@mui/material';

const AboutSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 5,
      }}
    >
      <Box
        sx={{
          width: { xs: '80%', md: '50%' },
          textAlign: 'justify',
        }}
      >
        <Typography component="h3" variant="body2">
          <Typography display="inline" component="span" variant="h4">
            K
          </Typography>
          itsch wayfarers mixtape kinfolk poutine irony tofu snackwave deep v
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
