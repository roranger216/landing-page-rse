import React from "react";

import Header from './components/header'
import Content from './components/hero'
import About from './components/about'
import Footer from './components/footer'
import Services from './components/services'
import Contact from './components/contact'

const index = () => {
  return (
    // <div className="container mx-auto"></div>
    <div className="container mx-auto">
      <Header />
      <Content />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;