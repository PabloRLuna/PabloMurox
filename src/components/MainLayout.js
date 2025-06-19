import React from 'react';
import { Box } from '@mui/material';
import { TwitchContext } from '../contexts/TwitchContext';

const MainLayout = ({ children }) => {
  const { isTwitchExpanded } = React.useContext(TwitchContext);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: isTwitchExpanded ? 'calc(100% - 300px)' : '100%',
        transition: 'width 0.3s ease',
        overflowX: 'hidden',
        bgcolor: 'background.default'
      }}
    >
      {children}
    </Box>
  );
};

export default MainLayout;
