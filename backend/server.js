require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

const app = express();
const { google } = require('googleapis');

app.use(cors());
app.use(express.json());

// Configurar cliente de YouTube
const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY
});

// Verificar la API key
console.log('Iniciando servidor...');
console.log('YouTube API Key:', process.env.YOUTUBE_API_KEY.substring(0, 10) + '...');

// Función para verificar la conexión con YouTube
const testYouTubeConnection = async () => {
  try {
    console.log('Verificando conexión con YouTube...');
    
    // Buscar canal usando el identificador personalizado
    const channelResponse = await youtube.channels.list({
      part: 'snippet',
      forUsername: 'pablomuro',
      key: process.env.YOUTUBE_API_KEY
    });
    
    console.log('Respuesta de prueba:', channelResponse.data);
    
    if (channelResponse.data.items && channelResponse.data.items.length > 0) {
      console.log('Conexión exitosa con YouTube');
      console.log('Canal encontrado:', {
        id: channelResponse.data.items[0].id,
        title: channelResponse.data.items[0].snippet.title
      });
    } else {
      console.log('No se encontró el canal');
    }
  } catch (error) {
    console.error('Error al conectar con YouTube:', error);
    console.error('Detalles:', {
      status: error.response?.status,
      message: error.response?.data?.error?.message,
      errors: error.response?.data?.error?.errors
    });
    console.error('Stack:', error.stack);
  }
};

// Función para obtener el ID del canal usando el identificador personalizado
const getChannelId = async () => {
  try {
    console.log('Buscando canal con identificador: @pablomuro');
    
    // Verificar la API key
    console.log('API Key:', process.env.YOUTUBE_API_KEY.substring(0, 10) + '...');
    
    const response = await youtube.channels.list({
      part: 'snippet',
      forHandle: '@pablomuro',
      key: process.env.YOUTUBE_API_KEY
    });
    
    console.log('Respuesta de la API:', {
      status: response.status,
      headers: response.headers,
      data: response.data
    });
    
    if (!response.data) {
      console.error('No se recibió respuesta de la API');
      throw new Error('No se recibió respuesta de la API');
    }

    if (!response.data.items) {
      console.error('La respuesta no contiene items');
      throw new Error('La respuesta no contiene items');
    }

    if (response.data.items.length === 0) {
      console.error('No se encontró ningún canal');
      throw new Error('Canal no encontrado');
    }
    
    const channel = response.data.items[0];
    console.log('Canal encontrado:', {
      id: channel.id,
      title: channel.snippet.title,
      description: channel.snippet.description
    });
    
    return channel.id;
  } catch (error) {
    console.error('Error detallado:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data
    });
    console.error('Stack:', error.stack);
    throw new Error(`Error al obtener el ID del canal: ${error.message}`);
  }
};

// Actualizar la función updateVideos para usar el identificador
const updateVideos = async () => {
  try {
    console.log('Iniciando actualización de videos');
    const channelId = await getChannelId();
    const uploadsPlaylistId = await getUploadsPlaylistId(channelId);

    console.log('Obteniendo videos de la playlist:', uploadsPlaylistId);
    const response = await youtube.playlistItems.list({
      part: 'snippet',
      playlistId: uploadsPlaylistId,
      maxResults: 12,
      key: process.env.YOUTUBE_API_KEY
    });

    if (!response.data || !response.data.items) {
      throw new Error('Respuesta inesperada al obtener videos');
    }

    console.log('Videos encontrados:', response.data.items.length);
    console.log('Detalles de los videos encontrados:', response.data.items.map(v => ({
      id: v.snippet.resourceId.videoId,
      title: v.snippet.title,
      description: v.snippet.description,
      thumbnail: v.snippet.thumbnails.high.url,
      publishedAt: v.snippet.publishedAt
    })));
    
    // Contar shorts
    const shortsCount = response.data.items.filter(video => 
      video.snippet.description?.toLowerCase().includes('short') ||
      video.snippet.title?.toLowerCase().includes('short')
    ).length;
    
    console.log('Total de shorts encontrados:', shortsCount);
    console.log('Detalles de shorts encontrados:', 
      response.data.items.filter(video => 
        video.snippet.description?.toLowerCase().includes('short') ||
        video.snippet.title?.toLowerCase().includes('short')
      ).map(v => ({
        id: v.snippet.resourceId.videoId,
        title: v.snippet.title,
        description: v.snippet.description
      }))
    );
    
    // Obtener la duración de cada video
    const videoDetailsPromises = response.data.items.map(async (video) => {
      try {
        const videoResponse = await youtube.videos.list({
          part: 'contentDetails',
          id: video.snippet.resourceId.videoId,
          key: process.env.YOUTUBE_API_KEY
        });

        if (videoResponse.data.items && videoResponse.data.items.length > 0) {
          const duration = videoResponse.data.items[0].contentDetails.duration;
          // Convertir duración ISO 8601 a segundos
          const durationSeconds = duration
            .replace('PT', '')
            .split(/([HMS])/)
            .filter(Boolean)
            .reduce((total, value, index, array) => {
              if (index % 2 === 0) {
                const nextUnit = array[index + 1];
                const number = parseInt(value, 10);
                switch (nextUnit) {
                  case 'H': return total + number * 3600;
                  case 'M': return total + number * 60;
                  case 'S': return total + number;
                  default: return total;
                }
              }
              return total;
            }, 0);

          // Filtrar videos menores a 60 segundos
          if (durationSeconds < 60) {
            console.log(`Short filtrado: ${video.snippet.title} (${durationSeconds}s)`);
            return null;
          }

          return {
            id: video.snippet.resourceId.videoId,
            title: video.snippet.title,
            thumbnail: video.snippet.thumbnails.high.url,
            publishedAt: video.snippet.publishedAt
          };
        }
        return null;
      } catch (error) {
        console.error(`Error obteniendo detalles del video ${video.snippet.resourceId.videoId}:`, error);
        return null;
      }
    });

    // Esperar todas las promesas y filtrar los resultados
    const allVideos = await Promise.all(videoDetailsPromises);
    const filteredVideos = allVideos.filter(video => video !== null);

    console.log('Videos filtrados (sin shorts):', filteredVideos.length);
    console.log('Detalles de los videos filtrados:', filteredVideos.map(v => ({
      id: v.id,
      title: v.title
    })));
    
    if (filteredVideos.length === 0) {
      console.error('ERROR: No se encontraron videos válidos después del filtrado');
    }

    console.log('Videos procesados:', filteredVideos.length);
    cachedVideos = filteredVideos;
    lastUpdate = new Date();
    console.log('Videos actualizados exitosamente');
  } catch (error) {
    console.error('Error actualizando videos:', error);
    throw error;
  }
};

