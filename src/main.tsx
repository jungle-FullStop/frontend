import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/globals.css';

import { ThemeProvider } from '@material-tailwind/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Firebase Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.error("Failed to register Firebase Service Worker:", error);
    });
}
