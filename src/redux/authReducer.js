import { stopSubmit } from "redux-form";
import {profileAPI, usersAPI} from "../api/api";
// TASKS FOR THIS COMPONENT
// If it is wrong password need to clear input contains password.
const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_USER_AVATAR = 'auth/SET_USER_AVATAR'
const CAPTCH = 'auth/CAPTCH'
const STOP_SUBMIT = 'auth/STOP_SUBMIT'

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
export const got_user_data = (isAuth) => async (dispatch) => {
    const response = await usersAPI.authMe()
    let {id, email, login} = response.data
    dispatch(set_user_data(id, email, login))
    if(isAuth){
        const dataProfile = await profileAPI.getProfile(id)
        dispatch(set_user_avatar(dataProfile.photos.large))
    }
    return response
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await usersAPI.login(email, password, rememberMe, captcha)
    const message = response.messages

    switch (response.resultCode){
        case 0: {
            dispatch(stop_submit(null))
            dispatch(got_user_data(true))
            break;
        }
        case 10: {
            dispatch(stop_submit('Error login or password'))

            const responseCaptcha = await usersAPI.captcha()
            dispatch(set_captcha(responseCaptcha.url))
            dispatch(stop_submit(null))
            break;
        }
        case 1: {
            dispatch(stop_submit(message))
            break;
        }
    }
}

export const logout = () => (dispatch) => {
    usersAPI.logout().then((response) => {
        if (response.resultCode === 0) {
            dispatch(set_user_data(null, null, null))
        }
    })
}

export default authReducer