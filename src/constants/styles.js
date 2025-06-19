export const COLORS = {
  primary: '#8a2be2',
  secondary: '#ff9800',
  background: '#1a1a1a',
  border: '#2a2a2a',
  text: '#ffffff',
  hoverBackground: '#2a2a2a',
  error: '#ff0000',
  success: '#4caf50',
};

export const TRANSITIONS = {
  default: {
    duration: 0.3,
    ease: 'easeInOut'
  },
  hover: {
    scale: 1.05,
    duration: 0.2
  }
};

export const TYPOGRAPHY = {
  tft: {
    fontFamily: "'League Gothic', sans-serif",
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '0.05em'
  }
};

export const API_CONFIG = {
  youtube: {
    baseUrl: 'https://api.pablorluna.com/api/youtube',
    endpoints: {
      videos: '/videos'
    }
  },
  twitch: {
    channel: 'pablomurox',
    embed: {
      video: 'https://player.twitch.tv/?channel={channel}&parent={parent}',
      chat: 'https://www.twitch.tv/embed/{channel}/chat?parent={parent}&darkpopout'
    }
  }
};

export const BACKGROUND = {
  url: '/PabloMurox/images/background.jpg',
  opacity: 0.6,      // Ajustado para que sea más visible
  brightness: 0.7,   // Ajustado para mejorar la visibilidad
  size: 'cover',
  position: 'center'
};
