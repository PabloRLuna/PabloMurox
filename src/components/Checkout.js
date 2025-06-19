import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call loadStripe outside of a component's render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe('pk_test_51RbSbG4IE6ajKRXWaWOKhQQAWBCTqgm6wlzXBq4vO3WgYaPfBYrttJBOxasQdHU3zRKbcf1t25qsOd28fHczHqBi00mhEtLzPJ');

const Checkout = ({ product }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm product={product} />
    </Elements>
  );
};

export default Checkout;
