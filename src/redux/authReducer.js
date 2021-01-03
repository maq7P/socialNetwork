import {profileAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_AVATAR = 'SET_USER_AVATAR'
const CAPTCH = 'CAPTCH'

const initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
    flagLoading: false, 
    captcha: null
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
        default:
            return state
    }
}
//action creators
export const set_user_data = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const set_user_avatar = (photo) => ({type: SET_USER_AVATAR, photo})
const set_captcha = (url) => ({type: CAPTCH, url})

//thunks
export const got_user_data = (isAuth) => (dispatch) => {
        usersAPI.authMe().then((response) => {
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
            dispatch(got_user_data(true))
        }
        if (response.resultCode === 10){
            usersAPI.captcha().then((response) => {
                dispatch(set_captcha(response.url))
                console.log(response, 'captcha');
            })
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