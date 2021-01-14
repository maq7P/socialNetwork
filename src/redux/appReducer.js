import {got_user_data} from "./authReducer";

const INITIALIZED = 'app/INITIALIZED'


const initState = {
    initialized: false,
}
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                initialized: true,

        }
        default:
            return state
    }
}
//action creators
export const init_success = () => ({type: INITIALIZED})

export const initialize_app = (auth) => (dispatch) => {
    let promise = dispatch(got_user_data(auth))
    Promise.all([promise]).then(() => {
        dispatch(init_success())
    })
}

export default appReducer