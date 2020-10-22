import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './person.module.css';

const Person = ({name, lastText, img, id}) => (
    <NavLink to={`/messages/chats/${id}`} className={style.link}>
        <div className={style.person}>
            <div className={style.personAvatar}>
                <img src={img}/>
            </div>
            <div>
                <div className={style.personName}>{name}</div>
                <div className={style.personLastContact}>{lastText}</div>
            </div>
        </div>
    </NavLink>
);
export default Person;