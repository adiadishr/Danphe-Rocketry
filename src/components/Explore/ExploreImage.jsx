import React from 'react'
import image from '../../assets/oxygen.jpeg'

const ExploreImage = () => {
    return (
        <div className='rounded-3xl overflow-hidden scale-90 hover:scale-100 transition-all duration-300 ease-in-out h-[24rem]'>
            <img className='brightness-[.9] hover:brightness-100 transition-all duration-300 flex h-full w-full object-fill' src={image} alt="" />
        </div>
    )
}

export default ExploreImage