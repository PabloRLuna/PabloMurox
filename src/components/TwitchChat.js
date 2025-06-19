import React from 'react';
import { Box } from '@mui/material';

const TwitchChat = ({ channelName = 'pablomurox' }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        borderRadius: '0 0 8px 8px',
        overflow: 'hidden',
        borderLeft: '1px solid #2a2a2a',
        backgroundColor: '#1a1a1a'
      }}
    >
      <Box sx={{ flex: 1, overflow: 'hidden' }}>
        <iframe
          src={`https://www.twitch.tv/embed/${channelName}/chat?darkpopout`}
          allowFullScreen
          allow="autoplay; fullscreen"
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
        />
      </Box>
    </Box>
  );
};

export default TwitchChat;
