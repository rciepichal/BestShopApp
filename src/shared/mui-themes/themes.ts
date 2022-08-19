import { createTheme } from '@mui/material';
import { Theme } from '@mui/system';

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#D40000',
      light: '#E12C2C',
      contrastText: '#dcd5d5',
    },
    secondary: {
      main: '#FFD700',
      light: '#ffff00',
      dark: '#FFA500',
    },
    info: {
      main: '#fff',
    },
    background: {
      default: '#fbf0f0',
    },
  },
});
// primary: {
//   main: '#D40000',
//   light: '#E12C2C',
//   contrastText: '#dcd5d5',
// },
// secondary: {
//   main: '#FFD700',
//   light: '#ffff00',
//   dark: '#FFA500',
// },
