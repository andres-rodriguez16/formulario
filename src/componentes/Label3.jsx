import React from 'react';
import "./Label3.css"
const Informe = ['Declaración', 'Justificación'];
const Reporte = ['Registro', 'Escalabilidad'];
const Dato = ['Exponencial', 'Extra'];
const Premisa = ['Infografía', 'Biografía'];
const Justificación = ['Bibliografía', 'Gestion'];
const Encuesta = ['Estadística', 'Recopilación'];

function Label3({ input, n3 }) {
  return (
    <div>
      <label for='N1'>
        <span>N3</span>
        <select id='N1' onChange={n3}>
          <option hidden selected>
            N2
          </option>
          {input.n2 === 'Informe'
            ? Informe.map((area, i) => {
                return (
                  <option value={area} key={i}>
                    {area}
                  </option>
                );
              })
            : null}
          {input.n2 === 'Reporte'
            ? Reporte.map((area, i) => {
                return (
                  <option value={area} key={i}>
                    {area}
                  </option>
                );
              })
            : null}
          {input.n2 === 'Dato'
            ? Dato.map((area, i) => {
                return (
                  <option value={area} key={i}>
                    {area}
                  </option>
                );
              })
            : null}

          {input.n2 === 'Premisa'
            ? Premisa.map((area, i) => {
                return (
                  <option value={area} key={i}>
                    {area}
                  </option>
                );
              })
            : null}
          {input.n2 === 'Justificación'
            ? Justificación.map((area, i) => {
                return (
                  <option value={area} key={i}>
                    {area}
                  </option>
                );
              })
            : null}
          {input.n2 === 'Encuesta'
            ? Encuesta.map((area, i) => {
                return (
                  <option value={area} key={i}>
                    {area}
                  </option>
                );
              })
            : null}
        </select>
      </label>
    </div>
  );
}

export default Label3;
