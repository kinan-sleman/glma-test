
import Header from './components/common/Header';
import Hero from './components/Hero';
import PricingPlan from './components/PricingPlan';
import Counters from './components/Counters';
import SemiService from './components/SemiService';
import DedicatedHosting from './components/DedicatedHosting';
import Features from './components/Features.tsx';
import Technologies from './components/TestimonialsAndFaqs/Technologies.tsx';
import TechnlogyGlobally from './components/TechnlogyGlobally.tsx';
import TestimonialsAndFaqs from './components/TestimonialsAndFaqs/index.tsx';
import Footer from './components/common/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LanguageProvider } from './context/LanguageContext.tsx';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    requestAnimationFrame(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 200);
    });
  }, []);

  return (
    <LanguageProvider>
      <div className='overflow-hidden'>
        <Header />
        <Hero />
        <SemiService />
        <PricingPlan />
        <Counters />
        <DedicatedHosting />
        <Features />
        <Technologies />
        <TechnlogyGlobally />
        <TestimonialsAndFaqs />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
