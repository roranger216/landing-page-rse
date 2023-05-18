import React from "react";
import Darkmode from './components/darkmode/darkmode'
import Head from './landing-page/header';
import Content from './landing-page/hero'
import About from './landing-page/about-us'
import Service from "./landing-page/services";
import Team from './landing-page/team'
import Contactpage from './landing-page/contactpage'
import Footer from './landing-page/footer'



const Index: React.FC = () => {
  return (
    <div className="index">
      <Head />
      <div className="container mx-auto">
        <Darkmode />
        <Content />
      </div>
      <About />
      <div className="container mx-auto">
        <Service />
      </div>
      <Contactpage />
      {/* <div className="container mx-auto">
        <Team />
      </div> */}
      <Footer />
    </div>

  );
};

export default Index;