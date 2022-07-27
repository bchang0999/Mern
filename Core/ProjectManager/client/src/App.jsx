import logo from './logo.svg';
import ProductForm from './components/ProductForm';
import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductOne from './components/ProductOne';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<ProductOne/>} path="/products/viewone/:id"  />
      </Routes>
    </div>
  );
}

export default App;
