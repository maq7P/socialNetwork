import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './dialogs.module.css';

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

const Message = ({text, time, img, me}) => (
    <div className={`${style.message} ${me ? style.fromMe : ''}`}>
        <div className={style.personAvatar}>
            <img src={img}/>
            <div className={style.time}>{time}</div>
        </div>
        <div className={`${style.text} `}>
            {text}
        </div>
    </div>
)

const Dialogs = () => (
    <>
        <header>
            <nav>
                <ul>
                    <li className={style.item}>
                        <NavLink to="/messages/chats" activeClassName={style.active}>Chats</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/messages/Status" activeClassName={style.active}>Status</NavLink>
                    </li>
                </ul>
            </nav>
            <input placeholder="Поиск"></input>
        </header>
        <div className={style.chats}>
            <div className={style.persons}>
                < Person 
                    id={1}
                    name="Kolia Pupkin" 
                    lastText="...bot" 
                    img='https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg'
                />
                < Person 
                    id={2}
                    name="Andrey Lobov" 
                    lastText="...bot" 
                    img='https://seek-team-prod.s3.fr-par.scw.cloud/users/5f5f165654577674874172.jpg'
                />
            </div>
            <div className={style.windowDialog}>
                <Message 
                    text='Hey' 
                    time='10:30' 
                    img='https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg'
                />
                <Message 
                    text='Hey, dude!' 
                    time='10:32' 
                    img='https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg'
                    me
                />
            </div>
        </div>  
    </>
)
export default Dialogs;