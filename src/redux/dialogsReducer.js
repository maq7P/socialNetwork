const ADD_MESSAGE = 'ADD-MESSAGE'
const REFRASH_NEW_MESSAGE = 'REFRASH-NEW-MESSAGE'

const dialogsReducer = (state, action) => {

    const addMessage = () => {
        const newObj = {
            id: 1,
            text: state.newMessageText,
            time: 'now',
            img: 'https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg',
            me: true,

        }
        state.dataMessages.push(newObj);
        state.newMessageText = ''
    }
    const refrashNewMessageText = (newText) => {
        state.newMessageText = newText;
    }
    switch (action.type){
        case ADD_MESSAGE:
            addMessage()
            return state;
        case REFRASH_NEW_MESSAGE:
            refrashNewMessageText(action.message_text)
            return state;
        default:
            return state       
    }
}
export const actionCreatorAddMessage = () => ({
    type: ADD_MESSAGE
})
export const actionCreatorRefrashNewMessage = (message_text) => ({
    type: REFRASH_NEW_MESSAGE,
    message_text
})
export default dialogsReducer