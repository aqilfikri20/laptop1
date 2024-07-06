import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import LaptopApp from './LaptopApp';

import './style.css';
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LaptopApp />
  </BrowserRouter>
);
