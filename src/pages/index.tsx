import React from "react";
import Head from './components/header';
import Content from './components/hero'
import About from './components/about'
import Team from './components/team'
import Contactus from './components/contactus'
import Newsletter from './components/newsletter'
import Footer from './components/footer'
import Service from "./components/service";


const Index: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Head />
      <Content />
      <About />
      <Service/>
      <Team />
      <Contactus />
      <Newsletter />
      <Footer />
      <Service />
      
    </div>
  );
};

export default Index;