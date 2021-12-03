import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
// import { ThemeProvider } from 'my-ui-lib';
// import { TranslationProvider } from 'my-i18n-lib';
// import defaultStrings from 'i18n/en-x-default';
import AppProviders from 'contexts/AppProviders';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

const AllTheProviders: FC = ({ children }) => {
  return <AppProviders>{children}</AppProviders>; 
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
