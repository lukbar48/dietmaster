import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'hooks/useAuth';
import { ReactNode } from 'react';
import { theme } from 'assets/styles/theme';
import PatientProvider from 'contexts/PatientContext';

export const renderWithProviders = ({ children }: { children: any }) => {
  return render(
    <ThemeProvider theme={theme}>
      <PatientProvider>
        <AuthProvider>{children}</AuthProvider>
      </PatientProvider>
    </ThemeProvider>,
  );
};
