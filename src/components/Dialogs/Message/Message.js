
import React from 'react';
import style from './message.module.css';


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

export default Message