import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { store } from './store';
import { App } from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CLIENT_ID, DOMAINS } from './constants';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    {/* Temp solution with empty strings for fast dev process */}
    <Auth0Provider
      domain={DOMAINS ?? ''}
      clientId={CLIENT_ID ?? ''}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
);
