import React from 'react'
import Banner from '../components/home/banner'
import Hero from '../components/home/Hero'
import Feature from '../components/home/feature'
import Footer from '../components/home/footer'
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
