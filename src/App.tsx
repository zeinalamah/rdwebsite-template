// App.tsx
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { BackToTop } from './components/BackToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import Sitemap from './pages/Sitemap';
import WhyRD from './components/WhyRD';
import Approach from './components/Approach';
import Services from './components/Services';

const App = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <Navigation />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/why-rd" element={<WhyRD />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
        
        <Footer />
        <BackToTop />
        <CookieConsent />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#2B3187',
              color: '#F7F8F8',
              border: '1px solid rgba(43, 49, 135, 0.2)',
            },
          }}
        />
      </div>
    </HelmetProvider>
  );
};

export default App;
