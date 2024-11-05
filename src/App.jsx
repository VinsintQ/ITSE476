

import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import Dashboard from './components/Dashboard/Dashboard';

//Services


const App = () => {
  





const navigate = useNavigate();



  return (
    <>
       <NavBar  /> 
      

<Routes>
  
    
    <>
      <Route path="/" element={<Dashboard />} />
      
      

    </>
  
</Routes>
    </>
  )
};

export default App;