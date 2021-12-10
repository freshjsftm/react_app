import React from 'react';
import cx from 'classnames';
import {NavLink} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import styles from './NavMenu.module.scss';

const NavMenu = () => {
  const classNames = cx(styles.container);
  return (
    <nav className={classNames}>
      <CloseIcon className={styles.closeBtn}/>
      <ul className={styles.list}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/signup'>Sign Up</NavLink>
        </li>
        <li>
          <NavLink to='/chat'>Chat</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
