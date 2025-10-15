"use client";

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
    const [isMobile, setIsMobile] = useState(false); // Inicialize como false

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setActiveNavbar(currentScrollPos > 50);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 450);
    };

    useEffect(() => {
        // Configurar o estado inicial após a montagem do componente
        setIsMobile(window.innerWidth <= 450);
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
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
                {/* Botão de cadastro no menu responsivo */}
                {isMobile && (
                    <Link
                        onClick={() => {
                            window.open("#", "_blank");
                        }}
                        className='btn contact__btn responsive__cadastro'>
                        Cadastre-se
                    </Link>
                )}
            </div>
            
            <div className="box">
                {/* Botão de cadastro fora do menu */}
                {!isMobile && (
                    <Link
                        onClick={() => {
                            window.open("#", "_blank");
                        }}
                        className='btn contact__btn'>
                        Cadastre-se
                    </Link>
                )}
                <div className='icon__container menu__btn' onClick={() => setOpen(!open)}>
                    <RiMenu3Fill />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;