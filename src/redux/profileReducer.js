import {
    usersAPI,
    profileAPI
} from "../api/api";
import {login} from "./authReducer";

const ADD_POST = 'profile/ADD-POST'
const SET_PROFILE_USER = 'profile/SET_PROFILE_USER'
const TOGGLE_PRELOADER = 'profile/TOGGLE_PRELOADER'
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS'
const DEL_POST = 'profile/DEL_POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'
const SET_ERROR = 'profile/SET_ERROR'
const LOADING_FOR_PHOTO = 'profile/LOADING_FOR_PHOTO'

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
    flagLoading: false,
    errorMessage: null,
    loadingPhoto: false
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
        case DEL_POST:
            return {
                ...state,
                postData: state.postData.filter(item => item.id != action.id)
            }
        case SAVE_PHOTO_SUCCESS:{
            console.log(action.photos, 'reducer')
            return {
                ...state,
                profileInfo: {...state.profileInfo, photos: action.photos}
            }}
        case SET_ERROR: {
            return {
                ...state,
                errorMessage: action.error
            }
        }
        case LOADING_FOR_PHOTO: {
            return {
                ...state,
                loadingPhoto: action.flagLoading
            }
        }
        default:
            return state;
    }
}

//action creators
export const add_post = (post_title, post_img, post_whoName, post_whoImg, post_time, post_text) =>
    ({type: ADD_POST, post_title, post_img, post_whoName, post_whoImg, post_time, post_text})
export const set_profile_user = (profileInfo) => ({type: SET_PROFILE_USER, profileInfo})
export const toggle_preloader = (flagLoading) => ({type: TOGGLE_PRELOADER, flagLoading})
export const set_profile_status = (status) => ({type: SET_PROFILE_STATUS, status})
export const del_post = (id) => ({type: DEL_POST, id})
export const save_photo_success = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const set_error = (error) => ({type: SET_ERROR, error})
export const loading_for_photo = (flagLoading) => ({type: LOADING_FOR_PHOTO, flagLoading})

//thunks
export const got_profile_user = (hrefID) => (dispatch) => {
    usersAPI.authMe().then((response) => {
        let {id} = response.data
        let userId = hrefID ? hrefID : id

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
export const set_photo = (photo) => (dispatch) => {
    console.log('working')
    dispatch(set_error(null))
    dispatch(loading_for_photo(true))
        profileAPI.updatePhoto(photo)
            .then((response) => {
                console.log('response m', response.messages)
                if(response.messages.length != 0){
                    dispatch(loading_for_photo(false))
                    dispatch(set_error(response.messages[0]))
                } else {
                    console.log('Попали в ред')
                    dispatch(loading_for_photo(false))
                    dispatch(save_photo_success(response.data.photos))
                }
            })
}

export default profileReducer