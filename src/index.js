import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import * as serviceWorker from './serviceWorker';

import { App } from './App';
import { ThemeProvider } from './ThemeProvider';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-family: -apple-system, '.SFNSText-Regular', 'San Francisco',
      BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Lucida Grande', Arial,
      sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    outline: none;
    line-height: inherit;
    -webkit-appearance: none;
    cursor: pointer;
  }
  *, *:before, *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Root = () => (
  <ThemeProvider>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.register();
