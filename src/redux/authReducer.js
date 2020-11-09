import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_AVATAR = 'SET_USER_AVATAR'

const initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
    flagLoading: false
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.data.login ? true : false,
            }
        case SET_USER_AVATAR:
            return {
                ...state,
                photo: action.photo
            }
        default:
            return state
    }
}
//action creators
export const set_user_data = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const set_user_avatar = (photo) => ({type: SET_USER_AVATAR, photo})

//thunks
export const got_user_data = (isAuth) => (dispatch) => {
        usersAPI.getLogin().then((response) => {
            let {id, email, login} = response.data
            dispatch(set_user_data(id, email, login))
            if(isAuth){
                usersAPI.getProfile(id)
                    .then((data) => {
                        dispatch(set_user_avatar(data.photos.large))
                })
            }
        })
}

export default authReducer