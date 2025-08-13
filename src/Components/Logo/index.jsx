import React from 'react'
import "./Logo.css"

import LogoImagem from '/logo.png'

const Logo = () => {
    return (
        <div className='logo'>
            <img src={LogoImagem} className='icon' />
            <h1 className="name">Bio<span className="color__primary">Energy</span></h1>
        </div>
    )
}

export default Logo
