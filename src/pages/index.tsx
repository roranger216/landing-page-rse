import React from "react";
import Head from './components/header';
import Content from './components/hero'
import About from './components/about'
import Service from "./components/service";
import Team from './components/team'
import Contactpage from './components/contactpage'
import Footer from './components/footer'



const Index: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Head />
      <Content />
      <About />
      <Service/>
      <Team />
      <Contactpage />
      <Footer />
      
    </div>
  );
};

export default Index;