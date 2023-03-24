import React from "react";
import Darkmode from './components/darkmode/darkmode'
import Head from './components/landing-page/header';
import Content from './components/landing-page/hero'
import About from './components/landing-page/about'
import Service from "./components/landing-page/service";
import Team from './components/landing-page/team'
import Contactpage from './components/landing-page/contactpage'
import Footer from './components/landing-page/footer'



const Index: React.FC = () => {
  return (
    <div className="index">
    <Head />
      <div className="container mx-auto">
      <Darkmode />
      <Content />
      <About />
      <Service/>
      <Contactpage />
      <Team />
      </div>
      <Footer />
    </div>
    
  );
};

export default Index;