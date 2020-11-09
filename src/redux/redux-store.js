import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import linksReducer from "./linksReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    settingsOfLinks: linksReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store


