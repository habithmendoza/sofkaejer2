import React, { useState } from 'react';
import './App.css';

function App() {

  const [bultos, setBultos] = useState([]);
  const [info, setInfo] = useState({
    bultoMasPesado: 0,
    bultoMasLiviano: 0,
    promedioBultos: 0
  })

  const [totalPesoBultos, setTotalPesoBultos] = useState(0);

  let pesoRef = React.createRef();


  const agregar = e => {

    let peso = pesoRef.current.value;
    let totalPesos = 0;
    let totalDolares = 0;
    let valorKilo = 0;

    if (peso === '') {
      alert('Ingrese el peso del equipaje');
    } else {
      if (peso > 500) {
        alert('El peso del equipaje no puede exceder los 500 Kg');

      } else if (peso === 0 || peso <= 25) {

        valorKilo = 0;
        totalPesos = peso * valorKilo;
        totalDolares = totalPesos * 3323;

        let nuevoBulto = { peso, valorKilo, totalPesos, totalDolares }
        setBultos([...bultos, nuevoBulto]);
        console.log(bultos);

      } else if (peso === 26 || peso <= 300) {

        valorKilo = 1500;
        totalPesos = peso * valorKilo;
        totalDolares = totalPesos * 3323;

        let nuevoBulto = { peso, valorKilo, totalPesos, totalDolares }
        setBultos([...bultos, nuevoBulto]);
        console.log(bultos);

      } else if (peso === 301 || peso <= 500) {

        valorKilo = 2500;
        totalPesos = peso * valorKilo;
        totalDolares = totalPesos * 3323;

        let nuevoBulto = { peso, valorKilo, totalPesos, totalDolares }
        setBultos([...bultos, nuevoBulto]);
        console.log(bultos);
      }

      setTotalPesoBultos(totalPesoBultos + parseInt(peso))

      setInfo({
        totalbultos: (bultos.length) + 1,
        promedioBultos: totalPesoBultos / info.totalbultos
      });
      console.log(totalPesoBultos);
    }
  }

  return (
    <div className="App-wrapper">
      <h1>Ingrese el peso del equipaje</h1>
      <div className='App'>
        <input ref={pesoRef} type="text" placeholder='Peso' />
        <input onClick={agregar} type="button" value="Agregar" />
        <div className='tabla'>
          <div className='infoTotal'>
            <h2>Total de equipajes: {info.totalbultos}</h2>
            <h2>Peso promedio: {info.promedioBultos}</h2>
          </div>
          <div className='titles'>
            <h4>Id</h4>
            <h4>Peso</h4>
            <h4>Valor Kilo</h4>
            <h4>Total Pesos</h4>
            <h4>Total Dolares</h4>
          </div>
          {bultos.map((bulto, k) => (
            <div className='card' key={k}>
              <h4>{k}</h4>
              <h4>{bulto.peso}</h4>
              <h4>{bulto.valorKilo}</h4>
              <h4>{bulto.totalPesos}</h4>
              <h4>{bulto.totalDolares}</h4>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
