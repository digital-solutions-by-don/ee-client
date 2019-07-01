import React from 'react';
import Header from './sections/Header';
import About from './sections/About';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Goals from './sections/Goals';

const LandingPage = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Testimonials />
      <Goals />
    </>
  );
};

export default LandingPage;