import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './items.module.css';


const Items = ({dataLinks}) => (
    <ul className={style.items}>
        {dataLinks.map(dataLink => (
            <li className={style.item}>
            <NavLink to={dataLink.to} activeClassName={style.active}>
                {dataLink.text}
                {dataLink.count ? <span className={style.countOfFriends}>{dataLink.count}</span> : <span></span>}
            </NavLink>
        </li>
        ))}
    </ul>
);
export default Items;