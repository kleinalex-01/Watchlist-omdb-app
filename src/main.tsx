import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WatchlistProvider } from './Context/WatchlistContext.tsx'
import { ThemeProvider } from './Context/ThemeContext.tsx'

import { BrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WatchlistProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </WatchlistProvider>
  </StrictMode>,
)
