import React, { useState, useEffect } from 'react';
import { Box, Card, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { COLORS, TRANSITIONS, TYPOGRAPHY, API_CONFIG } from '../constants/styles';
import StatusPaper from './StatusPaper';
import { getYouTubeVideos } from '../utils/youtubeApi';


const SectionBackground = styled(Box)({
  backgroundImage: `url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/b0e5cc656a0bdb30574a736ab00c2f488c35c114-1280x720.jpg?auto=format&fit=fill&q=80&w=1082')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  opacity: 0.8,
  filter: 'brightness(0.8)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1
});

const CardContainer = styled(Box)({
  position: 'relative',
  height: '100%',
  width: '100%',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const VideoCard = styled(Card)({
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  border: `1px solid ${COLORS.primary}`,
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
  '&:hover': {
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    transform: 'translateY(-5px)'
  }
});

const VideoLink = styled('a')({
  textDecoration: 'none',
  color: 'inherit'
});

const VideoImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 2
});

const VideoOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  backgroundColor: 'transparent'
});

const TFT_FONT = {
  fontFamily: "'League Gothic', sans-serif",
  textTransform: 'uppercase',
  fontWeight: 'bold',
  letterSpacing: '0.05em'
};

const YouTubeFeed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        console.log('Iniciando fetch de videos...');
        const data = await getYouTubeVideos();
        console.log('Datos recibidos:', data);
        console.log('Videos en data:', data.videos);
        
        console.log('Respuesta del servidor:', data);
        
        // Verificar si la respuesta tiene la estructura esperada
        if (!data.videos || !Array.isArray(data.videos)) {
          throw new Error(`Estructura de datos inválida: ${JSON.stringify(data)}`);
        }
        
        console.log('Videos recibidos:', data.videos);
        
        setVideos(data.videos);
        setError(null);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        setError('Error al cargar los videos. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      <SectionBackground />
      <Box sx={{ 
        py: 1, 
        bgcolor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '100%'
      }}>

        
        <Grid container spacing={4} sx={{ 
          mt: 0, 
          position: 'relative', 
          width: '100%',
          maxWidth: '100%',
          justifyContent: 'center'
        }}>
          {loading ? (
            <Grid item xs={12}>
              <StatusPaper 
                status="loading" 
                message="Cargando videos..."
                sx={{
                  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 400
                }}
              />
            </Grid>
          ) : error ? (
            <Grid item xs={12}>
              <StatusPaper 
                status="error" 
                message={error}
                sx={{
                  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 400
                }}
              />
            </Grid>
          ) : videos.length === 0 ? (
            <Grid item xs={12}>
              <StatusPaper 
                status="empty" 
                message="No se encontraron videos. Por favor, inténtalo de nuevo más tarde."
                secondaryMessage="(Los shorts de YouTube no se muestran en esta sección)"
                sx={{
                  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 400
                }}
              />
            </Grid>
          ) : (
            videos.map((video, index) => (
              <Grid item xs={12} sm={6} md={6} key={video.id}>
                <motion.div whileHover={TRANSITIONS.hover} transition={TRANSITIONS.default}>
                  <VideoCard className="tft-card">
                    <VideoLink 
                      href={`https://youtube.com/watch?v=${video.id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <CardContainer>
                        <VideoImage
                          src={video.thumbnail}
                          alt={`Vídeo de YouTube: ${video.title}`}
                        />
                        <VideoOverlay>
                          <Box
                            sx={{
                              p: 2,
                              bgcolor: 'rgba(0, 0, 0, 0.7)'
                            }}
                          >
                            <Typography variant="h6" sx={{
                              color: COLORS.text,
                              mb: 1,
                              fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                              fontSize: '1.2rem',
                              fontWeight: 400
                            }}>
                              {video.title}
                            </Typography>

                          </Box>
                        </VideoOverlay>
                      </CardContainer>
                    </VideoLink>
                  </VideoCard>
                </motion.div>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </>
  );
};

export default YouTubeFeed;
