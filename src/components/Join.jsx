import React from 'react';
import astronautImg from '../assets/astronaut.png';
import { FaInstagram, FaLinkedinIn, FaSquareFacebook } from "react-icons/fa6";
import { AiOutlineTeam } from "react-icons/ai";

const Join = () => {

    return (
        <div id='join' data-aos='zoom' data-aos-duration="3000" data-aos-once="true" className='h-max flex px-[5%] flex-col overflow-hidden border-b-4 border-double pb-10'>
            <div className='flex w-full justify-center text-white rounded-xl py-10 mb-10 md:mb-0 mt-[60px]'>
                <h1 data-aos='fade-up' data-aos-duration="700" className="text-[calc(1.75rem+2vw)] font-extralight tracking-tight text-white uppercase">
                    Collaborate <AiOutlineTeam className='inline-flex mb-3 ml-2 font-extralight' />
                </h1>
            </div>
            <div className="flex flex-col md:flex-row w-full h-full gap-10 md:gap-0">
                {/* <div className="flex h-full md:w-1/2">
                    <img data-aos='zoom-in' data-aos-duration="700"  src={astronautImg} className='mt-[-50px] flex w-full brightness-[.7] animate-hover' alt="an astronaut skating" />
                </div> */}
                <div className="flex h-full w-full justify-center px-[10%] flex-col gap-6 divide-y">
                    <div className="flex w-full">
                        <p id='join-contetn' data-aos='fade-up' data-aos-duration="700" className='text-white font-light text-justify'>Whether you're an aspiring aerospace engineer, a space enthusiast, or a supporter of scientific advancement, we invite you to join us on our journey to the stars.</p>
                    </div>
                    <div id='socials' data-aos='fade-up' data-aos-duration="700" className="flex w-full pt-6 text-white text-[calc(1rem+1.25vw)] items-center justify-evenly">
                        <FaSquareFacebook data-aos='fade-up' data-aos-duration="700" className='flex hover:text-sky-700 cursor-pointer transition-all duration-200 ease-in' />
                        <FaLinkedinIn data-aos='fade-up' data-aos-duration="700" className='flex hover:text-cyan-500 cursor-pointer transition-all duration-200 ease-in' />
                        <FaInstagram data-aos='fade-up' data-aos-duration="700" className='flex hover:text-pink-600 cursor-pointer transition-all duration-200 ease-in' />
                    </div>
                    <div data-aos='fade-up' data-aos-duration="700" className="flex w-full pt-4 flex-col">
                        <h5 className='w-full text-white uppercase tracking-tight font-light text-center text-xl pt-5 pb-2'>Contact Us! </h5>
                        <h5 className='w-full text-white capitalize tracking-tight font-light text-center text-sm pb-5'>We'll get in touch with you!</h5>
                        <form id='joinForm' className="flex w-full flex-col" autoComplete='false'>
                            <div className="flex w-full flex-row justify-between pb-10">
                                <input className='hidden' autoComplete='false' type='text' />
                                <input type="text" id="nameInput" required className='w-[45%] focus bg-transparent pb-2 border-b-2 outline-none text-white' placeholder="Enter your name" />
                                <input type="number" id="numberInput" required className='w-[45%] bg-transparent pb-2 border-b-2 outline-none text-white' placeholder="Enter your number" />
                            </div>
                            <div className="flex w-full">
                                <textarea name="reason" id="textInput" cols="60" className='text-white outline-none bg-transparent border-b-2 w-full h-[5rem]' placeholder='Why do you want to collaborate?'></textarea>
                            </div>
                            <div className="flex w-full mt-8 justify-center">
                                <button className='bg-white w-1/2 px-3 py-2 rounded-3xl transform hover:-translate-y-2 transition-all duration-300 opacity-90 hover:opacity-100'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join