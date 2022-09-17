import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'pages/Root';
import AppProviders from 'contexts/AppProviders';

async function main() {
  if (window.location.pathname === '/dietmaster') {
    window.location.pathname = '/dietmaster/';
    return;
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
