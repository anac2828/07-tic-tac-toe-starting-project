import React from 'react';
import ReactDOM from 'react-dom/client';
import { GameboardProvider } from './context/GameboardContext';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameboardProvider>
      <App />
    </GameboardProvider>
  </React.StrictMode>
);
