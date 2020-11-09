import {actionCreatorAddMessage, actionCreatorRefrashNewMessage} from '../../redux/dialogsReducer';
import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux"; //utilities

let mapStateToProps = (state) => {
        return {
                dialogsData: state.messagesPage.dialogsData,
                dataMessages: state.messagesPage.dataMessages,
                dataLinks: state.settingsOfLinks.massages,
                newMessageText: state.messagesPage.newMessageText
        }
}
let mapDispatchToProps = (dispatch) => {
        return {
                addMessage: () => {
                        dispatch(actionCreatorAddMessage())
                },
                actionRefreshNewMessage: (body) => {
                        dispatch(actionCreatorRefrashNewMessage(body))
                }

        }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);


//const DialogsContainer = () => {
        // So it was before react-redux

        // return (<StoreContext.Consumer>
        //     {store => {
        //         const state = store.getState();
        //         const dialogsData = state.messagesPage.dialogsData;
        //         const dataMessages = state.messagesPage.dataMessages;
        //         const dataLinks= state.settingsOfLinks.masseges;
        //         const newMessageText = state.messagesPage.newMessageText
        //         const dispatch = store.dispatch;
        //
        //         const refrashMessages = () => {
        //             dispatch(actionCreatorAddMessage())
        //         }
        //
        //         const onMessageChange = (body) => {
        //             dispatch(actionCreatorRefrashNewMessage(body))
        //         }
        //         return (
        //             <Dialogs
        //                 dialogsData={dialogsData}
        //                 dataMessages={dataMessages}
        //                 dataLinks={dataLinks}
        //                 newMessageText={newMessageText}
        //                 addMessage={refrashMessages}
        //                 actionRefreshNewMessage={onMessageChange}/>
        //         )
        //     }}
        // </StoreContext.Consumer>)
//}