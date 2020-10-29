import React from 'react';
import style from './dialogs.module.css';
import Person from './Person/Person';
import Message from './Message/Message';
import ChangeHeader from '../ChangeHeader/ChangeHeader';
import {actionCreatorAddMessage, actionCreatorRefrashNewMessage} from '../../redux/dialogsReducer'; //utilities

const Dialogs = ({
        dialogsData,
        dataMessages,
        dataLinks,
        dispatch,
        newMessageText
    }) => {
    let newMessageElement = React.createRef();

    const refrashMessages = () => {
        dispatch(actionCreatorAddMessage())
        newMessageElement.current.value = '';
    }

    const onMessageChange = () => {
        const text = newMessageElement.current.value;
        dispatch(actionCreatorRefrashNewMessage(text))
    }

    return(
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
                <div className={style.newMessage}>
                    <textarea 
                        className={style.textarea}
                        placeholder={'write messages'}
                        onChange={onMessageChange}
                        ref={newMessageElement}
                        value={newMessageText}/>
                    <button className={style.button} onClick={refrashMessages}>Отправить</button>
                </div>
            </div>
        </div>  
    </>
)}
export default Dialogs;