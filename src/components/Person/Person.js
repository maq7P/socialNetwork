import React from 'react';
import style from './person.module.css';

const Person = ({direction, name, time, img}) => (
    <div className={style.person}>
        <div className={`${style.personAvatar} ${direction ? style.direction : ''}`}>
            <img src={img}/>
        </div>
        <div className={`${direction ? style.blockDirection : ''}`}>
            <div className={style.personName}>{name}</div>
            <div className={style.personLastContact}>{time}</div>
        </div>
    </div>
)
export default Person;