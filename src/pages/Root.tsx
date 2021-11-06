import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Main from './Main';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Wrapper>
          <Route path="/" element={<Main />} />

        </Wrapper>
      </Routes>
    </ThemeProvider>
  </Router>
);

export default Root;
