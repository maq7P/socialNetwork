import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.css';

const Navigation = () => (
    <nav className={style.navigation}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/messages" activeClassName={style.active}>Messages</NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={style.active}>News</NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
        </li>
        <li>
          <NavLink to="/friends" activeClassName={style.active}>Friends</NavLink>
        </li>
      </ul>
    </nav>
)
export default Navigation;