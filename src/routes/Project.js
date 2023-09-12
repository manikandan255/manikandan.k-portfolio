import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'

const project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="My most recent project highlights"/>
      <Work />
      <Footer />
    </div>
  )
}

export default project