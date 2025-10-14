"use client"

import React from 'react'
import "./Testimonial.css"
import Slider from 'react-slick'
import { testimonial } from '../../data'
import { FaStar } from 'react-icons/fa'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    return (
        <section id='testimonial'>
            <div className="container">
                <h1 className="title">
                    Comentários <span className="g-text">dos Clientes</span>
                </h1>
                <Slider {...settings} className="clientes__container">
                    {testimonial.map((list, index) => (
                        <div key={index} className="testimonial__card">
                            <div className="stars__container">
                                {Array.from({ length: list.rating }, (_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="text__muted content">{list.review}</p>
                            <div className="user__row">
                                <div className="profile">
                                    <img src={list.image} alt={list.name} />
                                </div>
                                <div className="details">
                                    <h3 className="name">{list.name}</h3>
                                    <small>{list.position}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    )
}

export default Testimonial