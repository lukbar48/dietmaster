import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'hooks/useAuth';
import { ReactNode } from 'react';
import { theme } from 'assets/styles/theme';
import { Provider } from 'react-redux';
import PatientProvider from 'contexts/PatientContext';
import { store } from 'store/store';

export const renderWithProviders = (children: ReactNode) => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PatientProvider>
          <AuthProvider>{children}</AuthProvider>
        </PatientProvider>
      </ThemeProvider>
    </Provider>,
  );
};
