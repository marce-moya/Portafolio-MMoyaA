'use client';
import React from 'react';

const ClientButton = () => {
    const handleClick = () => {
        alert('Botón clickeado!');
    };

    return(
        <button className='bg-orange-700 text-white w-44 rounded-md py-2 mx-2 font-mono hover:bg-violet-800' onClick={handleClick}>Botón de muestra</button>
    );

};

export default ClientButton

