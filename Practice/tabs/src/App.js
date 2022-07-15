import Tabs from './components/Tabs'
import './App.css';
import { useState } from 'react';

function App() {
  const [Text, setText] = useState([]);
  const textBox = (newText) => { setText([newText]) }


  return (
    <div>
      <div className="App">
        <Tabs array={"Tab 1 content showing here"} textBox={textBox} name={"Tab 1"} />
        <Tabs array={"Tab 2 content showing here"} textBox={textBox} name={"Tab 2"} />
        <Tabs array={"Tab 3 content showing here"} textBox={textBox} name={"Tab 3"} />
      </div>
      <div className='TextBox'>
        {Text}
        </div>
    </div>
  );
}

export default App;
