import React from 'react';
import { ProductItem } from '../../products/components/ProductItem';
import { useGetProducts } from '../../../Hooks/useGetProducts';
import { Box, Grid } from '@mui/material';
import { useFetchStripeCustom } from '../../../Hooks/stripeHooks';

const API: string = 'https://api.escuelajs.co/api/v1/products?limit=18&offset=18';
export const email: string = 'figueraramon223@gmail.com';
export const stripeCustomerID = 'cus_NijoVULZLH2kak'
;
export const HomeView = () => {

  const products = useGetProducts(API);
  const customer = useFetchStripeCustom(stripeCustomerID);
  console.log('customer', customer);

  return (
      <Box
      sx={{
        display: 'flex',
      }}>
        <Grid
        container
        spacing={2}>
          {products.map(product => (
        <Grid
        item
        xs={12}
        sm={4}
        md={2}>
          <ProductItem product={product} key={product.id}/>
        </Grid>
        ))};
        </Grid>
      </Box>
  )
};

