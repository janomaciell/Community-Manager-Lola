import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './styles/App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Hero />
                    <Services />
                    <About />
                    <Portfolio />
                    <Testimonials />
                    <Contact />
                  </>
                } 
              />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;