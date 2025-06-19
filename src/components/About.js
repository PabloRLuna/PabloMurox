import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { linkStyles } from '../styles/linkStyles';

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
              src="https://yt3.googleusercontent.com/3z-aCi2fTGf14GCYvyL20uUP3MY2nc8LhY1Bcw8ZL_LB_P6V_NBrNl6rbW22aMWq_f86jJETJg=s900-c-k-c0x00ffffff-no-rj"
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
                fontWeight: 400
              }}>
               ⭐ 𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃@ ⭐
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                textAlign: 'center', 
                color: 'text.primary',
                fontSize: '1.2rem',
                mb: 2
              }}>
                ⚡ 𝗨𝗡 𝗖𝗛𝗜𝗖𝗢 𝗘𝗫𝗧𝗥𝗢𝗩𝗘𝗥𝗧𝗜𝗗𝗢 𝗤𝗨𝗘 𝗛𝗔 𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗤𝗨Í 𝗔 𝗣𝗔𝗦𝗔𝗥𝗟𝗢 𝗕𝗜𝗘𝗡 .
                <br />
                ⚡ 𝗠𝗘 𝗥Í𝗢 𝗠𝗨𝗖𝗛𝗢 𝗬 𝗛𝗔𝗚𝗢 𝗠𝗨𝗖𝗛𝗢 𝗘𝗟 𝗧𝗢𝗡𝗧𝗢 (𝗟𝗔 𝗚𝗘𝗡𝗧𝗘 𝗧𝗔𝗠𝗕𝗜É𝗡 𝗦𝗘 𝗥Í𝗘 𝗔 𝗩𝗘𝗖𝗘𝗦)
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                textAlign: 'center', 
                color: 'text.primary',
                fontSize: '1.2rem',
                mb: 2
              }}>
                ⚡ 𝗗𝗘 𝗡𝗔𝗧𝗨𝗥𝗔𝗟𝗘𝗭𝗔 𝗣𝗔𝗬𝗔𝗦𝗔 𝗬 𝗔𝗟𝗘𝗚𝗥𝗘, 𝗔 𝗩𝗘𝗖𝗘𝗦 𝗚𝗥𝗜𝗧𝗢 𝗘𝗡 𝗟𝗢𝗦 𝗗𝗜𝗥𝗘𝗖𝗧𝗢𝗦,
                <br />
                ⚡ 𝗦𝗢𝗬 𝗠𝗨𝗬 𝗔𝗨𝗦𝗧𝗔𝗗𝗜𝗭𝗢 𝗣𝗘𝗥𝗢 𝗡𝗢 𝗟𝗘 𝗧𝗘𝗡𝗚𝗢 𝗠𝗜𝗘𝗗𝗢 𝗔 𝗡𝗔𝗗𝗔
                <br />
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                textAlign: 'center', 
                color: 'text.primary',
                fontSize: '1.2rem',
                mb: 2
              }}>
                ⚡ 𝗦𝗢𝗬 𝗔𝗖𝗧𝗢𝗥 𝗬 𝗠𝗜𝗘𝗡𝗧𝗥𝗔𝗦 𝗡𝗢 𝗧𝗘𝗡𝗚𝗢 𝗘𝗡𝗦𝗔𝗬𝗢𝗦 𝗡𝗜 𝗥𝗢𝗗𝗔𝗝𝗘𝗦
                <br />
                ⚡ 𝗠𝗘 𝗚𝗨𝗦𝗧𝗔 𝗝𝗨𝗚𝗔𝗥 𝗔𝗟 𝗧𝗙𝗧 𝗬 𝗠𝗨𝗖𝗛𝗢𝗦 𝗝𝗨𝗘𝗚𝗢𝗦 𝗠Á𝗦
                <br />
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                textAlign: 'center', 
                color: 'text.primary',
                fontSize: '1.2rem',
                mb: 2
              }}>
                ⚡ 𝗔𝗤𝗨𝗜 𝗣𝗨𝗘𝗗𝗘𝗦 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗥 𝗠Á𝗦 𝗖𝗢𝗦𝗔𝗦 𝗗𝗘 𝗧𝗢𝗗𝗢𝗦 𝗠𝗢𝗗𝗢𝗦.
                <br />
                ⚡ 𝗡𝗢𝗦 𝗟𝗟𝗟𝗘𝗩𝗔𝗠𝗢𝗦 𝗕𝗜𝗘𝗡 𝗖𝗢𝗡 𝗧𝗢𝗗@𝗦, 𝗗𝗔 𝗜𝗚𝗨𝗔𝗟 𝗗𝗘 𝗗𝗢𝗡𝗗𝗘 𝗦𝗘𝗔𝗦
                <br />
              </Typography>
              <Typography variant="body1" paragraph sx={{ 
                textAlign: 'center', 
                color: 'text.primary',
                fontSize: '1.2rem',
                mb: 4
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
              ...linkStyles
            }}>
              <span role="img" aria-label="YouTube">📺</span>
              Video diario con las mejores compos del meta y guías para mejorar en TFT.
            </a>
            <a href="https://discord.com/invite/455854545454545454" target="_blank" rel="noopener noreferrer" style={{
              ...linkStyles,
              color: '#7289da'
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
