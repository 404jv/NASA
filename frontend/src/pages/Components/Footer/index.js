import React from 'react';
import { FiGithub, FiInstagram } from 'react-icons/fi';

import './style.css';

export default function Footer() {
    return (
        <footer>
            <p>Todas as informações aqui são obtidas na 
                <a target="__blank" href="https://www.nasa.gov/"> Nasa</a>
            </p>
            <div className="network">
                <ul>
                    <li> 
                        <a target="__blank" href="https://github.com/Ezever">
                            <FiGithub color="#FFF" size={20}/>
                        </a>
                    </li>
                    <li>
                        <a target="__blank" href="https://www.instagram.com/404jv">
                            <FiInstagram color="#FFF" size={20}/>
                        </a>
                    </li>
                </ul>
            </div>
            <p>By: João Victor Ramalho Alves</p>
        </footer>
    );
}
