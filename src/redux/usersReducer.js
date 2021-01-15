import {
    usersAPI
} from "../api/api";

const FOLLOW = 'user/FOLLOW'
const UNFOLLOW = 'user/UNFOLLOW'
const SET_USERS = 'user/SET_USERS'
const SET_TOTAL_USERS = 'user/SET_TOTAL_USERS'
const SET_PAGE = 'user/SET_PAGE'
const TOGGLE_PRELOADER = 'user/TOGGLE_PRELOADER'
const TOGGLE_BTN_DISABLED = 'user/TOGGLE_BTN_DISABLED'

const initState = {
    users: [],
    showUsers: 10,
    totalUsers: null,
    page: 1,
    isDisabledArr: [],
    isPreloader: false
};
const usersReducer = (state = initState, action) => {
    const followUnfollowLogic = (action, bool) => {
        return [...state.users.map(user => {
            if(user.id === action.userId){
                return {...user, followed: bool}
            }
            return user
        })
        ]
    }
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: followUnfollowLogic(action, true)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: followUnfollowLogic(action, false)
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_PAGE:
            return {
                ...state, page: action.current
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
export const getUsers = (page, showUsers) => async (dispatch) => {
    dispatch(toggle_preloader(true))
    const data = await usersAPI.getUsers(page, showUsers)
    dispatch(toggle_preloader(false))
    dispatch(set_users(data.items))
    dispatch(set_total_users(data.totalCount))
}


export const follow = (id) => async (dispatch) => {
    dispatch(toggle_btn_disabled(true, id))
    const data = await usersAPI.follow(id)
    if(data.resultCode === 0) dispatch(followSuccess(id))
    dispatch(toggle_btn_disabled(false, id))
}


export const unfollow = (id) => async (dispatch) => {
    dispatch(toggle_btn_disabled(true, id))
    const data = await usersAPI.unfollow(id)
    if(data.resultCode === 0) dispatch(unfollowSuccess(id))
    dispatch(toggle_btn_disabled(false, id))
}

export default usersReducer