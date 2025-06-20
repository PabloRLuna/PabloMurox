export const getYouTubeVideos = async () => {
  try {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const CHANNEL_ID = 'UCxjbXfKxTv_iwTas3qSq7VQ'; // ID del canal @pablomurox
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxjbXfKxTv_iwTas3qSq7VQ&maxResults=15&order=date&type=video&key=AIzaSyAZST3WNEMJoCMDRvwWGBSTPtoL3Ll72wU`;
    
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      throw new Error('No se encontraron videos en el canal');
    }

    // Obtener los detalles de los videos para filtrar por duración
    const videoIds = data.items.map(item => item.id.videoId).join(',');
    const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${API_KEY}`;
    const detailsResponse = await fetch(detailsUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!detailsResponse.ok) {
      throw new Error(`HTTP error! status: ${detailsResponse.status}`);
    }

    const detailsData = await detailsResponse.json();
    
    // Filtrar videos que duren más de 1 minuto
    const filteredVideos = data.items.filter(item => {
      const videoDetails = detailsData.items.find(v => v.id === item.id.videoId);
      if (!videoDetails) return false;
      
      // Convertir duración ISO 8601 a segundos
      const duration = videoDetails.contentDetails.duration;
      const matches = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
      if (!matches) return false;
      
      const hours = parseInt(matches[1]) || 0;
      const minutes = parseInt(matches[2]) || 0;
      const seconds = parseInt(matches[3]) || 0;
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      
      return totalSeconds >= 60; // Solo videos de 1 minuto o más
    });

    // Tomar los primeros 15 videos que cumplen el criterio
    const videos = filteredVideos.slice(0, 15).map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      channel: 'PabloMuro',
      publishedAt: new Date(item.snippet.publishedAt).toISOString().split('T')[0],
      description: item.snippet.description
    }));

    return { videos };
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    // En caso de error, devolvemos datos de ejemplo
    return {
      videos: [
        {
          id: '1',
          title: 'Error al cargar videos',
          thumbnail: 'https://img.youtube.com/vi/dummy/video.jpg',
          channel: 'PabloMuro',
          publishedAt: '2025-06-20',
          description: 'No se pudieron cargar los videos. Por favor, inténtalo de nuevo más tarde.'
        }
      ]
    };
  }
};
