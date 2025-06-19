import React, { useContext } from 'react';
import { Box } from '@mui/material';
import TwitchSection from './TwitchSection';
import Navbar from './Navbar';
import { TwitchContext } from '../contexts/TwitchContext';

const Layout = ({ children }) => {
  const { isTwitchExpanded } = useContext(TwitchContext);

  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: '100vh',
      bgcolor: 'background.default',
      flexDirection: 'column'
    }}>
      <Navbar />
      <Box sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden'
      }}>
        <Navbar />
        <Box sx={{ 
          mt: 8,
          minHeight: 'calc(100vh - 64px)',
          overflow: 'auto'
        }}>
          {children}
        </Box>
=======
        overflow: 'hidden',
        pr: { 
          md: isTwitchExpanded ? 32 : 0 
        },
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'transparent'
      }}>
        {children}
>>>>>>> 6dc8e1b95222d49a46cdc2d086d8c023cfef159a
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
<<<<<<< HEAD
          bgcolor: 'background.paper',
          borderLeft: '1px solid #2a2a2a',
          zIndex: 1000
=======
          bgcolor: 'transparent',
          borderLeft: '1px solid #2a2a2a',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
>>>>>>> 6dc8e1b95222d49a46cdc2d086d8c023cfef159a
        }}
      >
        <TwitchSection />
      </Box>
    </Box>
  );
};

export default Layout;
