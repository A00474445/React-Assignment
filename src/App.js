import React from "react";
import NavBar from './components/Navbar'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import About from './components/screens/AboutMe'
import Town from './components/screens/MyTown'


function App() {
  return (
    <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path ="/" element={<About/>} />
            <Route path="/town" element={<Town/>} />
          </Routes>
    </BrowserRouter>

  );
}

export default App;
