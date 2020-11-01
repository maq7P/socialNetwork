const ADD_MESSAGE = 'ADD-MESSAGE'
const REFRASH_NEW_MESSAGE = 'REFRASH-NEW-MESSAGE'
let initState = {
    dialogsData: [{
            id: 1,
            name: "Kolia Pupkin",
            lastText: "...bot",
            img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg'
        },
        {
            id: 2,
            name: "Anton Putin",
            lastText: "...bot",
            img: 'https://seek-team-prod.s3.fr-par.scw.cloud/users/5f5f165654577674874172.jpg'
        },
    ],
    dataMessages: [{
            id: 1,
            text: 'Hey',
            time: '10:20',
            img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg',
            me: false
        },
        {
            id: 2,
            text: 'Hey, dude!',
            time: '10:25',
            img: 'https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg',
            me: true
        },
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initState, action) => {

    const addMessage = () => {
        const newObj = {
            id: 1,
            text: state.newMessageText,
            time: 'now',
            img: 'https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg',
            me: true,

        }
        let stateUpdated = {...state}
        stateUpdated.dataMessages = [...state.dataMessages]
        stateUpdated.dataMessages.push(newObj);
        stateUpdated.newMessageText = ''
        return stateUpdated
    }
    const refrashNewMessageText = (newText) => {
        let stateUpdated = {...state}
        stateUpdated.newMessageText = newText;
        return stateUpdated
    }
    switch (action.type){
        case ADD_MESSAGE:
            return addMessage()
        case REFRASH_NEW_MESSAGE:
            return refrashNewMessageText(action.message_text)
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