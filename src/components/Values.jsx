const Values = () => {
    return (
        <div id='values' className='h-max flex w-full relative px-[5%] flex-col gap-16 pb-20 md:pb-40'>

            <h1 data-aos='fade-up' data-aos-duration="700" className="text-[calc(1.75rem+2vw)] font-extralight tracking-tight text-white uppercase mt-[4rem] md:mt-[180px] flex w-full justify-center">
                Our Values
            </h1>

            <div className="flex flex-col md:flex-row w-full text-white text-justify md:justify-between px-[7.5%] gap-24">
                <div data-aos='fade-up' data-aos-duration="700" data-aos-delay='100' className='valuesContent w-full'>
                    <div className='pb-4 flex w-full justify-center text-[calc(1rem+2vw)] uppercase'>Mission</div>
                    <div className='pt-4 font-light'>At Danphe Rocketry, our mission is to inspire, innovate, and ignite a passion for space exploration in Nepal and beyond.
                        {/* We strive to develop cutting-edge rocket propulsion technology that not only advances scientific knowledge but also fosters economic growth and national pride. */}
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-duration="700" data-aos-delay='200' className='valuesContent w-full'>
                    <div className='pb-4 flex w-full justify-center text-[calc(1rem+2vw)] uppercase'>Vision</div>
                    <div className='pt-4 font-light'>
                        We envision a future where Nepal emerges as a key player in the global aerospace community, with Danphe Rocketry leading the charge in space innovation.
                        {/* By leveraging our expertise and resources, we aim to establish Nepal as a hub for aerospace research, development, and exploration. */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Values