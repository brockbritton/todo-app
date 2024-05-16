import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings';
import ItemsProvider from './Context/Items';
import AuthProvider from './Context/Auth';
import { MantineProvider } from '@mantine/core';


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <AuthProvider>
        <SettingsProvider>
          <ItemsProvider>
            <App />
          </ItemsProvider >
        </SettingsProvider >
      </AuthProvider>
    </MantineProvider >
  </React.StrictMode>
);
