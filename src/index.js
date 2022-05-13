import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import {
  transitions,
  positions,
  Provider as AlertProvider,
} from '@blaumaus/react-alert';
import AlertTemplate from 'react-alert-template-basic';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './styles/index.css';

import Home from './pages/Home';
import MintRoom from './pages/MintRoom';
import registerServiceWorker from './utils/reportWebVitals';

window.onload = () => {
  localStorage.clear();
};

const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;

  return library;
};

const alertOptions = {
  position: positions.MIDDLE,
  timeout: 10000,
  transition: transitions.FADE,
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mint-room" element={<MintRoom />} />
      </Routes>
    </Router>
  );
};

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
        <App />
      </AlertProvider>
    </Web3ReactProvider>
  </React.StrictMode>
);

registerServiceWorker();
