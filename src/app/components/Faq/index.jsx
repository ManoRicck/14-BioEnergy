"use client"

import React, { useState } from 'react'
import "./Faq.css"
import {faq} from "../../data"
import { FaPlus, FaTimes } from 'react-icons/fa';

const Faq = () => {
    const [activeIndex,setActiveIndex] = useState(-1);
    return (
        <section id='faq'>
            <div className="container">
                <h1 className="title">
                Dúvidas <span className="g-text">Frequente</span>
                </h1>
                <div className="faq__list">
                    {
                        faq.map((list,index)=>(
                            <div 
                            className={`faq ${activeIndex === index ? 'active' : ''}`}
                            onClick={()=>{
                                if(activeIndex === index) {
                                    return setActiveIndex(-1);
                                }
                                setActiveIndex(index);
                            }}
                            key={index}>
                                <div className="question">
                                    <h3>{list.title}</h3>
                                    {
                                        activeIndex === index ?
                                        <div className="icon__container"><FaTimes/></div>:
                                        <div className="icon__container"><FaPlus/></div>
                                    }
                                </div>
                                <div className="answewr">
                                    <p className="text__muted">{list.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Faq