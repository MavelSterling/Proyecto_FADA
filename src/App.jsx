import { useRef, useState } from 'react';
import { readFile } from './helpers/readFile';
import { createGroups } from './helpers/createGroups';
import './App.css';


const App = () => {

  const [myValue, setMyValue] = useState('');
  const [myTitle, setMyTitle] = useState('');
  const inputFile = useRef();

  return (
    <div className="App">
      <header className="App-header">

        <h1>Proyecto de FADA</h1>
        <h2>Creación de grupos</h2>
        <h3 style={
          { wordBreak: 'break-all' , hyphens: 'auto'}
        }>{myTitle}</h3>
        <h4>PDTA:</h4>
        <h5>
          (Ten cuidado de que tu archivo de texto, no tengo espacios de mas al final del mismo <br />
          Anexamos un ejemplo en el archivo .zip)
        </h5>


        <input
          ref={inputFile}
          type="file"
          multiple={false}
          onChange={(e) => readFile(e, setMyValue, setMyTitle)}
        />

        <br /><br />

        <button
          disabled={inputFile?.current?.files?.length === (0 || undefined) ? true : false}
          onClick={() => createGroups(myValue)}
        >
          Calcular grupos
        </button>

      </header>
    </div>
  );
}

export default App;







