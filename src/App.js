import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { TwitchProvider } from './contexts/TwitchContext';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';

import About from './components/About';
import Contact from './components/Contact';


import Footer from './components/Footer';
import Layout from './components/Layout';
import Background from './components/Background';

// Usar el tema creado en theme.js
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TwitchProvider>
        <Router>
          <Background />
          <Navbar />
          <Hero />
          <Layout>
            <Routes>
              <Route path="/PabloMurox/" element={<Home />} />
              <Route path="/PabloMurox/about" element={<About />} />
              <Route path="/PabloMurox/contact" element={<Contact />} />

            </Routes>
            <Footer />
          </Layout>
        </Router>
      </TwitchProvider>
    </ThemeProvider>
  );
}

export default App;
