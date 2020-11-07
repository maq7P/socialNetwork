const ADD_POST = 'ADD-POST'
const REFRESH_NEW_POST = 'REFRESH-NEW-POST'
const SET_PROFILE_USER = 'SET_PROFILE_USER'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'
const SET_DEFAULT_ID = 'SET_DEFAULT_ID'

let initState = {
    postData: [
        {
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
    newPostText: '',
    profileInfo: null,
    defaultId: null,
    flagLoading: false
}

const profileReducer = (state = initState, action) => {

    const addPost = (title = null, postImg = null, whoName, whoImg, time) => {
        return {    //create new state
            ...state,
            postData: [{
                id: 1,
                title,
                text: state.newPostText,
                like: 0,
                comments: 0,
                hashtags: ['#firstPost'],
                postImg,
                whoName,
                whoImg,
                time,
            }, ...state.postData],
            newPostText: ''
        }
    }
    const refreshNewPostText = (newText) => {
        return {
            ...state,
            newPostText: newText
        }
    }
    const setProfileInfo = (profileInfo) => {
        return {
            ...state, profileInfo
        }
    }
    const togglePreloader = (flagLoading) => {
        return {
            ...state, flagLoading
        }
    }
    const setDefaultId = (id) => {
        return {
            ...state, defaultId: id
        }
    }

    switch (action.type) {
        case ADD_POST:
            return addPost(action.post_title = null, action.post_img = null, action.post_whoName, action.post_whoImg, action.post_time)
        case REFRESH_NEW_POST:
            return refreshNewPostText(action.post_text)
        case SET_PROFILE_USER:
            return setProfileInfo(action.profileInfo)
        case TOGGLE_PRELOADER:
            return togglePreloader(action.flagLoading)
        case SET_DEFAULT_ID:
            return setDefaultId(action.id)
        default: 
            return state;
    }
}
export const actionCreatorAddPost = (post_title, post_img, post_whoName, post_whoImg, post_time) => ({
    type: ADD_POST,
    post_title,
    post_img,
    post_whoName,
    post_whoImg,
    post_time
})
export const actionCreatorRefrashNewPost = (post_text) => ({
    type: REFRESH_NEW_POST,
    post_text
})
export const set_profile_user = (profileInfo) => ({type: SET_PROFILE_USER, profileInfo})
export const toggle_preloader = (flagLoading) => ({type: TOGGLE_PRELOADER, flagLoading})
export const set_default_id = (id) => ({type: SET_DEFAULT_ID, id})
export default profileReducer