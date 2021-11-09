import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Main from './Main';
import About from './About';
import ManageDiet from './Diet';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Wrapper>
          <Route path="/patient/appointments" element={<ManageDiet />} />
          <Route path="/patient/blood-tests" element={<ManageDiet />} />
          <Route path="/patient/allergens" element={<ManageDiet />} />
          <Route path="/patient/diet" element={<ManageDiet />} />
          <Route path="/patient/about" element={<About />} />
          <Route path="/patient/about/:id" element={<About />} />
          <Route path="/" element={<Main />} />
        </Wrapper>
      </Routes>
    </ThemeProvider>
  </Router>
);

export default Root;
