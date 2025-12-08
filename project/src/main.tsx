import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import CaseStudies from './CaseStudies.tsx';
import './index.css';

const pathname = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {pathname.startsWith('/case-studies') ? <CaseStudies /> : <App />}
  </StrictMode>
);
