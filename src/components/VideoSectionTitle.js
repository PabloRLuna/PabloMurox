import React from 'react';
import { Typography, Box } from '@mui/material';
import { COLORS } from '../constants/styles';

const VideoSectionTitle = () => {
  return (
    <Box sx={{
      mb: 0,
      width: '100%',
      textAlign: 'center'
    }}>
      <Typography variant="h4" component="h2" sx={{
        color: COLORS.primary,
        fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '2.5rem',
        fontWeight: 400,
        mb: 1
      }}>
        Últimos Videos
      </Typography>
      <Typography variant="h5" sx={{
        color: COLORS.secondary,
        fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '1.8rem',
        fontWeight: 400
      }}>
        Guías y análisis de TFT
      </Typography>
    </Box>
  );
};

export default VideoSectionTitle;
