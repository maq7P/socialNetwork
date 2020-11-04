const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initState = {
    users: []
};
const usersReducer = (state = initState, action) => {
    const followed = (id) => {
        return {
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
            ...state, users: [...state.users, ...objUsers]
        }
    }
    switch (action.type) {
        case FOLLOW:
            return followed(action.userId)
        case UNFOLLOW:
            return unfollowed(action.userId)
        case SET_USERS:
            return setUsers(action.users)
        default:
            return state
    }
}
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer