import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ClientContext } from 'graphql-hooks';
import { client } from 'utils/datocms';

import './stylesheets/application.sass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClientContext.Provider>
  </React.StrictMode>
);
