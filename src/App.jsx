

import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Join from './components/Joinus/JoinUs';
//Services


const App = () => {
  





const navigate = useNavigate();



  return (
    <>
       <NavBar  /> 
      

<Routes>
  
    
    <>
      <Route path="/" element={<Dashboard />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Joinus" element={<Join/>} />

    </>
  
</Routes>
    </>
  )
};

export default App;