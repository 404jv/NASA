import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Detail() {
    const [object, setObject] = useState({});
    const { id } = useParams();

    useEffect(() => {
        document.body.style.overflow = 'visible';
        try {
            api.get(`/detail/${id}`)
                .then(res => {
                    setObject(res.data);
                });
        } catch {
            alert('Error! Tente novamente.');
        }
    }, [id]);
 
    return (
        <div>
            <Header />
            <Link to="/">
                <FiArrowLeftCircle 
                    className="back-button"
                    size={32}
                    color="#212121"
                />
            </Link>
            <div className="detail-container">
                <h1>{object.name}</h1>
                <section className="sections-container">
                    <section className="section-1">
                        <strong>Magnitude: </strong>
                        <p>{object.absolute_magnitude_h}</p>

                        <strong>É uma ameaça: </strong>
                        <p>{object.is_potentially_hazardous_asteroid ? 'Sim' : 'Não'}</p>

                        <strong>Descoberto em: </strong>
                        <p>{object.close_approach_data_full}</p>
                    </section>

                    <section className="section-2">
                        <strong>KM/h</strong>
                        <p>{object.kilometers_per_hour}</p>
                        
                        <strong>Distância:</strong>
                        <p>
                            <span>KM:</span>
                            {object.miss_distance_kilometers}
                        </p>
                        <a target="__blank" href={object.nasa_jpl_url}>
                            Pesquisa da NASA
                        </a>
                    </section>
                </section>
            </div>
            <Footer />
        </div>
    );
}
