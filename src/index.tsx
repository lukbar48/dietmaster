import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'pages/Root';
import PatientProvider from 'contexts/context';

ReactDOM.render(
  <React.StrictMode>
    <PatientProvider>
      <Root />
    </PatientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
