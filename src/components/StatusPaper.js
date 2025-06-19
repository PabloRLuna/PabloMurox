import React from 'react';
import { Paper, Typography } from '@mui/material';
import { COLORS } from '../constants/styles';

const StatusPaper = ({ status, message, secondaryMessage }) => {
  return (
    <Paper 
      sx={{ 
        p: 4, 
        bgcolor: COLORS.background,
        borderRadius: 2,
        border: `1px solid ${COLORS.primary}`
      }}
    >
      <Typography 
        align="center" 
        sx={{ 
          color: COLORS.secondary,
          mb: secondaryMessage ? 2 : 0
        }}
      >
        {message}
      </Typography>
      {secondaryMessage && (
        <Typography 
          align="center" 
          sx={{ 
            color: COLORS.text,
            mt: 2
          }}
        >
          {secondaryMessage}
        </Typography>
      )}
    </Paper>
  );
};

export default StatusPaper;
