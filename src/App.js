import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import {UserContext, ThemeContext} from './context';
import CONSTANTS from './constants';
import {useClicker} from './hooks';
import SignUpForm from './components/forms/SignUpForm';
import Chat from './components/Chat';
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
      {/* <h1>count: {count}</h1>     */}
      <nav>
        <ol>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/signup'>Registration</Link></li>
          <li><Link to='/chat'>Chat</Link></li>
        </ol>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

