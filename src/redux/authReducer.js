const SET_USER_DATA = 'SET_USER_DATA'
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
        default:
            return state
    }
}
export const set_user_data = (id, email, login, photo) => ({type: SET_USER_DATA, data: {id, email, login, photo}})

export default authReducer