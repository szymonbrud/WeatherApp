import React, { ReactElement } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes, { element } from 'prop-types';

import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  
  @font-face{
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');
  }

  *, *::after, *::before{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const GlobalStyleProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

GlobalStyleProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(element), element])
    .isRequired,
};

export default GlobalStyleProvider;
