import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { GlobalStyle } from 'utils/GlobalStyle.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/mbunity-test-task/contacts">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
