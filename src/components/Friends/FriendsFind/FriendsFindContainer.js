import React from "react";
import FriendsFind from "./FriendsFind";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/usersReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        set_users: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FriendsFind)