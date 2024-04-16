import React from 'react'
import DemoVideo from '../assets/demo.gif'

const Demo = () => {
    return (
        <div className='w-full px-[5%] flex-col md:my-8 '>
            <div className='flex items-center justify-center'>
                <img data-aos='fade-up' data-aos-duration='700' src={DemoVideo} className='' alt="" />
            </div>
            <div className='flex px-[5%] py-24 flex-col md:gap-16 gap-12'>
                <div className="flex items-center justify-center w-full">
                    <h1 data-aos='fade-up' data-aos-duration='700' data-aos-delay='200' data-aos-anchor='#demoList' className='uppercase flex text-white font-extralight tracking-tight text-[calc(1.75rem+2vw)]'>Danphe Rocket</h1>
                </div>
                <ul id='demoList' data-aos='fade-up' data-aos-duration='700' data-aos-delay='400' className='text-white font-light tracking-tight leading-10 text-xl grid md:grid-cols-2 items-center justify-center'>
                    <li>
                        <span className='text-red-600'>&gt; </span>
                        Height -
                        <span>15m</span>
                    </li>
                    <li>
                        <span className='text-red-600'>&gt; </span>
                        Diameter -
                        <span>1.5m</span>
                    </li>
                    <li>
                        <span className='text-red-600'>&gt; </span>
                        Stages -
                        <span>2</span>
                    </li>
                    <li>
                        <span className='text-red-600'>&gt; </span>
                        Wet Mass -
                        <span>15 Tonnes</span>
                    </li>
                    <li>
                        <span className='text-red-600'>&gt; </span>
                        Payload to LEO -
                        <span>300kg</span>
                    </li>
                    <li>
                        <span className='text-red-600'>&gt; </span>
                        Structure -
                        <span>Carbon Composite</span>
                    </li>
                    <li>
                        <span className='text-red-600'>&gt; </span>
                        Propellant -
                        <span>LOX</span>
                    </li>
                    <li>
                        <span className='text-red-600'>&gt; </span>
                        Engine Model -
                        <span>Hybrid</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Demo