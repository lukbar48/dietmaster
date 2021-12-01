import { theme } from 'assets/styles/theme';
import { AuthProvider } from 'hooks/useAuth';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import PatientProvider from './PatientContext';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const AppProviders = ({ children }: { children: any }) => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <PatientProvider>
              <AuthProvider>{children}</AuthProvider>
            </PatientProvider>
          </ThemeProvider>
        </Router>
      </Provider>
    </>
  );
};

export default AppProviders;
