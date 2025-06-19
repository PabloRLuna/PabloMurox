import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { getRoute } from '../utils/base';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height: '400px',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        mt: 8,
        pt: 8,
        [theme.breakpoints.down('sm')]: {
          height: '300px',
          mt: 6,
          pt: 6,
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('${process.env.PUBLIC_URL}${getRoute('/images/banner.jpg')}')`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          px: 2,
          py: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              color: theme.palette.primary.main,
            }}
          >
            Guías y Análisis
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              color: theme.palette.secondary.main,
            }}
          >
            de Teamfight Tactics
          </Typography>
        </motion.div>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(138, 43, 226, 0.3), rgba(255, 152, 0, 0.3))',
        }}
      />
    </Box>
  );
};

export default Hero;
