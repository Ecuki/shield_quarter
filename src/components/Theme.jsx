import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    powderWhite: 'rgba(255, 253, 249, 0.8)',
    blueFilter: 'rgba(0,52,89, 0.7)',
    blue: 'rgb(0,52,89)',
    lightBlue: 'rgb(0,168,232)',
    grey: '#8b99af',
    white: '#fff',
  },

  fontSizes: {
    small: '1em',
    medium: '1.6em',
    large: '2.7em',
  },
  padding: 10,
};

function Theme({ children, ...rest }) {
  return (
    <ThemeProvider theme={theme} {...rest}>
      {children}
    </ThemeProvider>
  );
}
export default Theme;
