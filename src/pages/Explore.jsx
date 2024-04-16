import React from 'react'
import Navbar from '../components/Navbar'
import ExploreHero from '../components/Explore/ExploreHero'
import Join from '../components/Join'

const Explore = () => {
  return (
    <div>
        <Navbar title='3' />
        <ExploreHero />
        <Join />
    </div>
  )
}

export default Explore