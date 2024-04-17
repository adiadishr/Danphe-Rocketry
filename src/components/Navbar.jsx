import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ title }) => {

    const hrefValue =
        title === '1' ? '#launch' :
            title === '2' ? '#rnd' :
                title === '3' ? '#explore' :
                    '#';

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
                        <a className='flex' href={hrefValue}><img src={logo} className='flex scale-[2]' /></a>
                    </div>
                    <div className="flex">
                        <ul className='list-none flex flex-row gap-7 '>
                            <li className={title == '1' ? 'navLink navLinkActive' : 'navLink'}> <NavLink to="/"><a className='flex flex-row items-center justify-center gap-2'>Launch</a></NavLink></li>
                            <li className={title === '2' ? 'navLink navLinkActive' : 'navLink'}><NavLink to="/Research&Development">Research and Development </NavLink></li>
                            <li className={title === '3' ? 'navLink navLinkActive' : 'navLink'}><NavLink to="/Team">Team</NavLink></li>
                            <li className={title === '4' ? 'navLink navLinkActive' : 'navLink'}><NavLink to="/Explore/#explore">Explore</NavLink></li>
                            <li className='navLink border'><a className='flex flex-row items-center justify-center gap-2' href='#join'>Reach <BiPhoneCall className='flex w-4 h-auto items-center justify-center' /></a></li>
                            <li className='flex justify-center items-center md:hidden'><AiOutlineMenu /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar