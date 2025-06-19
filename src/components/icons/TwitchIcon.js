import React from 'react';
import { Box } from '@mui/material';

const TwitchIcon = (props) => {
  return (
    <Box component="img" 
<<<<<<< HEAD
         src="/PabloMurox/images/twitch-icon.svg"
=======
         src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" 
>>>>>>> 6dc8e1b95222d49a46cdc2d086d8c023cfef159a
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
