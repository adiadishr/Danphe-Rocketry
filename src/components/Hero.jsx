import React from 'react'
import BgVideo from "../assets/earth-bg.mp4";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <>
            <div data-aos='fade' data-aos-duration='700' className="h-screen relative flex flex-col">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute right-0 top-0 h-full w-full object-cover z-[-1] blur-sm "
                >
                    <source src={BgVideo} type="video/mp4" />
                </video>
                <div className='absolute right-0 top-0 h-full w-full z-0 bg-black/50 brightness-75 blur-lg'/>
                <div className='flex items-center justify-center h-full w-full z-10' >
                    <h1 data-aos='fade-up' data-aos-duration="1000" data-aos-easing="ease-in-out"
                        className='text-white font-thin uppercase tracking-tight text-[calc(1.75rem+2vw)]'>
                        <TypeAnimation
                            sequence={[
                                'We are Pioneers',
                                1000,
                                'We are Innovators',
                                1000,
                                'We are Danphe Rocketry',
                                4000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Hero