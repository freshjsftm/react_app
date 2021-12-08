import React, {useContext} from 'react';
import UserProfile from '../components/UserProfile';
import { ThemeContext } from '../context';
import CONSTANTS from '../constants';
const {THEMES} = CONSTANTS;
const styleMap = {
    [THEMES.LIGHT]:{
      background:'#eee', color:'#333', height:'100vh'
    },
    [THEMES.DARK]:{
      background:'#333', color:'#eee', height:'100vh'
    }
  }
const HomePage = () => {
  const [theme, themeState] = useContext(ThemeContext);
  const handlerTheme = ()=>{
    themeState(theme===THEMES.LIGHT?THEMES.DARK:THEMES.LIGHT);
  } 
  return (
    <div style={styleMap[theme]}>
      <button onClick={handlerTheme}>switch theme</button>
      <UserProfile />
    </div>
  );
}

export default HomePage;
