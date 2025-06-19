import React from 'react';
import { Box } from '@mui/material';
import { BACKGROUND } from '../constants/styles';

const Background = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundImage: `url(${BACKGROUND.url})`,
        backgroundSize: BACKGROUND.size,
        backgroundPosition: BACKGROUND.position,
        backgroundRepeat: 'no-repeat',
        opacity: BACKGROUND.opacity,
        filter: `brightness(${BACKGROUND.brightness})`
      }}
    />
  );
};

export default Background;
