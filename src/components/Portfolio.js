import React from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const guides = [
    {
      title: 'Guía del Set 9.5',
      description: 'Las mejores composiciones para llegar al Top 4',
      image: 'https://via.placeholder.com/400x300',
    },
    {
      title: 'Análisis de Campeones',
      description: 'Los campeones más fuertes y sus sinergias',
      image: 'https://via.placeholder.com/400x300',
    },
    {
      title: 'Estrategias de Early Game',
      description: 'Cómo empezar fuerte en la partida',
      image: 'https://via.placeholder.com/400x300',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ 
      py: 8,
      bgcolor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 2,
      p: 4
    }}>
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{
        fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '3rem',
        fontWeight: 400
      }}>
        Mis Guías
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center" sx={{
        fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '2rem',
        fontWeight: 400
      }}>
        Estrategias y análisis de TFT
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {guides.map((guide, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card sx={{ bgcolor: 'transparent' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={guide.image}
                  alt={guide.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" sx={{
                    fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 400
                  }}>
                    {guide.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{
                    fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 400
                  }}>
                    {guide.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
