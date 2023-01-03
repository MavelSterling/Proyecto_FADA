import { useState } from 'react';
import { readFile } from './helpers/readFile';
import { createFile } from './helpers/createFile';
import './App.css';
import { createGroups } from './helpers/createGroups';


const App = () => {

  const [myValue, setMyValue] = useState('');


  return (
    <div className="App">
      <header className="App-header">

        <h1>Proyecto de FADA</h1>
        <h2>Creación de grupos {myValue}</h2>

        <input
          type="file"
          multiple={false}
          onChange={(e) => readFile(e, setMyValue)}
        />

        <br /><br />

        <button
          onClick={() => createGroups(myValue)}
        >
          Calcular grupos
        </button>

      </header>
    </div>
  );
}

export default App;







