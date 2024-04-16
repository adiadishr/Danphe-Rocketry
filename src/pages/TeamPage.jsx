import React from 'react'
import Navbar from '../components/Navbar'
import Join from '../components/Join'
import Team from '../components/Team/Team'
import TeamHero from '../components/Team/TeamHero'


const TeamPage = () => {
    return (
        <>
            <Navbar title='3' />
            <TeamHero />
            <Team />
            <Join />
        </>
    )
}

export default TeamPage