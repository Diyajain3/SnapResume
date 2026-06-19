import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Feature from '../components/home/Feature'
import Footer from '../components/home/Footer'
import Testimonial from '../components/home/Testimonial'
import CallToAction from '../components/home/CallToAction'
const Home = () => {
  return (
    <div>
      <Banner/>
      <Hero/>
      <Feature/>
      <Testimonial/>
      <CallToAction></CallToAction>
      <Footer/>
    </div>
  )
}

export default Home
