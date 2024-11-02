import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Mount React app
function mountApp() {
  const container = document.createElement('div');
  container.id = 'react-extension-root';
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(<App />);
}

// Wait until the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
