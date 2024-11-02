import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Your React component
// import './tailwind.css'; // Import Tailwind styles

// Function to inject the app into the DOM
function injectApp(target) {
  const container = document.createElement('div');
  container.id = 'react-root';
  // target.appendChild(container);
  document.getElementsByClassName('flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2 overflow-y-auto')[0].prepend(container)
  const root = createRoot(container);

  

  root.render(<App />);
}

// Function to observe DOM changes
function observeDOM(selector) {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        const target = document.querySelector(selector);
        if (target && !document.getElementById('react-root')) {
          console.log('Target detected! Injecting React app...');
          injectApp(target);
        }

        const elements = document.getElementsByClassName('example-class');

        console.log('elements');
        console.log(elements)
        // if (target && !elements.length) {
        //   console.log('Target detected! Injecting React app...');
        //   injectApp(target);
        // }
      }
    }
  });

  // Start observing the entire body for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.log('Observing DOM for changes...');
}

// Start observing for the target container (or parent)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => observeDOM('body')); // Change 'body' to a more specific selector if needed
} else {
  observeDOM('body');
}


// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// // Inject the React component into the DOM
// function injectApp() {
//   const container = document.createElement('div');
//   container.id = 'react-root';
//   document.body.appendChild(container);

//   const root = createRoot(container);
//   root.render(<App />);
// }

// // Ensure the DOM is ready before injecting the app
// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', injectApp);
// } else {
//   injectApp();
// }
