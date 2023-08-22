import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle }from './styles/global'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <ToastContainer 
    position="top-center"
    autoClose={5000}
    />
  </React.StrictMode>
);