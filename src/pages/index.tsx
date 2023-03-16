import React from "react";

import Header from './components/header'
import Content from './components/hero'
import About from './components/about'
import Footer from './components/footer'

const index = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Content />
      <About />
      <Footer />
    </div>
  );
};

export default index;