import React from 'react'
import Join from '../components/Join';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About'
import Stats from '../components/Stats';
import Values from '../components/Values';
import Demo from '../components/Demo';

const Launch = () => {
  return (
    <>
      <div id="launch" />
      <Navbar title='1' />
      <Hero />
      <About />
      <Stats />
      <Demo />
      <Values />
      <Join />
    </>
  )
}

export default Launch