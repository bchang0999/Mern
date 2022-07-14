import './App.css';
import Form from './components/Form'
import { useState } from 'react';
import Boxes from './components/Boxes';

function App() {
  const [boxes, setBoxes] = useState([]);
  const createBox = ( newBox ) => { setBoxes([...boxes, newBox]) }
  return (
    <div className="App">
      <Form create = {createBox}/>
      <Boxes boxes={boxes}/>
    </div>
  );
}

export default App;
