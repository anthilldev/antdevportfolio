import React from 'react'
import Hero from '../heros/Hero'
import SectionOne from '../sections/SectionOne'
import SectionTwo from '../sections/SectionTwo'
import SectionThree from '../sections/SectionThree'
import Footer from '../footers/Footer'

const BodySection = () => {
  return (
    <div> 
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Footer />
    </div>
  )
}

export default BodySection