import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const SET_PAGE = 'SET_PAGE'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'
const TOGGLE_BTN_DISABLED = 'TOGGLE_BTN_DISABLED'

const initState = {
    users: [],
    showUsers: 5,
    totalUsers: Number,
    page: 1,
    isDisabledArr: [],
    isPreloader: false
};
const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user
                })
                ]
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user
                })
                ]
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_PAGE:
            return {
                ...state, totalUsers: action.current
            }
        case SET_TOTAL_USERS:
            return {
                ...state, totalUsers: action.total
            }
        case TOGGLE_PRELOADER:
            return {
                ...state, isPreloader: action.flagLoading
            }
        case TOGGLE_BTN_DISABLED:
            return {
                ...state,
                isDisabledArr: action.isProgressing ? [...state.isDisabledArr, action.userId] :
                    state.isDisabledArr.filter(id => action.userId != id)
            }
        default:
            return state
    }
}
//actions creators
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const set_users = (users) => ({ type: SET_USERS, users })
export const set_page = (current) => ({ type: SET_PAGE, current })
export const set_total_users = (total) => ({ type: SET_TOTAL_USERS, total })
export const toggle_preloader = (flagLoading) => ({ type: TOGGLE_PRELOADER, flagLoading })
export const toggle_btn_disabled = (isProgressing, userId) => ({ type: TOGGLE_BTN_DISABLED, isProgressing, userId })

//thunks
export const getUsers = (page, showUsers) => (dispatch) => {
    dispatch(toggle_preloader(true))
    usersAPI.getUsers(page, showUsers)
        .then((data) => {
            dispatch(toggle_preloader(false))
            dispatch(set_users(data.items))
            dispatch(set_total_users(data.totalCount))
        })
}
export const follow = (id) => (dispatch) => {
    dispatch(toggle_btn_disabled(true, id))
    usersAPI.follow(id)
        .then(data => {
            if(data.resultCode === 0) dispatch(followSuccess(id))
            dispatch(toggle_btn_disabled(false, id))
        })
}
export const unfollow = (id) => (dispatch) => {
    dispatch(toggle_btn_disabled(true, id))
    usersAPI.unfollow(id)
        .then(data => {
            if(data.resultCode === 0) dispatch(unfollowSuccess(id))
            dispatch(toggle_btn_disabled(false, id))
        })
}

export default usersReducer