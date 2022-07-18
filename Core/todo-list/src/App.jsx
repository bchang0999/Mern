import { useState } from 'react';
import './App.css';
import ListItem from './components/ListItem'
import Main from './components/Main'
import "../node_modules/bootstrap/dist/css/bootstrap.css"


function App() {
  const [List, setList] = useState([]);
  const createList = (newList) => {
    console.log(newList);
    setList([...List, newList])
  }
  const onDelete = (i) => {
    setList(List.filter(item => List.indexOf(item) !== i));
  }
  const onCheck = (i) => {
    List[i].isComplete = !List[i].isComplete;
    setList([...List]);
  }




  return (
    <div className="App">
      <Main createList={createList} />
      <ListItem List={List} onDelete={onDelete} handler={onCheck} />
    </div>
  );
}

export default App;
