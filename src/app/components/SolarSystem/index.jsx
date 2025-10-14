import React from "react";
import "./SolarSystem.css"

const SolarSystem = () => {
    return (
        <div className="solar__system">
            <div className="sun">
                <img src="/img/sun.png" alt="Sol" />
            </div>
            <div className="mercury"></div>
            <div className="venus"></div>
            <div className="earth">
            <div className="moon"></div>
            </div>
            <div className="mars"></div>
            <div className="jupiter"></div>
            <div className="saturn"></div>
            <div className="uranus"></div>
            <div className="neptune"></div>
            <div className="pluto"></div>
        </div>
    )
}

export default SolarSystem
