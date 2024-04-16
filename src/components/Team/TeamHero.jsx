import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TeamHero = () => {
    return (
        <div id='teamHero' className='flex w-full h-screen items-center justify-center'>
            <h1 data-aos='fade-up' data-aos-duration='700' className='uppercase text-white font-thin tracking-tight text-[calc(1.75rem+2vw)]'>
                Meet the team
            </h1>
        </div>
    )
}

export default TeamHero