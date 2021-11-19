import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'pages/Root';
import PatientProvider from 'contexts/PatientContext';
import { AuthProvider } from 'hooks/useAuth';
import AppProviders from 'contexts/AppProviders';

async function main() {
  if (process.env.NODE_ENV === 'development') {
    if (window.location.pathname === '/dietmaster') {
      window.location.pathname = '/dietmaster/';
      return;
    }
    const { worker } = require('./mocks/browser');
    await worker.start({
      serviceWorker: {
        url: '/dietmaster/mockServiceWorker.js',
      },
    });
  }
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <Root />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}
main();
