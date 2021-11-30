import React, { Component } from 'react';
import cx from 'classnames';
//import { WbSunny,  DarkMode} from '@mui/icons-material';
import { WbSunny, NightsStayRounded } from '@material-ui/icons';
import {UserContext, ThemeContext} from '../../context';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
import { WithTheme } from '../HOCs';
const {THEMES} = CONSTANTS;

class Header extends Component {
  render() {
    const {theme, setTheme}  = this.props;
    const isLightTheme = theme===THEMES.LIGHT;
    const classNames = cx(styles.container,{
      [styles.light] : isLightTheme,
      [styles.dark] : theme===THEMES.DARK,
    });
    return (<UserContext.Consumer>
    {
      (user) => (<header className={classNames}>
        <p>{user.fname} {user.sname} </p>
        <div onClick={()=>{
          const nextTheme = isLightTheme ? THEMES.DARK : THEMES.LIGHT;
          setTheme(nextTheme);
        }}>
          {isLightTheme ? <WbSunny/>:<NightsStayRounded/>}
        </div>
      </header>)
    }
    </UserContext.Consumer>)}
  }

const HeaderWithTheme = WithTheme(Header);

export default HeaderWithTheme;
