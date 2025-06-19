import React, { useContext } from 'react';
import { Container, Box } from '@mui/material';
import YouTubeFeed from './YouTubeFeed';
import VideoSectionTitle from './VideoSectionTitle';
<<<<<<< HEAD
import Hero from './Hero';
import Footer from './Footer';
=======
>>>>>>> 6dc8e1b95222d49a46cdc2d086d8c023cfef159a
import { TwitchContext } from '../contexts/TwitchContext';




const Home = () => {
  useContext(TwitchContext);

  return (
    <>
<<<<<<< HEAD
      <Hero />
=======
>>>>>>> 6dc8e1b95222d49a46cdc2d086d8c023cfef159a
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
<<<<<<< HEAD
      <Footer />
=======
>>>>>>> 6dc8e1b95222d49a46cdc2d086d8c023cfef159a
    </>
  );
};

export default Home;
