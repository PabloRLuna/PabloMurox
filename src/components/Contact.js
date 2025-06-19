import React from 'react';
import { Container, Grid, TextField, Button, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    coaching: false,
    rank: '',
    availability: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ 
            color: '#8a2be2',
            fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '2.5rem',
            fontWeight: 400
          }}>
            Contacto y Coaching
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ 
            color: '#ff9800',
            fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '1.8rem',
            fontWeight: 400,
            mb: 4
          }}>
            ¿Necesitas ayuda para mejorar en TFT? ¡Ofrezco coaching personalizado!
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ 
                color: '#ff9800',
                fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                fontSize: '1.5rem',
                fontWeight: 400,
                mb: 3
              }}>
                Contacto General
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="subject"
                    label="Asunto"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    id="message"
                    label="Mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ 
                      mt: 3, 
                      mb: 2,
                      bgcolor: '#8a2be2',
                      '&:hover': {
                        bgcolor: '#6a1b9a'
                      },
                      fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 400
                    }}
                  >
                    Enviar Mensaje
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              bgcolor: '#1a1a1a'
            }}>

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ 
                  color: '#8a2be2',
                  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 400
                }}>
                  🎮 Coaching de TFT
                </Typography>
                <Typography paragraph sx={{ 
                  color: '#ff9800',
                  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 400
                }}>
                  ¿Quieres mejorar tu nivel en TFT? Ofrezco sesiones personalizadas de coaching donde:
                </Typography>
                <ul>
                  <li>Analizamos tu gameplay</li>
                  <li>Te enseño las mejores compos del meta</li>
                  <li>Te ayudo a mejorar tu mecánica</li>
                  <li>Te doy consejos para subir de rango</li>
                </ul>
                <Typography variant="h6" gutterBottom sx={{ 
                  color: '#8a2be2',
                  fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  mt: 3,
                  mb: 2
                }}>
                  Formulario de Coaching
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="rank"
                      name="rank"
                      value={formData.rank}
                      onChange={handleChange}
                      select
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          PaperProps: {
                            sx: {
                              position: 'absolute',
                              zIndex: 1000,
                              top: '100%',
                              left: 0,
                              mt: 1,
                              width: '100%',
                              backgroundColor: '#1a1a1a',
                              color: '#fff',
                              fontFamily: '"Bloomer", "Roboto", "Helvetica", "Arial", sans-serif'
                            }
                          }
                        }
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#8a2be2'
                          },
                          '&:hover fieldset': {
                            borderColor: '#6a1b9a'
                          }
                        },
                        '& .MuiSelect-select': {
                          padding: '8px 14px',
                          '&:focus': {
                            backgroundColor: 'rgba(138, 43, 226, 0.1)'
                          }
                        },
                        '& .MuiSelect-icon': {
                          color: '#8a2be2'
                        }
                      }}
                    >
                      <option value="">Selecciona tu rango</option>
                      <option value="iron">Hierro</option>
                      <option value="bronze">Bronce</option>
                      <option value="silver">Plata</option>
                      <option value="gold">Oro</option>
                      <option value="platinum">Platino</option>
                      <option value="diamond">Diamante</option>
                      <option value="master">Maestro</option>
                      <option value="grandmaster">Gran Maestro</option>
                      <option value="challenger">Challenger</option>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="availability"
                      label="¿Cuándo puedes jugar?"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      multiline
                      rows={3}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#8a2be2'
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ 
                        mt: 3,
                        bgcolor: '#ff9800',
                        '&:hover': {
                          bgcolor: '#f57c00'
                        }
                      }}
                    >
                      Solicitar Coaching
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
