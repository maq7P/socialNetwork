import React, {useRef} from 'react';
import style from './dialogs.module.css';
import Person from '../common/Person/Person';
import Message from './Message/Message';
import ChangeHeader from '../common/ChangeHeader/ChangeHeader';
import {Route} from "react-router-dom";
import {Field, reduxForm} from 'redux-form'
import {maxLength, required} from "../../utilities/validators";
import {TextArea} from "../common/FormsControl/FormsControl";

const Dialogs = ({dialogsData,
            dataMessages,
            dataLinks,
            add_message,
                     isAuth
}) => {
    const addNewMessage = (data) => {
        console.log(data)
        add_message(data.NewMessageBody)
    }
    return(
    <>
        <ChangeHeader dataLinks={dataLinks} right={'FORM'}/>
        <Route path={dataLinks[0]}></Route>
        <div className={style.chats}>
            <div className={style.persons}>
                {dialogsData.map(item => {
                    return(
                        <Person
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            body={item.lastText}
                            img={item.img}/>
                    )
                })}
            </div>
            <div className={style.windowDialog}>
                {dataMessages.map(item => {
                    return(
                        <Message
                            key={item.id}
                            text={item.text}
                            time={item.time}
                            img={item.img}
                            me={item.me}/>
                    )
                })}
                <FormReduxMessage onSubmit={addNewMessage}
                    // refrashMessages={refrashMessages}
                    // onMessageChange={onMessageChange}
                    // newMessageElement={newMessageElement}
                />
            </div>
        </div>  
    </>
)}
const maxLength100 = maxLength(100)
const FormMessage = (props) => {
    return (
        <form className={style.newMessage} onSubmit={props.handleSubmit}>
            <div>
                <Field
                validate={[required, maxLength100]}
                component={TextArea}
                type={'textarea'}
                name={'NewMessageBody'}

                className={style.textarea}
                placeholder={'write messages'}/>
            </div>
            <button className={style.button}>Отправить</button>
        </form>
    )
}

const FormReduxMessage = reduxForm({
    form: 'addMessageForm'
})(FormMessage)

export default Dialogs;