"use client"

import React from 'react';
import "./Footer.css";
import { footer } from '../../data';
import { Link } from 'react-scroll';
import Logo from '../Logo';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="row">
                    {
                        footer.map((list, index) => (
                            <div className="column" key={index}>
                                <h3 className="routers__name">{list.name}</h3>
                                <div className="routes__container">
                                    {
                                        list.routes.map((route, i) => (
                                            route.href ? (
                                                <a 
                                                    href={route.href} 
                                                    className="router__item" 
                                                    key={i} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer">
                                                    <p className="name">{route.name}</p>
                                                </a>
                                            ) : (
                                                <Link 
                                                    to={route.id || "#"} 
                                                    className="router__item" 
                                                    key={i} 
                                                    smooth={true} 
                                                    duration={500}>
                                                    <p className="name">{route.name}</p>
                                                </Link>
                                            )
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                    <div className="column">
                        
                        <div className="newsletter">
                            <h3>Receba atualizações semanais</h3>
                            <div className="control__container">
                                <input 
                                    type="email" 
                                    placeholder='Digite seu e-mail' 
                                    className="control" 
                                />
                                <button className="btn">Inscrever-se</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <h3>Copyright &copy; All right reserved -| 2025</h3>
                    <p className="text__muted">
                        A BioEnergy apoia um futuro sustentável e acessível para todos
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
