const ADD_MESSAGE = 'ADD-MESSAGE'

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
}

const dialogsReducer = (state = initState, action) => {

    const addMessage = (text) => {
        return {    //Create new state
            ...state,
            dataMessages: [...state.dataMessages, {
                id: 1,
                text: text,
                time: 'now',
                img: 'https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg',
                me: true,

            }],
        }
    }
    switch (action.type) {
        case ADD_MESSAGE:
            return addMessage(action.text)
        default:
            return state
    }
}
export const add_message = (text) => ({
    type: ADD_MESSAGE, text
})
export default dialogsReducer