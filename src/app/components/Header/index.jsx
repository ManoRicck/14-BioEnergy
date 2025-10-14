"use client"

import React from 'react'
import "./Header.css"
import { Link } from 'react-scroll'

import SolarSystem from '../SolarSystem'

const Header = () => {
    return (
        <header id='header'>

            <div className="container full__height blur-effect">
                <div className="column">
                    <h1 className="title">
                    BioEnergy <span className="g-text">Energia Solar</span>
                    </h1>
                    <p className="text__muted">
                    A BioEnergy uma empresa pioneira no desenvolvimento de projetos de energia solar no Brasil. Fundada em 2024, nossa missão é fornecer informações claras e acessíveis sobre como a energia solar funciona, suas vantagens e desvantagens, e o impacto financeiro positivo sobre a vida dos nossos usuários.
                    </p>
                    <div className="buttons__container">
                        <Link to='services' className='btn'>Nossos Serviços</Link>
                        <Link to='contact' className='btn btn__primary'>Contate-nos</Link>
                    </div>
                </div>
                <div className="column"></div>
                <div className="image__container primary-effect">
                    <div className="system__wrapper">
                        <SolarSystem/>
                    </div>
                    <img src="/img/solar-skyscraper.png" alt="bioenergy" />
                </div>
            </div>
        </header>
    )
}

export default Header