import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { navTabs } from "../../data";
import { Link } from 'react-scroll';
import { RiMenu3Fill } from 'react-icons/ri';
import Logo from '../Logo';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeNavbar, setActiveNavbar] = useState(false);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setActiveNavbar(currentScrollPos > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${activeNavbar ? 'active' : ''}`}>
            {open && <div className='sidebar__overlay' onClick={() => setOpen(!open)}></div>}
            <Logo />
            <div className={`box nav__tabs ${open ? 'visible' : ''}`}>
                <div className="icon__container cancel__btn" onClick={() => setOpen(!open)}>
                    <FaTimes />
                </div>
                {navTabs.map((tab, index) => (
                    tab.href ? (
                        <a
                            href={tab.href}
                            className='tab'
                            key={index}
                            onClick={() => setOpen(!open)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {tab.name}
                        </a>
                    ) : (
                        <Link
                            to={tab.id}
                            className='tab'
                            activeClass='g-text'
                            smooth={true}
                            spy={true}
                            offset={-70}
                            onClick={() => setOpen(!open)}
                            key={index}>
                            {tab.name}
                        </Link>
                    )
                ))}

            </div>
            
            <div className="box">
            <Link
                    onClick={() => {
                        window.open("#", "_blank");
                    }}
                    className='btn contact__btn'>Cadastre-se</Link>
                <div className='icon__container menu__btn' onClick={() => setOpen(!open)}>
                    <RiMenu3Fill />
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;
