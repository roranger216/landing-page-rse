import React from "react";
import Darkmode from './components/darkmode'
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
      <Darkmode />
      <Head />
      <Content />
      <About />
      <Service/>
      <Contactpage />
      <Team />
      <Footer />
      
    </div>
  );
};

export default Index;