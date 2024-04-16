import React from 'react'
import ResearchGalleryLeft from './ResearchGalleryLeft'
import ResearchGalleryRight from './ResearchGalleryRight';

const desc1='The image showcases a test setup featuring a liquid oxygen tank and a hybrid rocket engine. Embedded sensors record data for performance analysis and adjustment. This setup reflects advanced technology and meticulous testing methodologies crucial for optimizing rocket propulsion systems in space exploration endeavors.';

const desc2='The combustion process relies on oxygen for fuel ignition. Integrating fuel into the engine enhances its capabilities, including the ability to regulate thrust, particularly evident in hybrid engines.';

const desc3='Obtaining key data from the system is essential for its continuous refinement. The transmitter and receiver mentioned above facilitate the transmission of data from the onboard computer, enabling crucial feedback for system optimization.';

const desc4='Conducting numerous iterations of the system during the research and development phase of rocket development is vital for advancing the system and achieving optimal results. The figure illustrates the design and simulation process of a hybrid rocket engine, critical for refining its performance and achieving desired outcomes.';

const ResearchGallery = () => {
    return (
        <div className='w-full flex flex-col'>
            <ResearchGalleryLeft title='Rocket Engine' desc={desc1} imgId='rndGalleryImageOne' delay={50} />
            <ResearchGalleryRight title='Oxygen Tank' desc={desc2} imgId='rndGalleryImageTwo' delay={100} />
            <ResearchGalleryLeft title='Transmitor' desc={desc3} imgId='rndGalleryImageThree' delay={150} />
            <ResearchGalleryRight title='The Process' desc={desc4} imgId='rndGalleryImageFour' delay={200} />
        </div>
    )
}

export default ResearchGallery