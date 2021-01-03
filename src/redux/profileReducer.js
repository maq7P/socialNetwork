import {
    usersAPI,
    profileAPI
} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_PROFILE_USER = 'SET_PROFILE_USER'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

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
    profileInfo: null,
    status: '',
    flagLoading: false
}

const profileReducer = (state = initState, action) => {
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
    const setProfileStatus = (status) => {
        return {
            ...state, status
        }
    }

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [{
                    id: 1,
                    title: action.post_title,
                    text: action.post_text,
                    like: 0,
                    comments: 0,
                    hashtags: ['#firstPost'],
                    postImg: action.post_img,
                    whoName: action.post_whoName,
                    whoImg: action.post_whoImg,
                    time: action.post_time,
                }, ...state.postData],
            }
        case SET_PROFILE_USER:
            return setProfileInfo(action.profileInfo)
        case TOGGLE_PRELOADER:
            return togglePreloader(action.flagLoading)
        case SET_PROFILE_STATUS:
            return setProfileStatus(action.status)
        default: 
            return state;
    }
}

//action creators
export const add_post = (   post_title, 
                            post_img, 
                            post_whoName, 
                            post_whoImg, 
                            post_time, 
                            post_text) =>  (
                                
                            {
                                type: ADD_POST,
                                post_title,
                                post_img,
                                post_whoName,
                                post_whoImg,
                                post_time,
                                post_text
                            }
                        )

export const set_profile_user = (profileInfo) => ({type: SET_PROFILE_USER, profileInfo})
export const toggle_preloader = (flagLoading) => ({type: TOGGLE_PRELOADER, flagLoading})
export const set_profile_status = (status) => ({type: SET_PROFILE_STATUS, status})

//thunks
export const got_profile_user = (hrefID) => (dispatch) => {
    usersAPI.authMe().then((response) => {
        let {id} = response.data
        let userId = hrefID ? hrefID : id

        // if(id !== userId) dispatch(toggle_preloader(true))
        dispatch(toggle_preloader(true))
        profileAPI.getProfile(userId)
            .then((data) => {
                dispatch(toggle_preloader(false))
                dispatch(set_profile_user(data))
            })
        profileAPI.getProfileStatus(userId)
            .then((status) => {
                dispatch(set_profile_status(status))
            })
    })
}
export const got_profile_status = (hrefID) => (dispatch) => {
    usersAPI.authMe().then((response) => {
        let {id} = response.data
        let userId = hrefID ? hrefID : id

        profileAPI.getProfileStatus(userId)
            .then((status) => {
                dispatch(set_profile_status(status))
            })
        })
}

export const put_profile_status = (status) => (dispatch) => {
        profileAPI.putProfileStatus(status)
            .then((data) => {
                if(data.resultCode === 0) dispatch(set_profile_status(status))
            })
}

export default profileReducer