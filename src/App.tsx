import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

import { FavoritesProvider } from './hooks/useFavorites'

import { GlobalStyles } from "./globalStyles";

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </FavoritesProvider>
  );
}

export default App;
