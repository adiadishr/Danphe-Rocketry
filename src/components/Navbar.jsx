import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);
  


    return (
        <>
            <div id='navbar' className={visible ? 'navActive' : 'navHidden'}>
                <div className="w-full flex flex-row justify-between">
                    <div className="flex">
                        <img src={logo} className='flex scale-[2]' />
                    </div>
                    <div className="flex">
                        <ul className='list-none flex flex-row gap-7 '>
                            <li className='navLink navLinkActive'><a href='#hero'>Launch</a></li>
                            <li className='navLink'>Research and Development</li>
                            <li className='navLink'>Explore</li>
                            <li className='navLink'><a href='#join'>Reach</a></li>
                            <li className='flex justify-center items-center md:hidden'><AiOutlineMenu /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar