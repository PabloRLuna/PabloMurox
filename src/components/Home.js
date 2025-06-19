import React, { useContext } from 'react';
import { Container, Box } from '@mui/material';
import YouTubeFeed from './YouTubeFeed';
import VideoSectionTitle from './VideoSectionTitle';
import Hero from './Hero';
import Footer from './Footer';
import { TwitchContext } from '../contexts/TwitchContext';




const Home = () => {
  useContext(TwitchContext);

  return (
    <>
      <Hero />
      <Container maxWidth="lg" sx={{ 
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 2,
        p: 4
      }}>
        <Box sx={{ 
          bgcolor: 'transparent',
          borderRadius: 2,
          p: 4,
          width: '100%',
          maxWidth: '100%'
        }}>
          <VideoSectionTitle />
          <YouTubeFeed />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
