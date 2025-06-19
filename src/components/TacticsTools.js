import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';

export const TacticsTools = () => {
  const tacticItems = [
    {
      title: 'Tier List',
      description: 'Clasificación de unidades y composiciones',
      image: 'https://tactics.tools/assets/images/tier-list.png',
      href: 'https://tactics.tools/team-compositions'
    },
    {
      title: 'Items',
      description: 'Guía de items y combinaciones',
      image: 'https://tactics.tools/assets/images/items.png',
      href: 'https://tactics.tools/items'
    },
    {
      title: 'Synergies',
      description: 'Guía de sinergias y composiciones',
      image: 'https://tactics.tools/assets/images/synergies.png',
      href: 'https://tactics.tools/synergies'
    }
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h2" component="h2" sx={{ mb: 3, color: '#6441a5' }}>
        Tactics Tools
      </Typography>
      
      <Grid container spacing={3}>
        {tacticItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #2a2a2a',
                  ':hover': {
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ p: 2 }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: '#6441a5' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: '#6441a5',
                      '&:hover': {
                        backgroundColor: '#52358a'
                      }
                    }}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver más
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TacticsTools;
