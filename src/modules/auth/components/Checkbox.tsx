import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  typography: {
    body1: {
      margin: '5px 5px 20px',
      fontSize: 17,
      color: 'black'
    },
  },
});



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Checkboxes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{
          width: '100%'
        }}>
        <Typography>
          <Checkbox {...label} defaultChecked /> Remember me
        </Typography>
      </Stack>
    </ThemeProvider>
  );
};