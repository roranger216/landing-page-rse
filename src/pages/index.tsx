import React from "react";
import Head from './components/header';
import Content from './components/hero'
import About from './components/about'
import Team from './components/team'
import Footer from './components/footer'


const Index: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Head />
      <Content />
      <About />
      <Team />
      <Footer />
      
    </div>
  );
};

export default Index;
