import { theme } from 'assets/styles/theme';
import { AuthProvider } from 'contexts/AuthContext';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import PatientProvider from './PatientContext';
import { Provider } from 'react-redux';
import { store } from '../store';

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PatientProvider>
            <AuthProvider>{children}</AuthProvider>
          </PatientProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default AppProviders;
