const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const SET_PAGE = 'SET_PAGE'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'

const initState = {
    users: [],
    showUsers: 5,
    totalUsers: Number,
    page: 1,
    isPreloader: false
};
const usersReducer = (state = initState, action) => {
    const followed = (id) => {
        return {
            ...state,
            users: [...state.users.map(user => {
                if(user.id === id){
                    return {...user, followed: true}
                }
                return user
            })
            ]
        }
    }
    const unfollowed = (id) => {
        return {
            ...state,
            users: [...state.users.map(user => {
                if(user.id === id){
                    return {...user, followed: false}
                }
                return user
            })
            ]
        }
    }
    const setUsers = (objUsers) => {
        return {
            ...state, users: objUsers
        }
    }
    const setTotalUsers = (number) => {
        return {
            ...state, totalUsers: number
        }
    }
    const setPage = (current) => {
        return {
            ...state, page: current
        }
    }
    const togglePreloader = (flagLoading) => {
        return {
            ...state, isPreloader: flagLoading
        }
    }
    switch (action.type) {
        case FOLLOW:
            return followed(action.userId)
        case UNFOLLOW:
            return unfollowed(action.userId)
        case SET_USERS:
            return setUsers(action.users)
        case SET_PAGE:
            return setPage(action.current)
        case SET_TOTAL_USERS:
            return setTotalUsers(action.total)
        case TOGGLE_PRELOADER:
            return togglePreloader(action.flagLoading)
        default:
            return state
    }
}
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const set_users = (users) => ({ type: SET_USERS, users })
export const set_page = (current) => ({ type: SET_PAGE, current })
export const set_total_users = (total) => ({ type: SET_TOTAL_USERS, total })
export const toggle_preloader = (flagLoading) => ({ type: TOGGLE_PRELOADER, flagLoading })

export default usersReducer