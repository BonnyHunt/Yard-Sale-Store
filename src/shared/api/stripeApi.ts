import Stripe from 'stripe';

export const stripe = new Stripe( 'Stripe Secret Key' ?? '', {
  apiVersion: '2022-11-15',
});
