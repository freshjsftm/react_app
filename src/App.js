import './App.css';
import React, {useState, useReducer, useRef, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomePage from './pages/HomePage';
import {UserContext, ThemeContext, AppContext} from './context';
import CONSTANTS from './constants';
import SignUpForm from './components/forms/SignUpForm';
import Chat from './components/Chat';
import NavMenu from './components/NavMenu';
import reducer from './appReducer';
const {THEMES, ACTIONS} = CONSTANTS;

function App(){
  const [user, setUser] = useState({
    id:1,
    name:'Elon Musk'
  });
  const themeArrState = useState(THEMES.LIGHT);
  const [state, dispatch] = useReducer(reducer, {isMenuOpen:false});
  const openMenu = () => dispatch({type: ACTIONS.MENU_OPEN});
  const closeMenu = () => dispatch({type: ACTIONS.MENU_CLOSE});


  const navRef = React.createRef();
  useEffect(()=>{
    const handlerClick = ({target})=>{
      console.log(navRef)
      if(state.isMenuOpen && !navRef.current.contains(target)){
        closeMenu();
      }
    }
    window.addEventListener('click', handlerClick)
    return ()=> window.removeEventListener('click', handlerClick);
  }, [state.isMenuOpen]);

  return(
    <AppContext.Provider value={{state, closeMenu}}>
    <ThemeContext.Provider value={themeArrState}>
    <UserContext.Provider value={user}>
    <BrowserRouter>
      <MenuOpenIcon onClick={openMenu}/>
      <NavMenu navRef={navRef}/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;

