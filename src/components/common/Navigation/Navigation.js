import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.css';
import idRandom from '../../../utilities/IdRandom'


const Navigation = (props) => (
    <nav className={style.navigation}>
      <ul>
        {props.navigation.map(link => {
          return (
              <li key={idRandom()}>
                <NavLink 
                  className={style.link} 
                  to={link.to} 
                  //onClick={(e) => props.updateProfile(e)}
                  >{link.name}</NavLink>
              </li>
          )
        })}
      </ul>
    </nav>
);
export default Navigation;