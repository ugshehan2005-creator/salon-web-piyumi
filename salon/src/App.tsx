import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Footer from './components/Footer'

import BackgroundVideo from './components/BackgroundVideo'

const App = () => {
  return (
    <div className="font-sans text-text-dark selection:bg-blush/30">
      <BackgroundVideo />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Booking />
      <Footer />
    </div>
  )
}

export default App