import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import { Home } from './pages/Home';
import { AppContext } from './contexts/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext>
      <Home />
    </AppContext>
  </React.StrictMode>,
);
