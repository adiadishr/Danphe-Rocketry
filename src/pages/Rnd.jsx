import React from 'react'
import Navbar from '../components/Navbar'
import ResearchHero from '../components/Rnd/ResearchHero'
import ResearchStats from '../components/Rnd/ResearchStats'
import ResearchGallery from '../components/Rnd/ResearchGallery'
import Join from '../components/Join';


const Rnd = () => {
    return (
        <div className='overflow-hidden'>
            <div id="rnd" />
            <Navbar title='2' />
            <ResearchHero />
            <ResearchStats />
            <ResearchGallery />
            <Join />
        </div>
    )
}

export default Rnd