import React from "react";
import Head from './components/header';
import Content from './components/hero'
import About from './components/about'
import Footer from './components/footer'

const Index: React.FC = () => {
  return (
    <div className="">
      <Head />
      <Content />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
