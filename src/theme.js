import { createTheme } from '@mui/material/styles';
import { purple, orange } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: "'Bloomer', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      lineHeight: 1.4,
    },
    h2: {
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      lineHeight: 1.4,
    },
    h3: {
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      lineHeight: 1.4,
    },
    body1: {
      lineHeight: 1.6,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
  palette: {
    primary: {
      main: purple[500],
      light: purple[300],
      dark: purple[700],
    },
    secondary: {
      main: orange[500],
      light: orange[300],
      dark: orange[700],
    },
    background: {
      default: '#1a1a1a',
      paper: '#2d2d2d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
          padding: '8px 24px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          lineHeight: 1.4,
          letterSpacing: '0.05em',
          color: '#ffffff',  // Color de texto blanco por defecto
          textShadow: '0 1px 2px rgba(0,0,0,0.3)',  // Sombra de texto para mejor legibilidad
          '&:hover': {
            color: '#ff9800',  // Color de hover
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',  // Mantener sombra en hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
