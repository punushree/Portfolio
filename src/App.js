import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Navbar from './Common/Navbar/Navbar';
import Home from './Componanents/Home';
import About from './Componanents/About';
import Contact from './Componanents/Contact';
import Footer from './Common/Navbar/Footer';
import "./App.css"


function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      <Footer></Footer>
    </Router>
  </div>
  );
}

export default App;
