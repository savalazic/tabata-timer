import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const defaultTheme = {
  default: '#e1e1e1',
  primary: '#409eff',
  success: '#67c23a',
  warning: '#e6a23c',
  danger: '#f56c6c',
};

const ThemeProvider = ({ theme = defaultTheme, children }) => (
  <StyledThemeProvider theme={theme}>
    <React.Fragment>{children}</React.Fragment>
  </StyledThemeProvider>
);

export { ThemeProvider };
