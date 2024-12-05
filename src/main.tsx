// main.tsx
import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';
import App from './App';
import './index.css';

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Clear service workers if they exist
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => registration.unregister());
      });
    }

    // Clear cache on load
    if (window.caches) {
      window.caches.keys().then((names) => {
        names.forEach((name) => {
          window.caches.delete(name);
        });
      });
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Reduced loading time for better user experience

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        {isLoading ? <LoadingSpinner /> : <App />}
      </ErrorBoundary>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
