import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Twitter as TwitterIcon, Instagram as InstagramIcon, YouTube as YouTubeIcon } from '@mui/icons-material';
import TwitchIcon from './icons/TwitchIcon';
<<<<<<< HEAD
import { getRoute } from '../utils/base';
=======
>>>>>>> 6dc8e1b95222d49a46cdc2d086d8c023cfef159a
import StyledButton from './StyledButton';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ 
      backgroundColor: 'rgba(26, 26, 26, 0.7)',
      backdropFilter: 'blur(4px)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      zIndex: 1200
    }}>
      <Toolbar sx={{ padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Typography
            variant="h6"
            component={RouterLink}
<<<<<<< HEAD
            to={getRoute('/')}
=======
            to="/"
>>>>>>> 6dc8e1b95222d49a46cdc2d086d8c023cfef159a
            sx={{
              textDecoration: 'none',
              color: '#8a2be2',
              fontWeight: 400,
              fontSize: '2rem',
              letterSpacing: '0.05em',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#ff9800',
              },
            }}
          >
            PABLOMURO
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flex: 1 }}>
          <StyledButton
            component="a"
            href="https://docs.google.com/spreadsheets/d/1GOKSSm3xBnOfhNOWr4b1KenjhPejNPTI91LgFoBTDE0/edit?gid=0#gid=0"
            target="_blank"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 400,
              px: 2,
              py: 1,
              borderRadius: 4,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            Guías
          </StyledButton>
          <StyledButton
            component={RouterLink}
<<<<<<< HEAD
            to={getRoute('/about')}
=======
            to="/about"
>>>>>>> 6dc8e1b95222d49a46cdc2d086d8c023cfef159a
            sx={{
              fontSize: '1.2rem',
              fontWeight: 400,
              px: 2,
              py: 1,
              borderRadius: 4,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            Sobre mí
          </StyledButton>

          <StyledButton
            component={RouterLink}
<<<<<<< HEAD
            to={getRoute('/contact')}
=======
            to="/contact"
>>>>>>> 6dc8e1b95222d49a46cdc2d086d8c023cfef159a
            sx={{
              fontSize: '1.2rem',
              fontWeight: 400,
              px: 2,
              py: 1,
              borderRadius: 4,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            Contacto
          </StyledButton>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <StyledButton
            component="a"
            href="https://twitch.tv/pablomurox"
            target="_blank"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 400,
              px: 2,
              py: 1,
              borderRadius: 4,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <TwitchIcon />
          </StyledButton>
          <StyledButton
            component="a"
            href="https://youtube.com/@pablomurox"
            target="_blank"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 400,
              px: 2,
              py: 1,
              borderRadius: 4,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <YouTubeIcon />
          </StyledButton>
          <StyledButton
            component="a"
            href="https://instagram.com/pablomurox"
            target="_blank"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 400,
              px: 2,
              py: 1,
              borderRadius: 4,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <InstagramIcon />
          </StyledButton>
          <StyledButton
            component="a"
            href="https://twitter.com/pablomurox"
            target="_blank"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 400,
              px: 2,
              py: 1,
              borderRadius: 4,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <TwitterIcon />
          </StyledButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
