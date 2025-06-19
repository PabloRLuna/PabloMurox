const { google } = require('googleapis');
const Twitter = require('twitter-lite');
const axios = require('axios');
const cron = require('cron');

// Configuración de APIs
const youtube = google.youtube({ version: 'v3' });
const twitter = new Twitter({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Función para obtener videos recientes de YouTube
async function getRecentVideos() {
  try {
    const res = await youtube.search.list({
      part: 'snippet',
      channelId: 'UCVwCt9bQ6Q812v4a6s74zgQ', // ID del canal de Pablo
      maxResults: 5,
      order: 'date',
      type: 'video',
      key: process.env.YOUTUBE_API_KEY,
    });

    return res.data.items;
  } catch (error) {
    console.error('Error al obtener videos:', error);
    return [];
  }
}

// Función para publicar en Twitter
async function postToTwitter(video) {
  try {
    const tweet = `¡Nuevo video en mi canal! 🎥

${video.snippet.title}

${video.snippet.description}

https://youtube.com/watch?v=${video.id.videoId} #TFT #TeamfightTactics #LeagueOfLegends`;

    await twitter.post('statuses/update', { status: tweet });
    console.log('Tweet publicado:', video.snippet.title);
  } catch (error) {
    console.error('Error al publicar tweet:', error);
  }
}

// Función para publicar en Instagram
async function postToInstagram(video) {
  try {
    // Aquí necesitaríamos usar la API de Instagram Graph
    // Esto requiere una cuenta de desarrollador y aprobación de Facebook
    console.log('Publicando en Instagram:', video.snippet.title);
  } catch (error) {
    console.error('Error al publicar en Instagram:', error);
  }
}

// Función para actualizar el feed en la página
async function updateWebsiteFeed(video) {
  try {
    // Aquí necesitaríamos actualizar nuestra base de datos
    // con la información del nuevo video
    console.log('Actualizando feed web:', video.snippet.title);
  } catch (error) {
    console.error('Error al actualizar feed web:', error);
  }
}

// Configurar tarea periódica
const job = new cron.CronJob('*/15 * * * *', async () => {
  console.log('Verificando nuevos videos...');
  
  const videos = await getRecentVideos();
  
  for (const video of videos) {
    // Verificar si el video ya fue procesado
    // Aquí necesitaríamos consultar nuestra base de datos
    
    // Si es nuevo, procesarlo
    await postToTwitter(video);
    await postToInstagram(video);
    await updateWebsiteFeed(video);
  }
});

// Iniciar la tarea
job.start();
