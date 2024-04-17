import React from 'react'
import Navbar from '../components/Navbar'
import ExploreHero from '../components/Explore/ExploreHero'
import Join from '../components/Join'
import ExploreCarousel from '../components/Explore/ExploreCarousel'

const Explore = () => {
  return (
    <div>
      <div id="explore"></div>
      <Navbar title='4' />
      <ExploreHero />
      <ExploreCarousel />
      <Join />
    </div>
  )
}

export default Explore