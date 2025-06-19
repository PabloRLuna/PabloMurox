import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { TwitchProvider } from './contexts/TwitchContext';
import { getRoute, BASE_PATH } from './utils/base';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Merch from './components/Merch';

import Footer from './components/Footer';
import Layout from './components/Layout';
import Background from './components/Background';

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
      lineHeight: 1.6,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    body2: {
      lineHeight: 1.6,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  palette: {
    primary: {
      main: '#8a2be2',
      light: '#a868e8',
      dark: '#6b00b4',
    },
    secondary: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
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
          color: '#ffffff',
          textShadow: '0 1px 2px rgba(0,0,0,0.3)',
          '&:hover': {
            color: '#ff9800',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Router basename={BASE_PATH}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path={getRoute('/')} element={<Home />} />
            <Route path={getRoute('/about')} element={<About />} />
            <Route path={getRoute('/contact')} element={<Contact />} />
            <Route path={getRoute('/portfolio')} element={<Portfolio />} />
            <Route path={getRoute('/merch')} element={<Merch />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
