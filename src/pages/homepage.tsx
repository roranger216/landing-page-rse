import React from 'react'
import Header from './components/dashboard_header'
import Footer from './components/footer'

const Homepage = () => {
  return (
    <div className="HomePage">
        <Header />
        <div className="containter ml-52 h-96">
          <div className="section1 flex bg-red-600"></div>
          <div className="section2 flex bg-red-600"></div>
          <div className="section3 flex bg-red-600"></div>
          <div className="section4 flex bg-red-600"></div>
          <div className="section5 flex bg-red-600"></div>
        </div>
        <Footer/>
    </div>
  )
}

export default Homepage