import React from 'react';
import { Box } from '@mui/material';

const TwitchIcon = (props) => {
  return (
    <Box component="img" 
         src="/images/twitch-icon.svg"
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

export default TwitchIcon;
