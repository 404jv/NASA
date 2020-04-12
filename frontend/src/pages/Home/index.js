import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';
import Header from '../Components/Header';
import InputDate from '../Components/InputDate';
import Footer from '../Components/Footer';

export default function Home() {
    const [objects, setObjects] = useState([]);


    function handleDate(date) {
        try {
            api.post('/', {
                dateStart: date.dateStart,
                dateEnd: date.dateEnd
            }).then(res => {
                setObjects(res.data);
            });

        } catch (error) {
            alert('Error! Datas inválidas tente novamente.');
        }
    }

    useEffect(() => {
        api.post('/', {
            dateStart: "2020-01-04",
            dateEnd: "2020-01-04"
        }).then(res => {
            setObjects(res.data);
        });
    }, []);

    return (
        <div>
            <Header />
            <InputDate onSubmit={handleDate} />
            <div className="home-container">
                <h1>Objetos próximos a terra</h1>
                <ul>
                    {objects.map(object => (
                        <li key={object.id}>
                            <strong className="name">{object.name}</strong>
                            <strong>Magnitude: </strong>
                            <p>{object.absolute_magnitude_h}</p>
                            <strong>É uma ameaça:</strong>
                            <p>{object.is_potentially_hazardous_asteroid ? 'Sim' : 'Não'}</p>
                            <strong>Diametro: </strong>
                            <p>
                                <p>
                                    <span>KM:</span> 
                                    {object.estimated_diameter_kilometers.estimated_diameter_max.toFixed(5)}
                                    -{object.estimated_diameter_kilometers.estimated_diameter_min.toFixed(5)}
                                </p> 
                                
                                <p>
                                    <span>M:</span> 
                                    {object.estimated_diameter_meters.estimated_diameter_max.toFixed(5)}
                                    -{object.estimated_diameter_meters.estimated_diameter_min.toFixed(5)}
                                </p>
                            </p>
                            <Link to="#" className="detail">
                                Mais detalhes
                                <FiArrowRight 
                                    size={16}
                                    color="#212121"
                                />
                            </Link> 
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
}
