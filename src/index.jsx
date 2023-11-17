import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './commons/style/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import ChannelProvider from './contexts/ChannelProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ChannelProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChannelProvider>
  </React.StrictMode>,
);
