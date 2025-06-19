import React from 'react';
import { Box } from '@mui/material';

const TwitchIcon = (props) => {
  return (
    <Box component="img" 
         src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" 
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
