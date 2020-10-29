import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer"

// GLOBAL_VARIABLE for [action type]
// const ADD_POST = 'ADD-POST'
// const REFRASH_NEW_POST = 'REFRASH-NEW-POST'
// const ADD_MESSAGE = 'ADD-MESSAGE'
// const REFRASH_NEW_MESSAGE = 'REFRASH-NEW-MESSAGE'

let store = {
    _state: {
        profilePage: {
            postData: [{
                    id: 1,
                    title: 'Первый',
                    text: 'Это мой первый пост',
                    like: 10,
                    comments: 2,
                    hashtags: ['#firstPost'],
                    postImg: 'https://cdn1.img.sputniknewslv.com/images/1318/02/13180226.jpg',
                    whoName: 'Max',
                    whoImg: 'https://sun9-64.userapi.com/gN79EhxURENQ4f55w6rPGIFdl0Hr_Q4X0BXS_Q/lJZxeSC7TGc.jpg',
                    time: '10 минут назад'
                },
                {
                    id: 2,
                    title: 'Классное',
                    text: 'Классная погодка, как вам, ребят?',
                    like: 10,
                    comments: 2,
                    hashtags: ['#firstPost', '#trr'],
                    whoName: 'Yulia',
                    whoImg: 'https://sun9-20.userapi.com/_xRHT4Cb7wdm028L5F7Ua7eTc7sFG4Coqnz40Q/Y9wkbsqGFgU.jpg',
                    time: '15 минут назад'
                },
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },
        sidebar: {
            friends: [{
                id: 1,
                name: "Kolia Pupkin",
                img: 'https://static10.tgstat.ru/channels/_0/49/49b77c2e60267e7b1e511c1084ed596e.jpg',
                online: false
            }, ]
        },
        settingsOfLinks: {
            friends: [{
                    to: '/friends/all',
                    text: 'All friends',
                    count: 123
                },
                {
                    to: '/friends/online',
                    text: 'Online friends',
                    count: 12
                },
                {
                    to: '/friends/find',
                    text: 'Find friends',
                    count: null
                },
            ],
            masseges: [{
                    to: '/messages/chats',
                    text: 'Chats',
                    count: 2
                },
                {
                    to: '/messages/status',
                    text: 'Status',
                    count: 2
                },
            ],
            profile: [{
                    to: '/profile/overview',
                    text: 'OVERVIEW'
                },
                {
                    to: '/profile/posts',
                    text: 'POSTS',
                    count: 2
                },
                {
                    to: '/profile/friends',
                    text: 'FRIENDS',
                    count: 20
                },
                {
                    to: '/profile/following',
                    text: 'FOLLOWING',
                    count: 7
                },
                {
                    to: '/profile/music',
                    text: 'MUSIC',
                    count: 14
                },
            ],
        }


    },
    get getState() {
        return this._state
    },

    _callSubscriber: Function,
    subscribe(observer) {
        this._callSubscriber = observer; //Паттерн observer  синонеимчен патерну publisher-subscriber
    },


    // Function for work
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber()
    }
    // dispatch(action){
    //     switch (action.type) {
    //         case ADD_POST:
    //             this._addPost(action.post_title = null, action.post_img = null, action.post_whoName, action.post_whoImg, action.post_time)
    //             break;
    //         case ADD_MESSAGE:
    //             this._addMessage()
    //             break;
    //         case REFRASH_NEW_POST:
    //             this._refrashNewPostText(action.post_text)
    //             break;
    //         case REFRASH_NEW_MESSAGE:
    //             this._refrashNewMessageText(action.message_text)
    //             break;
    //         default:
    //             break;
    //     }
    // },
    // _addPost(title = null, postImg = null, whoName, whoImg, time){
    //     const newObj = {
    //         id: 1,
    //         title,
    //         text: this._state.profilePage.newPostText,
    //         like: 0,
    //         comments: 0,
    //         hashtags: ['#firstPost'],
    //         postImg,
    //         whoName,
    //         whoImg,
    //         time,
    //     }
    //     this._state.profilePage.postData.push(newObj);
    //     this._state.profilePage.newPostText = ''
    //     this._renderEntireTree()
    // },
    // _addMessage(){
    //     const newObj = {
    //         id: 1,
    //         text: this._state.messagesPage.newMessageText,
    //         time: 'now',
    //         img: 'https://sun9-49.userapi.com/dj9EjEZYf_dAiW3T8Dxg1HVG2CxySACD-nuPDg/UoBLmZKdaXc.jpg',
    //         me: true,

    //     }
    //     this._state.messagesPage.dataMessages.push(newObj);
    //     this._state.messagesPage.newMessageText = ''
    //     this._renderEntireTree()
    // },
    // _refrashNewPostText(newText){
    //     this._state.profilePage.newPostText = newText;
    //     this._renderEntireTree()
    // },
    // _refrashNewMessageText(newText){
    //     this._state.messagesPage.newMessageText = newText;
    //     this._renderEntireTree()
    // }
}

// export const actionCreatorAddPost = (post_title, post_img, post_whoName, post_whoImg, post_time) => ({
//     type: ADD_POST,
//     post_title,
//     post_img,
//     post_whoName,
//     post_whoImg,
//     post_time
// })
// export const actionCreatorAddMessage = () => ({type: ADD_MESSAGE})
// export const actionCreatorRefrashNewPost = (post_text) => ({
//     type: REFRASH_NEW_POST,
//     post_text
// })
// export const actionCreatorRefrashNewMessage = (message_text) => ({
//     type: REFRASH_NEW_MESSAGE,
//     message_text
// })


export default store;
window.store = store;