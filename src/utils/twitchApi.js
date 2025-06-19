export const isLive = async (channelName) => {
  try {
    // Usar la API pública de Twitch
    const response = await fetch(
      `https://api.twitch.tv/kraken/streams/${channelName}`
    );

    if (!response.ok) {
      console.error(`Error al verificar el estado del canal ${channelName}:`, response.status);
      return false;
    }

    const data = await response.json();
    
    if (data.stream) {
      console.log(`Canal ${channelName} está en vivo`);
      return true;
    }

    console.log(`Canal ${channelName} está offline`);
    return false;
  } catch (error) {
    console.error('Error al verificar el estado del canal:', error);
    return false;
  }
};
