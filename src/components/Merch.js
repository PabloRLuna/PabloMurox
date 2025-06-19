import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Modal, Box } from '@mui/material';
import { motion } from 'framer-motion';


const products = [
  {
    id: 1,
    name: 'Camiseta PABLOMURO',
    price: '25€',
    image: 'https://via.placeholder.com/400x400',
    description: 'Camiseta oficial de PABLOMURO con diseño exclusivo',
  },
  {
    id: 2,
    name: 'Poster TFT',
    price: '15€',
    image: 'https://via.placeholder.com/400x400',
    description: 'Poster con diseño exclusivo de TFT',
  },
  {
    id: 3,
    name: 'Taza PABLOMURO',
    price: '12€',
    image: 'https://via.placeholder.com/400x400',
    description: 'Taza con diseño exclusivo de PABLOMURO',
  },
  {
    id: 4,
    name: 'Stickers TFT',
    price: '8€',
    image: 'https://via.placeholder.com/400x400',
    description: 'Set de stickers con diseños exclusivos',
  },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#2d2d2d',
  border: '2px solid #8a2be2',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const Merch = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8, bgcolor: '#1a1a1a' }}>
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: '#8a2be2' }}>
        Merchandising
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ color: '#ff9800' }}>
        Productos Exclusivos
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card sx={{ bgcolor: '#2d2d2d' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h5" component="h2" sx={{ color: '#8a2be2', opacity: 0.8 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="#ff9800" gutterBottom sx={{ opacity: 0.8 }}>
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, opacity: 0.8 }}>
                    {product.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleOpen(product)}
                    sx={{
                      bgcolor: '#8a2be2',
                      '&:hover': {
                        bgcolor: '#9b59b6',
                      },
                    }}
                  >
                    Comprar
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" component="h2" align="center" sx={{ mb: 2, color: '#8a2be2' }}>
            Carrito en Mantenimiento
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 2, color: '#ff9800' }}>
            El sistema de carrito está en mantenimiento. ¡Gracias por tu paciencia!
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default Merch;
