import React, { useState } from 'react';

import './style.css';

export default function InputDate({ onSubmit }) {
  const [dateSol, setDateSol] = useState(0);

  async function handleSol(e) {
    e.preventDefault();

    await onSubmit({
      dateSol
    });
  }

  return (
    <div className="input-sol">
      <p>
        A data marciana é contada por sol (rotação marciana ou dia) desde a chegada 
        do veículo espacial da <a href="https://www.nasa.gov/">NASA</a>.
        Abaixo digite a data em sol, para ver as fotos tiradas
      </p>
      <form onSubmit={handleSol} id="form">

        <input 
          type="number"
          placeholder="ex: 1000"
          value={dateSol}
          onChange={e => setDateSol(e.target.value)}
        />

        
      </form>
      <button 
        type="submit"
        className="submit"
        form="form"
      >
        Ver
      </button>
    </div>
  );
}
