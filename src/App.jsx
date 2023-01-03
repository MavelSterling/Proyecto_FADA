import { useRef, useState } from 'react';
import { readFile } from './helpers/readFile';
import { createGroups } from './helpers/createGroups';
import './App.css';


const App = () => {

  const [myValue, setMyValue] = useState('');
  const inputFile = useRef();

  return (
    <div className="App">
      <header className="App-header">

        <h1>Proyecto de FADA</h1>
        <h2>Creación de grupos {myValue}</h2>

        <input
          ref={inputFile}
          type="file"
          multiple={false}
          onChange={(e) => readFile(e, setMyValue)}
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







