import {actionCreatorAddMessage, actionCreatorRefrashNewMessage} from '../../redux/dialogsReducer';
import React from "react";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext"; //utilities

const DialogsContainer = () => (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState();
                const dialogsData = state.messagesPage.dialogsData;
                const dataMessages = state.messagesPage.dataMessages;
                const dataLinks= state.settingsOfLinks.masseges;
                const newMessageText = state.messagesPage.newMessageText
                const dispatch = store.dispatch;

                const refrashMessages = () => {
                    dispatch(actionCreatorAddMessage())
                }

                const onMessageChange = (text) => {
                    dispatch(actionCreatorRefrashNewMessage(text))
                }
                return (
                    <Dialogs
                        dialogsData={dialogsData}
                        dataMessages={dataMessages}
                        dataLinks={dataLinks}
                        newMessageText={newMessageText}
                        addMessage={refrashMessages}
                        actionRefreshNewMessage={onMessageChange}/>
                )
            }}
        </StoreContext.Consumer>
)
export default DialogsContainer;