import React, { useState, useEffect } from 'react';
import { Box, Card, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS, TRANSITIONS, API_CONFIG } from '../constants/styles';

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

const VideoTitle = styled(Typography)({
  color: COLORS.primary,
  fontWeight: 'bold',
  marginBottom: '8px',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const VideoDescription = styled(Typography)({
  color: COLORS.text,
  marginBottom: '16px',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const VideoDate = styled(Typography)({
  color: COLORS.secondary,
  fontSize: '0.875rem',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const VideoDuration = styled(Typography)({
  color: COLORS.secondary,
  fontSize: '0.875rem',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const VideoViews = styled(Typography)({
  color: COLORS.secondary,
  fontSize: '0.875rem',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const VideoChannel = styled(Typography)({
  color: COLORS.secondary,
  fontSize: '0.875rem',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const VideoStats = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const VideoInfo = styled(Box)({
  padding: '16px',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const VideoGrid = styled(Grid)({
  minHeight: '100vh',
  padding: '32px',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const SectionTitle = styled(Typography)({
  ...API_CONFIG.TYPOGRAPHY.tft,
  color: COLORS.primary,
  marginBottom: '32px',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const LoadingSpinner = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60vh',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const ErrorBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60vh',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const ErrorTypography = styled(Typography)({
  color: COLORS.error,
  textAlign: 'center',
  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
});

const YouTubeFeed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${API_CONFIG.youtube.baseUrl}${API_CONFIG.youtube.endpoints.videos}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          const errorData = await response.json().catch(() => {});
          throw new Error(`Error ${response.status}: ${errorData?.error || 'Error al obtener los videos'}`);
        }
        const data = await response.json();
        
        console.log('Respuesta del servidor:', data);
        
        // Verificar si la respuesta tiene la estructura esperada
        if (!data.videos || !Array.isArray(data.videos)) {
          throw new Error(`Estructura de datos inválida: ${JSON.stringify(data)}`);
        }
        setVideos(data.videos);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <LoadingSpinner>
        <Typography variant="h5" sx={{ color: COLORS.primary }}>
          Cargando videos...
        </Typography>
      </LoadingSpinner>
    );
  }

  if (error) {
    return (
      <ErrorBox>
        <ErrorTypography variant="h5">
          {error}
        </ErrorTypography>
      </ErrorBox>
    );
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <SectionBackground />
      <CardContainer>
        <VideoGrid container spacing={4}>
          <Grid item xs={12}>
            <SectionTitle variant="h4">
              Últimos Vídeos
            </SectionTitle>
          </Grid>
          {videos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              <VideoLink href={`https://youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                <VideoCard>
                  <VideoImage src={video.thumbnail} alt={video.title} />
                  <VideoInfo>
                    <VideoTitle variant="h6">
                      {video.title}
                    </VideoTitle>
                    <VideoDescription variant="body2">
                      {video.description}
                    </VideoDescription>
                    <VideoStats>
                      <VideoChannel variant="body2">
                        {video.channel}
                      </VideoChannel>
                      <VideoViews variant="body2">
                        {video.views} vistas
                      </VideoViews>
                      <VideoDuration variant="body2">
                        {video.duration}
                      </VideoDuration>
                      <VideoDate variant="body2">
                        {video.date}
                      </VideoDate>
                    </VideoStats>
                  </VideoInfo>
                </VideoCard>
              </VideoLink>
            </Grid>
          ))}
        </VideoGrid>
      </CardContainer>
    </Box>
  );
};

export default YouTubeFeed;
