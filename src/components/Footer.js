import React from 'react';
import { Container, Typography, Box, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import DiscordIcon from './icons/DiscordIcon';
import TwitchIcon from './icons/TwitchIcon';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a1a1a',
        color: '#ffffff',
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{
              fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
              fontSize: '2rem',
              fontWeight: 400,
              letterSpacing: '0.05em'
            }}>
              Pablo Murox
            </Typography>
            <Typography variant="body2" sx={{
              fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
              fontSize: '1.2rem',
              fontWeight: 400
            }}>
              Content Creator • TFT Streamer • Digital Artist
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              mt: 2,
              justifyContent: 'flex-end'
            }}>
              <IconButton 
                color="inherit"
                href="https://twitter.com/pablomur0" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </IconButton>
              <IconButton 
                color="inherit"
                href="https://instagram.com/pablomurotv" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </IconButton>
              <IconButton 
                color="inherit"
                href="https://twitch.tv/pablomurox" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitchIcon />
              </IconButton>
              <IconButton 
                color="inherit"
                href="https://discord.gg/V7bqnN2u2D" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ 
          borderTop: 1, 
          borderColor: '#2d2d2d', 
          mt: 2, 
          pt: 2 
        }}>
          <Typography variant="body2" align="center" sx={{
            fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '1.2rem',
            fontWeight: 400
          }}>
            {new Date().getFullYear()} Pablo Murox. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
