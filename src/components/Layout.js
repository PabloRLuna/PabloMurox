import React, { useContext } from 'react';
import { Box } from '@mui/material';
import TwitchSection from './TwitchSection';
import { TwitchContext } from '../contexts/TwitchContext';

const Layout = ({ children }) => {
  const { isTwitchExpanded } = useContext(TwitchContext);

  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: '100vh',
      bgcolor: 'background.default',
      flexDirection: 'row'
    }}>
      {/* Contenido principal */}
      <Box sx={{ 
        flex: 1,
        overflow: 'auto',
        pr: { 
          md: isTwitchExpanded ? 32 : 0 
        },
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        bgcolor: 'background.default'
      }}>
        {children}
      </Box>

      {/* TwitchSection fija a la derecha */}
      <Box 
        sx={{ 
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          width: { 
            md: isTwitchExpanded ? 300 : 0 
          },
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          bgcolor: 'background.paper',
          borderLeft: '1px solid #2a2a2a',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1000
        }}
      >
        <TwitchSection />
      </Box>
    </Box>
  );
};

export default Layout;
