import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SmartestPersonApp from './SmartestPersonApp';
import './custom.css';
import './animations.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SmartestPersonApp />
  </React.StrictMode>
);
