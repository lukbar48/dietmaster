import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Main from './Main';
import About from './About';
import ManageDiet from './Diet';
import Login from './Login';

const Root = () => {
  const user = 0;
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          {user ? (
            <Wrapper>
              <Route path="/patient/appointments/:id" element={<ManageDiet />} />
              <Route path="/patient/blood-tests/:id" element={<ManageDiet />} />
              <Route path="/patient/allergens/:id" element={<ManageDiet />} />
              <Route path="/patient/diet/:id" element={<ManageDiet />} />
              <Route path="/patient/about/:id" element={<About />} />
              <Route path="/" element={<Main />} />
              <Route path="*" element={<Main />} />
            </Wrapper>
          ) : (
            <Route path="*" element={<Login />} />
          )}
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
