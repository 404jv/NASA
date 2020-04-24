import React, { useEffect, useState } from 'react';

import './style.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import api from '../../services/api';

export default function Apod() {
    const [apod, setApod] = useState({});

    useEffect(() => {
        document.body.style.overflow = 'visible';
        try {
            api.get('/apod')
                .then(res => { 
                    setApod(res.data);
                });
        } catch (error) {
            alert('Error! Tente novamente.');
        }
    }, [apod]);

    return (
        <div>
            <Header />
            <div className="apod-container">
                <p>APOD (astronomy picture of the day). Uma foto astronômica do dia</p>
                <h1>{apod.title}</h1>
                <section className="section-1">
                    <section className="info">
                        <span>{apod.date}</span> 
                        <span>&copy;{apod.copyright}</span>
                    </section>
                    { apod.media_type === 'image' ? 
                        <img src={apod.hdurl} alt={apod.title}/> : 
                        <video 
                            width="320" 
                            height="240" 
                            src={apod.url}> 
                        Seu navegador não suporta o vídeo                        
                        </video> 
                    }
                    <section className="description">
                        <p>{apod.explanation}</p>
                    </section>
                </section>
            </div>
            <Footer />
        </div>
    );
}
