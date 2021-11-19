import { theme } from 'assets/styles/theme';
import { AuthProvider } from 'hooks/useAuth';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import PatientProvider from './PatientContext';

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PatientProvider>
          <AuthProvider>{children}</AuthProvider>
        </PatientProvider>
      </ThemeProvider>
    </>
  );
};

export default AppProviders;
