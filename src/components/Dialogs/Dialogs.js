import React from 'react';
import style from './dialogs.module.css';
import Person from './Person/Person';
import Message from './Message/Message';
import ChangeHeader from '../ChangeHeader/ChangeHeader';

const Dialogs = ({dialogsData, dataMessages, dataLinks}) => (
    <>
        <ChangeHeader dataLinks={dataLinks}/>
        <div className={style.chats}>
            <div className={style.persons}>
                {dialogsData.map(item => {
                    return(
                        <Person 
                            id={item.id}
                            name={item.name}
                            lastText={item.lastText}
                            img={item.img}/>
                    )
                })}
            </div>
            <div className={style.windowDialog}>
                {dataMessages.map(item => {
                    return(
                        <Message
                            text={item.text}
                            time={item.time}
                            img={item.img}
                            me={item.me}/>
                    )
                })}
            </div>
        </div>  
    </>
)
export default Dialogs;