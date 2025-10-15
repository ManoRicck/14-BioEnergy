"use client"

import React from 'react'
import "./About.css"
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-scroll'

const About = () => {
    return (
        <section id='about'>
            <div className="container">
                <div className="column company__photo">
                    <img src="/img/company_photo.jpeg" alt="bioenergy" />
                </div>
                <div className="column">
                    <h3 className="sub__title">A Mais de 7+ anos de Experiencia no Mercado</h3>
                    <h1 className='sub__title'>
                    Transformando sua <span className="g-text">visão</span> em realidade, concentrando-se no básico
                    </h1>
                    <p className="text__muted description">A Bioenergy se destaca pela segurança e eficiência em energia solar, utilizando sistemas fotovoltaicos avançados para máximo aproveitamento energético. Nossas soluções combinam protocolos rigorosos e tecnologia de ponta, garantindo operação contínua e protegida. Cada projeto é desenvolvido para otimizar performance e durabilidade, assegurando retorno consistente e total confiabilidade.</p>
                    <div className="group">

                        {/* Começo da row */}

                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Consultoria</p>
                                <h3>Gratis</h3>
                            </div>
                        </div>

                        { /* Final da row */ }

                        {/* Começo da row */}

                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Engenheiros</p>
                                <h3>Profissionais</h3>
                            </div>
                        </div>

                        { /* Final da row */ }


                        {/* Começo da row */}

                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Suporte</p>
                                <h3>Expert</h3>
                            </div>
                        </div>

                        { /* Final da row */ }


                        {/* Começo da row */}

                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Qualidade</p>
                                <h3>Serviços</h3>
                            </div>
                        </div>

                        { /* Final da row */ }

                    </div>{ /* Final do Grupo */ }

                    <div className="buttons__container">
                        <Link to='project' smooth={true} className='btn'>Explorar</Link>
                        <Link to='contact' smooth={true} className='btn btn__primary'>Obter uma cotação</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About