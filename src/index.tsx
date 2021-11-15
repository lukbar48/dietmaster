import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'pages/Root';
import PatientProvider from 'contexts/context';
import { worker } from './mocks/browser';

async function main() {
  if (process.env.NODE_ENV === 'development') {
    if (window.location.pathname === '/dietmaster') {
      window.location.pathname = '/dietmaster/'
      return
    }
    const { worker } = require('./mocks/browser')
    await worker.start({
      serviceWorker: {
        url: '/dietmaster/mockServiceWorker.js',
      },
    })
  }
  ReactDOM.render(
    <React.StrictMode>
      <PatientProvider>
        <Root />
      </PatientProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  )
}
main()

// ReactDOM.render(
//   <React.StrictMode>
//     <PatientProvider>
//       <Root />
//     </PatientProvider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// )