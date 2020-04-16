import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import logoNasa from '../../../assets/nasa-logo.svg';

export default function Header() {

    return (
        <div className="header-container">
            <header>
                <a target="__blank" href="https://www.nasa.gov/">
                    <img src={logoNasa} alt="Logo da nasa" />
                </a>
                <ul className="options">
                    <li>
                        <Link to="/">
                            <button>Asteroides</button>
                        </Link> 
                    </li>
                    <li>
                        <Link to="/apod">
                            <button>APOD</button>
                        </Link> 
                    </li>
                    <li>
                        <Link to="#">
                            <button>Terra</button>
                        </Link> 
                    </li>
                </ul>
            </header>
        </div>
    );
}
