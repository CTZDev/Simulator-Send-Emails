import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SimulatorEmailApp from './SimulatorEmailApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SimulatorEmailApp />
  </StrictMode>
);
