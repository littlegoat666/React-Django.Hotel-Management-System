import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import SpecialOffers from '../components/SpecialOffers'
import Testimonial from '../components/Testimonial'
import NewLetter from '../components/NewLetter'

const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedDestination />
        <SpecialOffers />
        <Testimonial />
        <NewLetter />
    </>
  )
}

export default Home