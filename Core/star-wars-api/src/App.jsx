import './App.css';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import Planets from './components/Planets';
import People from './components/People';


function App() {
  const [grab, setGrab] = useState("people");
  const [id, setId] = useState(1);
  const navigate = useNavigate();
  const onSubmitHandler = e => {
    e.preventDefault();
    if (grab === "people") {
      navigate(`/people/${id}`)
    }
    if (grab === "planet") {
      navigate(`/planets/${id}`)
    }

  }

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <h1 style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
          <label htmlFor="searchFor">Search For:</label>
          <select name="searchFor" onChange={ e => setGrab(e.target.value) }>
            <option value="people">people</option>
            <option value="planet">Planets</option>
          </select>
          <label htmlFor="id">ID:</label>
          <input type="number" onChange={e => setId(e.target.value)} />
          <input type="submit" value="Search" />
        </h1>
      </form>

      <Routes>
        <Route path='/people/:id' element={ <People/> } />
        <Route path='/planets/:id' element={ <Planets/> } />
      </Routes>
    </div>
  );
}

export default App;
