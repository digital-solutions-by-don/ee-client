import React from 'react';
import Header from './sections/Header';
import About from './sections/About';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Goals from './sections/Goals';
import Navigation from '../shared/Navigation';
import Footer from '../shared/Footer';

const LandingPage = () => {
  return (
    <>
      <Navigation/>
      <Header />
      <About />
      <Services />
      <Testimonials />
      <Goals />
      <Footer/>
    </>
  );
};

export default LandingPage;