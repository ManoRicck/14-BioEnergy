"use client"

import React from "react"
import "./Logo.css"

const Logo = () => {
  return (
    <div className="logo">
      <img src="/logo.png" alt="Logo BioEnergy" className="icon" />
      <h1 className="name">
        Bio<span className="color__primary">Energy</span>
      </h1>
    </div>
  )
}

export default Logo
