import './App.css';
import { useState } from 'react';
import Label2 from './componentes/Label2';
import Data from './componentes/Data';


const selectArea = ["Sistemas", "Gerencias", "Contabilidad"]
const selectSede = ["Bello", "Medellín", "Envigado", "Sabaneta"]
const nivel = ["Nivel 1", "Nivel 2", "Nivel 3"]



function App() {

  const [input, setInput] = useState({
    file: "",
    titulo: "",
    area: "",
    sede: "",
    n1: "",
    n2: "",
    n3: "",
    description: "",
    FechaDeVencimiento: ""
  })

  function handlerChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function area(e) {
    setInput({
      ...input,
      area: e.target.value,
    });
  }

  function sede(e) {
    setInput({
      ...input,
      sede: e.target.value,
    });
  }

  function n1(e) {
    setInput({
      ...input,
      n1: e.target.value,
    });

  }

  function n2(e) {
    setInput({
      ...input,
      n2: e.target.value,
    });
  }
  function n3(e) {
    setInput({
      ...input,
      n3: e.target.value,
    });
  }

  function handlerSubmit(e) {
    e.preventDefault();
    setInput()
  }

  let postfinal = {
    file: input.file,
    titulo: input.titulo,
    area: input.area,
    sede: input.sede,
    n1: input.n1,
    n2: input.n2,
    description: input.description,
    FechaDeVencimiento: input.FechaDeVencimiento
  }

  return (
    <div>
      <div className="App">
        <form onSubmit={(e) => handlerSubmit(e)} >
          <label for="file">
            <span>
              <input value={input.file} type="file" id="file" name='file' onChange={handlerChange} required />
            </span>
          </label>
          <label for="Titulo">
            <span>Titulo</span>
            <input value={input.titulo} type="text" id="Titulo" placeholder="Titulo amigable" required name='titulo' onChange={(e) => handlerChange(e)} />
          </label>
          <label for="Area">
            <span>Area</span>
            <select id='Area' onChange={area} >
              <option hidden selected >Area</option>
              {selectArea.map((sede, i) => {
                return (
                  <option value={sede} key={i}>
                    {sede}
                  </option>
                );
              }
              )}
            </select>
          </label>
          <label for="sede">
            <span>Sede</span>
            <select id='sede' onChange={sede}>
              <option hidden selected >Sede</option>
              {selectSede.map((area, i) => {
                return (
                  <option value={area} key={i}>
                    {area}
                  </option>
                );
              }
              )}
            </select>
          </label>
          <label for="N1">
            <span>N1</span>
            <select id='N1' onChange={n1}>
              <option hidden selected >N1</option>
              {nivel.map((area, i) => {
                return (
                  <option value={area} key={i}>
                    {area}
                  </option>
                );
              }
              )}
            </select>
          </label>
          <Label2 input={input} n1={n1} n2={n2} n3={n3} />

          <label>
            <span>Fecha de vencimiento</span>
            <input
              type='Date'
              value={input.FechaDeVencimiento}
              name='FechaDeVencimiento'
              onChange={e => handlerChange(e)}
            />
          </label>
          <label>
            <textarea
              type='text'
              value={input.description}
              name='description'
              required
              placeholder='observaciones'
              onChange={e => handlerChange(e)}
              rows='5'
              cols='50'
            ></textarea>
          </label>
          <button type='submit'>Enviar</button>
        </form>

      </div>
      <Data input={postfinal} />
    </div>

  );
}

export default App;
