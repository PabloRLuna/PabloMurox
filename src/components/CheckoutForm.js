import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Box, Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Paper, Alert } from '@mui/material';

const CheckoutForm = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    if (!stripe || !elements) {
      setError('Stripe no está disponible');
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { value: email } = event.target.email;
    const { value: name } = event.target.name;
    const { value: size } = event.target.size;

    try {
      // 1. Crear Payment Intent
      const response = await fetch('http://localhost:4000/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product,
          email,
          name,
          size,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al crear la sesión de pago');
      }

      const { clientSecret } = await response.json();

      // 2. Confirmar el pago
      const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

      if (confirmError) {
        setError(confirmError.message);
        setLoading(false);
        return;
      }

      // 3. Confirmar el pedido
      await fetch('http://localhost:4000/confirm-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentIntentId: clientSecret,
          product,
          customerInfo: {
            name,
            email,
            size,
          },
        }),
      });

      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Paper sx={{ p: 4, bgcolor: '#2d2d2d' }}>
        <Alert severity="success" sx={{ mb: 2 }}>
          ¡Pago exitoso! Recibirás un correo de confirmación con los detalles de tu pedido.
        </Alert>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 4, bgcolor: '#2d2d2d' }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#8a2be2' }}>
        Compra {product.name}
      </Typography>
      <Typography variant="h6" color="#ff9800" gutterBottom>
        Precio: {product.price}
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            label="Nombre completo"
            variant="outlined"
            name="name"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            required
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Tamaño</InputLabel>
            <Select
              name="size"
              label="Tamaño"
              defaultValue="M"
            >
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="L">L</MenuItem>
              <MenuItem value="XL">XL</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Box sx={{ mb: 4 }}>
          <CardElement options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }} />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!stripe || loading}
          sx={{
            bgcolor: '#8a2be2',
            '&:hover': {
              bgcolor: '#9b59b6',
            },
          }}
        >
          {loading ? 'Procesando...' : 'Comprar ahora'}
        </Button>
      </form>
    </Paper>
  );
};

export default CheckoutForm;
