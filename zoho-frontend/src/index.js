import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ Corrected path to your CSS file
import './pages/view/Auth.css';

// Optional: If you're using React Router or other providers, wrap them here
// import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
