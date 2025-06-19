import React from 'react';
import { Box } from '@mui/material';

const DiscordIcon = (props) => {
  return (
    <Box component="img" 
         src="https://cdn.iconscout.com/icon/free/png-256/free-discord-logo-icon-download-in-svg-png-gif-file-formats--social-network-media-pack-logos-icons-3357697.png" 
         {...props}
         sx={{
           ...props.sx,
           width: 24,
           height: 24,
           color: 'inherit'
         }}
    />
  );
};

export default DiscordIcon;
