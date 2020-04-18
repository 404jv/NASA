import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import logoNasa from '../../../assets/nasa-logo.svg';

export default function Header() {
    const [show, setShow] = useState(true);

    const menuSection = document.querySelector('.menu-section');

    function handleMenu() {
        document.body.style.overflow = show ? 'hidden' : 'initial';
        menuSection.classList.toggle('on', show);
        setShow(!show);
    }

    return (
        <div className="header-container">
            <header>
                <a target="__blank" href="https://www.nasa.gov/">
                    <img src={logoNasa} alt="Logo da nasa" />
                </a>
                <div className="menu-section">
                    <div className="menu-toggle" onClick={handleMenu}>
                        <div class="one"></div>
                        <div class="two"></div>
                        <div class="three"></div>
                    </div>
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
                </div>
            </header>
        </div>
    );
}
