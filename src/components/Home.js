import React, { useContext } from 'react';
import { Container, Box } from '@mui/material';
import YouTubeFeed from './YouTubeFeed';
import VideoSectionTitle from './VideoSectionTitle';
import { TwitchContext } from '../contexts/TwitchContext';




const Home = () => {
  useContext(TwitchContext);

  return (
    <>
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
    </>
  );
};

export default Home;
