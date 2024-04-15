import React from 'react'
import BgVideo from "../assets/earth-bg.mp4";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <>
            <div className="h-screen relative flex flex-col">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute right-0 top-0 h-full w-full object-cover z-[-1] brightness-75 blur-[2px]"
                >
                    <source src={BgVideo} type="video/mp4" />
                </video>
                <div className='flex items-center justify-center h-full w-full' >
                    <h1 data-aos='fade-up' data-aos-duration="1000" data-aos-easing="ease-in-out"
                        className='text-white font-thin tracking-tight text-[calc(1.75rem+2vw)]'>
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