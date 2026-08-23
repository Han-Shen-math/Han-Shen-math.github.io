import '@fontsource/bodoni-moda/400.css';
import '@fontsource/bodoni-moda/500.css';
import '@fontsource/noto-serif-sc/400.css';
import '@fontsource/noto-serif-sc/500.css';
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/500.css';
import '@fontsource/source-sans-3/600.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Home from '../app/page';
import '../app/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
