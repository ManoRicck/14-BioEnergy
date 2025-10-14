"use client"

import React, { useState } from 'react'
import "./Contact.css"
import { contacts } from '../../data'

const Contact = () => {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    });

    const data = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const getdata = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, phone, message } = user;

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname, lastname, email, phone, message
            })
        };

        try {
            const response = await fetch('https://login-registro-2928a-default-rtdb.firebaseio.com/UserData.json', options);
            if (response.ok) {
                setUser({
                    firstname: "",
                    lastname: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            } else {
                alert("Erro no envio");
            }
        } catch (error) {
            console.error("Erro na solicitação:", error);
            alert("Erro na solicitação");
        }
    };

    return (
        <section id='contact'>
            <div className="bg__image"></div>
            <div className="overlay"></div>
            <div className="container">
                <div className="column">
                    {
                        contacts.map((contact,index) => (
                            <div className="contact__info" key={index}>
                                <div className="icon__container">{contact.icon}</div>
                                <div className="details">
                                    <p className="text__muted">{contact.name}</p>
                                    <h3 className="value">{contact.value}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="column form__container">
                    <div className="form__top">
                        <h3 className="sub__title g-text">Fale Conosco</h3>
                        <p>
                            Estamos aqui para ajudar! Se você tiver alguma dúvida, sugestão ou precisar de assistência, não hesite em nos contatar. Nossa equipe está pronta para atendê-lo da melhor forma possível.
                        </p>
                    </div>
                    <div className="form__middle">
                        <div className="row">
                            <input 
                                type="text" 
                                placeholder='Primeiro nome' 
                                value={user.firstname}
                                onChange={data}
                                name='firstname' 
                                className='control'/>

                            <input 
                                type="text" 
                                placeholder='Sobrenome' 
                                value={user.lastname}
                                onChange={data}
                                name='lastname' 
                                className='control'/>
                        </div>

                        <div className="row">
                            <input 
                                type="email" 
                                placeholder='Email'
                                value={user.email}
                                onChange={data}
                                name='email' 
                                className='control'/>

                            <input 
                                type="tel" 
                                placeholder='Telefone' 
                                value={user.phone}
                                onChange={data}
                                name='phone' 
                                className='control'/>
                        </div>
                        <textarea 
                            name="message" 
                            id="" 
                            cols={30} 
                            rows={5} 
                            placeholder='Mensagem'
                            value={user.message}
                            onChange={data}
                            className='control'>
                        </textarea>
                    </div>
                    <div className="from__bottom">
                        <button className="btn btn__primary" onClick={getdata}>Enviar mensagem</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
