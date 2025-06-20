import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { getYouTubeVideos } from '../utils/youtubeApi';

const Portfolio = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { videos: fetchedVideos } = await getYouTubeVideos();
        setVideos(fetchedVideos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

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
        Últimos Vídeos
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center" sx={{
        fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '2rem',
        fontWeight: 400
      }}>
        Estrategias y análisis de TFT
      </Typography>
      {loading ? (
        <Typography align="center" sx={{ mt: 4 }}>
          Cargando videos...
        </Typography>
      ) : (
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {videos.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card sx={{ bgcolor: 'transparent' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={video.thumbnail}
                    alt={video.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" sx={{
                      fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: 400
                    }}>
                      {video.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                      fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                      fontSize: '1.2rem',
                      fontWeight: 400
                    }}>
                      {video.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Portfolio;
