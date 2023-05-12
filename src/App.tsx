import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './shared/theme';
import { Routes } from "./router";

export const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
  );
}
