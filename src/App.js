import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import {UserContext, ThemeContext} from './context';
import CONSTANTS from './constants';
import {useClicker} from './hooks';
const {THEMES} = CONSTANTS;

function App(){
  const [user, setUser] = useState({
    id:1,
    name:'Elon Musk'
  });
  //theme
  const themeArrState = useState(THEMES.LIGHT);
  const count = useClicker(0);
  return(
    <ThemeContext.Provider value={themeArrState}>
    <UserContext.Provider value={user}>
    <BrowserRouter>
      <h1>count: {count}</h1>    
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

