import React from 'react'
import Header from './components/Header'
import ServicesCarousel from './components/ServicesCarousel'
import HomePage from './components/HomePage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <HomePage/>
      <ServicesCarousel />
      <Footer/>
    </div>
  )
}

export default App