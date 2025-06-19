import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { TwitchProvider } from './contexts/TwitchContext';
import { getRoute, BASE_PATH } from './utils/base';
import '@fontsource/league-gothic';

// Components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';

// Configurar el tema directamente en App.js
const theme = createTheme({
  typography: {
    fontFamily: "'Bloomer', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      lineHeight: 1.4,
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      lineHeight: 1.4,
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      lineHeight: 1.4,
      textTransform: 'uppercase',
    },
    h4: {
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      lineHeight: 1.4,
      textTransform: 'uppercase',
    },
    h5: {
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      lineHeight: 1.4,
      textTransform: 'uppercase',
    },
    h6: {
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      lineHeight: 1.4,
      textTransform: 'uppercase',
    },
    body1: {
      letterSpacing: '0.05em',
    },
    body2: {
      letterSpacing: '0.05em',
    },
  },
  palette: {
    primary: {
      main: '#8B005D',
      light: '#FF69B4',
      dark: '#4B0082',
    },
    secondary: {
      main: '#FFD700',
      light: '#FFEC8B',
      dark: '#DAA520',
    },
    background: {
      default: '#000000',
      paper: '#1a1a1a',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
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
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={BASE_PATH}>
        <TwitchProvider>
          <Layout>
            <Routes>
              <Route path={getRoute('/')} element={<Home />} />
              <Route path={getRoute('/about')} element={<About />} />
              <Route path={getRoute('/contact')} element={<Contact />} />
            </Routes>
          </Layout>
        </TwitchProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
