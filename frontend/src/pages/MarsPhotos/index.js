import React, { useEffect, useState } from 'react';

import './style.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import api from '../../services/api';


export default function MarsPhoto() {
  const [marsPhotos, setMarsPhotos] = useState([]);

  useEffect(() => {
    document.body.style.overflow = 'visible';

    api.post('/mars', {
      sol: 2742
    }).then(res => {
      setMarsPhotos(res.data);
    })

  }, [marsPhotos]);
  
  return (
    <div>
      <Header />
      <div className="marsPhoto-container">

      <ul className="photos">
        {marsPhotos.map(photos => (
          <li key={photos.id}>
            <strong className="name">{photos.nameCamera}</strong>

            <img 
              src={photos.img_src} 
              alt={`Foto tirada pelo ${photos.nameCamera}`}
            />

            <strong className="date">{photos.earth_date}</strong>
          </li>
        )) }
      </ul>

      </div>
     <Footer />
    </div>
  );
}
