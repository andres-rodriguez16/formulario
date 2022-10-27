import React from 'react';
import './Data.css';
function Data({ input }) {
  return (
    <div className='container'>
      <p>Titulo {input.titulo}</p>
      <p>Area {input.area}</p>
      <p>Sede {input.sede}</p>
      <p>Nivel 1 {input.n1}</p>
      <p>Nvel 2 {input.n2}</p>
      <p>Nivel 3{input.n3}</p>
      <p>Fecha de Vencimiento {input.FechaDeVencimiento}</p>
    </div>
  );
}

export default Data;
