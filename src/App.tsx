import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { GlobalStyles } from './globalStyles';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
      <ToastContainer />
    </>
  );
}

export default App;
