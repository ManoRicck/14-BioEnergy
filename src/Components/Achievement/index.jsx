import React, { useState,useRef } from 'react'
import "./Achievement.css"
import { FaDiagramProject, FaUsersLine } from 'react-icons/fa6'
import Odometer from 'react-odometerjs'
import { GiTeamIdea } from 'react-icons/gi'
import { FaAward } from 'react-icons/fa'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Achievement = () => {
    const [clients, setClients] = useState(0)
    const [projects, setProjects] = useState(0)
    const [team, setTeam] = useState(0)
    const [awards, setAwards] = useState(0)
    const container = useRef(null);
    const updateData = () => {
        const timeout = setTimeout( () =>{
            setClients(120);
            setProjects(150);
            setTeam(5);
            setAwards(89);

        },500)
        return () => clearTimeout(timeout);
    }

    const resetData = () =>{
        setClients(0);
        setProjects(0);
        setTeam(0);
        setAwards(0);
    }

    useGSAP(()=>{
        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:container.current,
                start:'top bottom',
                end:'bottom top',
                scrub:4,
                onEnter:updateData,
                onLeaveBack:resetData,
            }
        });
        return ()=> timeline.revert();
    },{scope:container})
    
    return (
        <div className='achievement__container' ref={container}>
            <div className="container">


                {/* Começa a Conquista */}
                <div className="achievement">
                    <div className="icon__container"><FaUsersLine/></div>
                    <div className="details">
                        <div className="row">
                            <Odometer
                                value={clients}
                                className='title'
                            />
                            <h1 className="title">K</h1>
                        </div>
                        <small className="text_muted">Clientes satisfeitos</small>
                    </div>
                </div>
                {/* Encerra a Conquista */}



                {/* Começa a Conquista */}
                <div className="achievement">
                    <div className="icon__container"><FaDiagramProject/></div>
                    <div className="details">
                        <div className="row">
                            <Odometer
                                value={projects}
                                className='title'
                            />
                            <h1 className="title">+</h1>
                        </div>
                        <small className="text_muted">Projetos Finalizados</small>
                    </div>
                </div>
                {/* Encerra a Conquista */}


                {/* Começa a Conquista */}
                <div className="achievement">
                    <div className="icon__container"><GiTeamIdea/></div>
                    <div className="details">
                        <div className="row">
                            <Odometer
                                value={team}
                                className='title'
                            />
                            <h1 className="title">+</h1>
                        </div>
                        <small className="text_muted">Trabalhadores Especializados</small>
                    </div>
                </div>
                {/* Encerra a Conquista */}


                {/* Começa a Conquista */}
                <div className="achievement">
                    <div className="icon__container"><FaAward/></div>
                    <div className="details">
                        <div className="row">
                            <Odometer
                                value={awards}
                                className='title'
                            />
                            <h1 className="title">+</h1>
                        </div>
                        <small className="text_muted">Prêmios vencedores</small>
                    </div>
                </div>
                {/* Encerra a Conquista */}


            </div>
        </div>
    )
}

export default Achievement 
