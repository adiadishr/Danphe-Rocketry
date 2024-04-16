import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Stats = () => {
    return (
        <div data-aos='fade' data-aos-duration='700' data-aos-once='true' id='stats' className='flex h-max w-full px-[5%] py-[10rem] border-y-4 border-double border-red-600'>
            <div className="flex flex-row justify-between w-full items-center">
                <VisibilitySensor partial-visibility offset={{ bottom: 100 }}>
                    {({ isVisible }) => (
                        <>
                            <div data-aos='fade-up' data-aos-duration='700' className='text-white flex items-center justify-center text-center flex-col'>
                                <>
                                    <CountUp className='statsNum' end={92} duration='5' />
                                    <h5 className='statsDesc'>No. of Tests</h5>
                                </>
                            </div>
                            <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='100'  className='text-white flex items-center justify-center text-center flex-col'>
                                <>
                                    <CountUp className='statsNum' end={53} duration='5' />
                                    <h5 className='statsDesc'>Successful</h5>
                                </>
                            </div>
                            <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='200' className='text-white flex items-center justify-center text-center flex-col'>
                                <>
                                    <CountUp className='statsNum' end={38} duration='5' />
                                    <h5 className='statsDesc'>Retesting</h5>
                                </>
                            </div>
                        </>
                    )}
                </VisibilitySensor>
            </div>
        </div>
    )
}

export default Stats