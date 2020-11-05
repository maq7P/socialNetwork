import React from "react";
import FriendsFind from "./FriendsFind";
import {
    follow,
    unfollow,
    set_users,
    set_total_users,
    set_page,
    toggle_preloader
} from "../../../redux/usersReducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Preloader from "../../common/Preloader/Preloader";

class FriendsFindAPIContainer extends React.Component {
    componentDidMount() {
        this.props.toggle_preloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.showUsers}`)
            .then((response) => {
                this.props.toggle_preloader(false)
                this.props.set_users(response.data.items)
                this.props.set_total_users(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.set_page(pageNumber)
        this.props.toggle_preloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.showUsers}`)
            .then((response) => {
                this.props.toggle_preloader(false)
                this.props.set_users(response.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isPreloader ? <Preloader/> : null}
                <FriendsFind users={this.props.users}
                                totalUsers={this.props.totalUsers}
                                showUsers={this.props.showUsers}
                                onPageChanged={this.onPageChanged}
                                page={this.props.page}
                                follow={this.props.follow}
                                unfollow={this.props.unfollow}
                />
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        showUsers: state.usersPage.showUsers,
        totalUsers: state.usersPage.totalUsers,
        page: state.usersPage.page,
        isPreloader: state.usersPage.isPreloader,
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         set_users: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         set_total_users: (total) => {
//             dispatch(setTotalUsersAC(total))
//         },
//         set_page: (pageNumber) => {
//             dispatch(setPageAC(pageNumber))
//         },
//         toggle_preloader: (flagLoading) => {
//             dispatch(togglePreloaderAC(flagLoading))
//         }
//     }
// }
export default connect(mapStateToProps,
    {follow, unfollow, set_users, set_total_users, set_page, toggle_preloader})(FriendsFindAPIContainer)