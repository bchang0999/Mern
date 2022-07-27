import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import ProductOne from './views/ProductOne'
import Update from './views/Update'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<ProductOne/>} path="/products/viewone/:id"  />
        <Route element={<Update />} path="/products/:id/update" />
      </Routes>
    </div>
  );
}

export default App;
