import React, { useState } from 'react';

import './style.css';

export default function InputDate({ onSubmit }) {
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');

    async function handleDate(e) {
        e.preventDefault();

        await onSubmit({
            dateStart,
            dateEnd
        });

    }

    return (
        <div className="input-container">
            <p>
                Digite a data do inicio e fim, para ver os objetos registrados pela Nasa
            </p>
            <form onSubmit={handleDate}>
                <div className="input-date">
                    <div className="dateStart">
                        <input 
                            type="date" 
                            value={dateStart}
                            onChange={e => setDateStart(e.target.value)}
                        />
                    </div>
                    <div className="dateEnd">
                        <input 
                            type="date" 
                            value={dateEnd}
                            onChange={e => setDateEnd(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="submit">Ver</button>
            </form>
        </div>
    );
}
