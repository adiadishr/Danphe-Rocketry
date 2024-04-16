import React from 'react'

const ResearchGalleryLeft = ({title, desc, imgId, delay}) => {
    return (
        <div data-aos='fade-right' data-aos-duration='1200' data-aos-delay={delay} className='flex flex-col md:flex-row border-collapse md:justify-between items-center h-full border-y-2 border-red-700 '>
            <div className='border-collapse flex md:w-1/2 h-full px-[5%] flex-col py-24 md:py-0'>
                <h2 className='flex w-full text-center justify-center font-light tracking-tight text-2xl text-white uppercase mb-4'>{title}</h2>
                <h5 className='text-white text-justify text-base font-light leading-8'>
                    {desc}
                </h5>
            </div>
            <div id={imgId} className='border-collapse flex md:w-1/2 h-[30rem] w-full md:border-l-2  border-red-600' />
        </div>
    )
}

export default ResearchGalleryLeft