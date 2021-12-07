import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import {UserContext} from './context';

function App(){
  const [user, setUser] = useState({
    id:1,
    name:'Elon Musk'
  });
  return(
    <UserContext.Provider value={user}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

