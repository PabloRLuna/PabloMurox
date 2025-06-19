import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ 
      py: 12, 
      bgcolor: 'rgba(0, 0, 0, 0.3)', 
      borderRadius: 2 
    }}> 
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            py: 2
          }}>
            <Box
              component="img"
              src="/images/profile.jpg"
              alt="Pablo Muro"
              sx={{
                width: 250,
                height: 250,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #8a2be2',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container direction="column" spacing={4} justifyContent="flex-start">
            <Grid item>
              <Typography variant="h4" gutterBottom sx={{ 
                color: 'primary.main',
                mb: 4,
                textAlign: 'center',
                fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                fontSize: '2.5rem',
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.2em'
              }}>
               ⭐ 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃@ ⭐
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                textAlign: 'center', 
                color: 'text.primary',
                fontSize: '1.2rem',
                mb: 2
              }}>
                ⚡ 𝐔𝐍 𝐂𝐇𝐈𝐂𝐎 𝐄𝐗𝐓𝐑𝐎𝐕𝐄𝐑𝐓𝐈𝐃𝐎 𝐐𝐔𝐄 𝐇𝐀 𝐕𝐄𝐍𝐈𝐃𝐎 𝐀𝐐𝐔Í 𝐀 𝐏𝐀𝐒𝐀𝐑𝐋𝐎 𝐁𝐈𝐄𝐍 .
                <br />
                ⚡ 𝐌𝐄 𝐑Í𝐎 𝐌𝐔𝐂𝐇𝐎 𝐘 𝐇𝐀𝐆𝐎 𝐌𝐔𝐂𝐇𝐎 𝐄𝐋 𝐓𝐎𝐍𝐓𝐎 (𝐋𝐀 𝐆𝐄𝐍𝐓𝐄 𝐓𝐀𝐌𝐁𝐈É𝐍 𝐒𝐄 𝐑Í𝐄 𝐀 𝐕𝐄𝐂𝐄𝐒)
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                textAlign: 'center', 
                color: 'text.primary',
                fontSize: '1.2rem',
                mb: 2
              }}>
                ⚡ 𝐃𝐄 𝐍𝐀𝐓𝐔𝐑𝐀𝐋𝐄𝐙𝐀 𝐏𝐀𝐘𝐀𝐒𝐀 𝐘 𝐀𝐋𝐄𝐆𝐑𝐄, 𝐀 𝐕𝐄𝐂𝐄𝐒 𝐆𝐑𝐈𝐓𝐎 𝐄𝐍 𝐋𝐎𝐒 𝐃𝐈𝐑𝐄𝐂𝐓𝐎𝐒,
                <br />
                ⚡ 𝐒𝐎𝐘 𝐌𝐔𝐘 𝐀𝐔𝐒𝐓𝐀𝐃𝐈𝐙𝐎 𝐏𝐄𝐑𝐎 𝐍𝐎 𝐋𝐄 𝐓𝐄𝐍𝐆𝐎 𝐌𝐈𝐄𝐃𝐎 𝐀 𝐍𝐀𝐃𝐀
                <br />
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                textAlign: 'center', 
                color: 'text.primary',
                fontSize: '1.2rem',
                mb: 2
              }}>
                ⚡ 𝐒𝐎𝐘 𝐀𝐂𝐓𝐎𝐑 𝐘 𝐌𝐈𝐄𝐍𝐓𝐑𝐀𝐒 𝐍𝐎 𝐓𝐄𝐍𝐆𝐎 𝐄𝐍𝐒𝐀𝐘𝗢𝐒 𝐍𝐈 𝐑𝐎𝐃𝐀𝐉𝐄𝐒
                <br />
                ⚡ 𝐌𝐄 𝐆𝐔𝐒𝐓𝐀 𝐉𝐔𝐆𝐀𝐑 𝐀𝐋 𝐓𝐅𝐓 𝐘 𝐌𝐔𝐂𝐇𝐎𝐒 𝐉𝐔𝐄𝐆𝐎𝐒 𝐌Á𝐒
                <br />
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                textAlign: 'center', 
                color: 'text.primary',
                fontSize: '1.2rem',
                mb: 2
              }}>
                ⚡ 𝐀𝐐𝐔𝐈 𝐏𝐔𝐄𝐃𝐄𝐒 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐑 𝐌Á𝐒 𝐂𝐎𝐒𝐀𝐒 𝐃𝐄 𝐓𝐎𝐃𝐎𝐒 𝐌𝐎𝐃𝐎𝐒.
                <br />
                ⚡ 𝐍𝐎𝐒 𝐋𝐋𝐋𝐄𝐕𝐀𝐌𝐎𝐒 𝐁𝐈𝐄𝐍 𝐂𝐎𝐍 𝐓𝐎𝐃@𝐒, 𝐃𝐀 𝐈𝐆𝐔𝐀𝐋 𝐃𝐄 𝐃𝐎𝐍𝐃𝐄 𝐒𝐄𝐀𝐒
                <br />
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                textAlign: 'center', 
                color: 'text.primary',
                fontSize: '1.2rem',
                mb: 4,
                fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                ⚡ 𝐓𝐎𝐃𝐀𝐒 𝐋𝐀𝐒 𝐃𝐎𝐍𝐀𝐂𝐈𝐎𝐍𝐄𝐒 𝐈𝐑Á𝐍 𝐃𝐄𝐒𝐓𝐈𝐍𝐀𝐃𝐀𝐒 𝐀 𝐌𝐄𝐉𝐎𝐑𝐀𝐑 𝐄𝐋 𝐃𝐈𝐑𝐄𝐂𝐓𝐎
                <br />
                ⚡ 𝐂𝐎𝐒𝐈𝐓𝐀𝐒 𝐏𝐀𝐑𝐀 𝐄𝐋 𝐏𝐂, 𝐑𝐄𝐆𝐀𝐋𝐈𝐓𝐎𝐒 𝐘 𝐒𝐎𝐑𝐓𝐄𝐎𝐒 𝐏𝐀𝐑𝐀 𝐕𝐎𝐒𝐎𝐓𝐑@𝐒
                <br />
                ⚡ 𝐓𝐎𝐃𝐎 𝐏𝐀𝐑𝐀 𝐇𝐀𝐂𝐄𝐑 𝐌Á𝐒 𝐂𝐎𝐍𝐓𝐄𝐍𝐈𝐃𝐎 𝐘 𝐂𝐑𝐄𝐂𝐄𝐑 𝐏𝐎𝐐𝐔𝐈𝐓𝐎 𝐀 𝐏𝐎𝐐𝐔𝐈𝐓𝐎
                <br />
                ⚡ 𝐘 𝐒𝐈 𝐒𝐎𝐁𝐑𝐀 𝐏𝐀𝐑𝐀 𝐋𝐀 𝐀𝐘𝐀𝐖𝐀𝐒𝐊𝐀
                <br />
                ⚡ 𝐓𝐀𝐌𝐁𝐈É𝐍 𝐏𝐔𝐄𝐃𝐄𝐒 𝐀𝐏𝐎𝐘𝐀𝐑𝐌𝐄 𝐃𝐄 𝐅𝐎𝐑𝐌𝐀 𝐍𝐎 𝐄𝐂𝐎𝐍Ó𝐌𝐈𝐂𝐀 𝐒𝐀𝐋𝐔𝐃𝐀𝐍𝐃𝐎 𝐄𝐍 𝐄𝐋 𝐃𝐈𝐑𝐄𝐂𝐓𝐎 
                <br />
                😊 𝐄𝐒𝐎 𝐀𝐘𝐔𝐃𝐀 𝐌𝐔𝐂𝐇𝐎 !
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '800px',
            mx: 'auto',
            gap: 2,
            mt: 4
          }}>
            <a href="https://youtube.com/@pablomuro" target="_blank" rel="noopener noreferrer" style={{
              textDecoration: 'none',
              color: '#ff6b00',
              fontWeight: 'bold',
              fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
              fontSize: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '1.5rem 3rem',
              borderRadius: '8px',
              transition: 'transform 0.2s',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              width: '100%',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              <span role="img" aria-label="YouTube">📺</span>
              Video diario con las mejores compos del meta y guías para mejorar en TFT.
            </a>
            <a href="https://discord.com/invite/455854545454545454" target="_blank" rel="noopener noreferrer" style={{
              textDecoration: 'none',
              color: '#7289da',
              fontWeight: 'bold',
              fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
              fontSize: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '1.5rem 3rem',
              borderRadius: '8px',
              transition: 'transform 0.2s',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              width: '100%',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              <span role="img" aria-label="Discord">🎮</span>
              Tenemos una bonita comunidad, compartimos todo por Discord
            </a>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
