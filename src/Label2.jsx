import React from 'react'
import Label3 from './Label3'


const nivel1 = ["Informe", "Reporte"]
const nivel2 = ["Dato", "Premisa"]
const nivel3 = ["Justificación", "Encuesta"]

function Label2({input, n1, n2}) {
  return (
    <div>
      <label for="N1">
          <span>N2</span>
          <select id='N1' onChange={n2}>
            <option hidden selected >N2</option>
            {input.n1 === "Nivel 1" ? nivel1.map((area, i) => {
              return (
                <option value={area} key={i}>
                  {area}
                </option>
              );
            }
            ) : null}
            {input.n1 === "Nivel 2" ? nivel2.map((area, i) => {
              return (
                <option value={area} key={i}>
                  {area}
                </option>
              );
            }
            ) : null}
            {input.n1 === "Nivel 3" ? nivel3.map((area, i) => {
              return (
                <option value={area} key={i}>
                  {area}
                </option>
              );
            }
            ) : null}
          </select>
        </label>
        <Label3 input={input}></Label3>
    </div>
  )
}

export default Label2