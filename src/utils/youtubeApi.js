export const getYouTubeVideos = async () => {
  try {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const CHANNEL_ID = 'UC6Rt9vgcklA1cGdH4joEXqg'; // ID del canal @pablomuro
    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=3&order=date&type=video&key=${API_KEY}`;
    
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

    const videos = data.items.map(item => ({
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
