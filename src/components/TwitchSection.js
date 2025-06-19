import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { TwitchContext } from '../contexts/TwitchContext';
import { COLORS, API_CONFIG } from '../constants/styles';

const TwitchSection = () => {
  const { isTwitchExpanded, toggleTwitch } = useContext(TwitchContext);
  const { channel } = API_CONFIG.twitch;
  const parent = window.location.hostname || 'localhost:3000';

  const toggleExpand = () => {
    toggleTwitch();
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        right: 0,
        top: '64px',
        width: isTwitchExpanded ? '300px' : '0',
        height: 'calc(100vh - 64px)',
        backgroundColor: isTwitchExpanded ? COLORS.background : 'transparent',
        borderLeft: isTwitchExpanded ? `1px solid ${COLORS.border}` : 'none',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: 'auto',
        boxShadow: isTwitchExpanded ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
        borderRadius: isTwitchExpanded ? '8px 0 0 8px' : '0 0 0 0',
        transition: 'width 0.3s ease, border-radius 0.3s ease, background-color 0.3s ease, border-left 0.3s ease, box-shadow 0.3s ease'
      }}
    >
      <Button
        onClick={toggleExpand}
        sx={{
          position: 'absolute',
          left: '-24px',
          top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          backgroundColor: COLORS.background,
          color: COLORS.text,
          minWidth: '24px',
          minHeight: '24px',
          padding: '4px',
          borderRadius: '4px',
          fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
          '&:hover': {
            backgroundColor: COLORS.background,
            color: COLORS.text,
          }
        }}
      >
        {isTwitchExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden'
      }}>
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 2001
        }}>
          <Box sx={{
            flex: '0 0 auto',
            bgcolor: COLORS.background,
            overflow: 'hidden'
          }}>
            <iframe
              title="Transmisión de Twitch"
              src={`https://player.twitch.tv/?channel=${channel}&parent=${parent}`}
              allowFullScreen
              allow="autoplay; fullscreen"
              sx={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            />
          </Box>
          <Box sx={{
            flex: 1,
            bgcolor: COLORS.background,
            borderLeft: `1px solid ${COLORS.border}`,
            borderRadius: '0 0 0 8px',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 2002
          }}>
            <iframe
              title="Chat de Twitch"
              src={`https://www.twitch.tv/embed/${channel}/chat?parent=${parent}&darkpopout`}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                pointerEvents: 'auto'
              }}
              allowFullScreen="false"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TwitchSection;
