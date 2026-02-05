
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ExpertConsultation from './components/ExpertConsultation';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <ExpertConsultation />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