// Verificar conexión al iniciar el servidor
// Variables para almacenar los datos y la última actualización
let cachedVideos = null;
let lastUpdate = null;

// Función para obtener el ID de la playlist de uploads
const getUploadsPlaylistId = async (channelId) => {
  try {
    console.log('Buscando playlist de uploads para canal:', channelId);
    
    // Obtener información del canal para verificar si existe
    const channelResponse = await youtube.channels.list({
      part: 'snippet,contentDetails',
      id: channelId,
      key: process.env.YOUTUBE_API_KEY
    });
    
    console.log('Respuesta del canal:', {
      items: channelResponse.data.items?.length,
      data: channelResponse.data
    });
    
    if (!channelResponse.data || !channelResponse.data.items || channelResponse.data.items.length === 0) {
      throw new Error('No se encontró información del canal');
    }
    
    // Obtener la playlist de uploads directamente del canal
    const channel = channelResponse.data.items[0];
    const uploadsPlaylistId = channel.contentDetails?.relatedPlaylists?.uploads;
    
    if (!uploadsPlaylistId) {
      console.error('No se encontró el ID de la playlist de uploads en el canal');
      throw new Error('No se encontró el ID de la playlist de uploads');
    }
    
    console.log('ID de playlist de uploads encontrado:', uploadsPlaylistId);
    return uploadsPlaylistId;
  } catch (error) {
    console.error('Error detallado:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data
    });
    console.error('Stack:', error.stack);
    throw new Error(`Error al obtener la playlist de uploads: ${error.message}`);
  }
};

// Programar actualización diaria
const scheduleDailyUpdate = () => {
  const now = new Date();
  const updateHour = parseInt(process.env.UPDATE_HOUR || '23'); // Por defecto a las 23:00
  const updateMinute = parseInt(process.env.UPDATE_MINUTE || '0'); // Por defecto al minuto 0
  
  const nextUpdate = new Date();
  nextUpdate.setHours(updateHour, updateMinute, 0, 0);
  
  // Si la hora de actualización ya pasó hoy, programar para mañana
  if (nextUpdate < now) {
    nextUpdate.setDate(nextUpdate.getDate() + 1);
  }
  
  const timeout = nextUpdate - now;
  console.log(`Programando actualización para ${nextUpdate.toLocaleString()}`);
  setTimeout(() => {
    updateVideos().then(() => {
      scheduleDailyUpdate(); // Programar la siguiente actualización solo si esta fue exitosa
    }).catch(error => {
      console.error('Error en la actualización:', error);
      scheduleDailyUpdate(); // Intentar programar la siguiente actualización incluso si falló
    });
  }, timeout);
};

// Forzar una actualización manual al iniciar el servidor
updateVideos().then(() => {
  console.log('Actualización inicial completada');
  // Luego programar la actualización diaria
  scheduleDailyUpdate();
}).catch(error => {
  console.error('Error en la actualización inicial:', error);
  // Aún así programar la actualización diaria
  scheduleDailyUpdate();
});

// Endpoint para obtener videos
app.get('/api/youtube/videos', async (req, res) => {
  try {
    if (cachedVideos) {
      console.log('Devolviendo videos de caché');
      return res.json({ videos: cachedVideos });
    }

    console.log('Caché vacía, actualizando videos...');
    await updateVideos();
    
    if (cachedVideos) {
      console.log('Videos actualizados y devueltos');
      return res.json({ videos: cachedVideos });
    }

    console.error('No se pudieron obtener los videos después de la actualización');
    res.status(500).json({ 
      error: 'No se pudieron obtener los videos',
      details: 'La actualización falló y no hay videos en caché'
    });
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    res.status(500).json({ 
      error: error.message,
      details: error.stack 
    });
  }
});

// Endpoint para crear una sesión de pago
app.post('/create-payment-intent', async (req, res) => {
  const { product } = req.body;
  
  try {
    console.log('Creando sesión de pago para producto:', product.name);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: product.price * 100, // Stripe requiere el monto en centavos
      currency: 'eur',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        product_id: product.id,
        product_name: product.name,
        customer_email: req.body.email,
      },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Error creating payment intent' });
  }
});

// Endpoint para confirmar el pedido
app.post('/confirm-order', async (req, res) => {
  const { paymentIntentId, product, customerInfo } = req.body;
  
  try {
    // Aquí podrías guardar el pedido en tu base de datos
    console.log('Pedido confirmado:', {
      paymentIntentId,
      product,
      customerInfo
    });

    res.status(200).send({ success: true });
  } catch (error) {
    console.error('Error confirming order:', error);
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('YouTube API Key:', process.env.YOUTUBE_API_KEY);
  console.log('Iniciando servidor...');
});
