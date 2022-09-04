import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './components/navbar';
import Product from './components/product';
import Allpro from './components/alluser';
import Addpro from './components/adduser';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/all" element={<Allpro/>} />
        <Route path="/add" element={<Addpro/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
