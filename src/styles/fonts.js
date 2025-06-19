import { createTheme } from '@mui/material/styles';

// Configuración de la fuente Bloomer
const theme = createTheme({
  typography: {
    fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1.1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      },
    },
  },
});

export default theme;
