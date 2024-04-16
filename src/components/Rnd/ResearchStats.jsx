import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const ResearchStats = () => {
    return (
        <div data-aos='fade' data-aos-duration='700' data-aos-once='true' id='stats' className='flex h-[90vh] w-full px-[5%] py-[7.5rem] '>
            <div className="flex flex-row justify-between w-full items-center">
                <VisibilitySensor partial-visibility offset={{ bottom: 100 }}>
                    {({ isVisible }) => (
                        <>
                            <div data-aos='fade-up' data-aos-duration='700' className='text-white flex items-center justify-center text-center flex-col'>
                                <>
                                    <CountUp className='statsNum' end={3} duration='5' />
                                    <h5 className='statsDesc'>Total Launches</h5>
                                </>
                            </div>
                            <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='100' className='text-white flex items-center justify-center text-center flex-col'>
                                <>
                                    <CountUp className='statsNum' end={7} duration='5' />
                                    <h5 className='statsDesc'>Total Landings</h5>
                                </>
                            </div>
                            <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='200' className='text-white flex items-center justify-center text-center flex-col'>
                                <>
                                    <CountUp className='statsNum' end={4} duration='5' />
                                    <h5 className='statsDesc'>Reflown Rockets</h5>
                                </>
                            </div>
                        </>
                    )}
                </VisibilitySensor>
            </div>
        </div>
    )
}

export default ResearchStats