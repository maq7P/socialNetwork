import { stopSubmit } from "redux-form";
import {profileAPI, usersAPI} from "../api/api";
// TASKS FOR THIS COMPONENT
// If it is wrong password need to clear input contains password.
const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_AVATAR = 'SET_USER_AVATAR'
const CAPTCH = 'CAPTCH'
const STOP_SUBMIT = 'STOP_SUBMIT'

const initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
    flagLoading: false, 
    captcha: null,
    err: null
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
               isAuth: action.data.login ? true : false,
               captcha: null
            }
        case SET_USER_AVATAR:
            return {
                ...state,
                photo: action.photo
            }
        case CAPTCH:
            return {
                ...state,
                captcha: action.url
            }
        case STOP_SUBMIT: {
            console.log('Попали');
            return {
                ...state,
                err: action.err
            }
        }
        default:
            return state
    }
}
//action creators
export const set_user_data = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const set_user_avatar = (photo) => ({type: SET_USER_AVATAR, photo})

export const stop_submit = (err) => ({type: STOP_SUBMIT, err})
const set_captcha = (url) => ({type: CAPTCH, url})

//thunks
export const got_user_data = (isAuth) => (dispatch) => {
        return usersAPI.authMe().then((response) => {
            let {id, email, login} = response.data
            dispatch(set_user_data(id, email, login))
            if(isAuth){
                profileAPI.getProfile(id)
                    .then((data) => {
                        dispatch(set_user_avatar(data.photos.large))
                })
            }
        })
}

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    usersAPI.login(email, password, rememberMe, captcha).then((response) => {
        if (response.resultCode === 0) {
            dispatch(stop_submit(null))
            dispatch(got_user_data(true))
        }
        if (response.resultCode === 10){
            dispatch(stop_submit('Error login or password'))
            usersAPI.captcha().then((response) => {
                dispatch(set_captcha(response.url))
                dispatch(stop_submit(null))
            })
        }
        if (response.resultCode === 1){
            let message = response.messages
            dispatch(stop_submit(message))
        }
    })
}

export const logout = () => (dispatch) => {
    usersAPI.logout().then((response) => {
        if (response.resultCode === 0) {
            dispatch(set_user_data(null, null, null))
        }
    })
}

export default authReducer