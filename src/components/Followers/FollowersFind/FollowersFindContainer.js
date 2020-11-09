import React from "react";
import FollowersFind from "./FollowersFind";
import {
    follow,
    unfollow,
    set_page,
    getUsers
} from "../../../redux/usersReducer";
import {connect} from "react-redux";
import Preloader from "../../common/Preloader/Preloader";

class FollowersFindAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.showUsers)
    }
    onPageChanged = (pageNumber) => {
        this.props.set_page(pageNumber)
        this.props.getUsers(pageNumber, this.props.showUsers)
    }

    render() {
        return (
            <>
                {this.props.isPreloader ? <Preloader/> : null}
                <FollowersFind users={this.props.users}
                                totalUsers={this.props.totalUsers}
                                showUsers={this.props.showUsers}
                                onPageChanged={this.onPageChanged}
                                page={this.props.page}
                                follow={this.props.follow}
                                unfollow={this.props.unfollow}
                                isDisabledArr={this.props.isDisabledArr}
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
        isDisabledArr: state.usersPage.isDisabledArr,
    }
}
export default connect(mapStateToProps,
    {follow, unfollow, set_page, getUsers})(FollowersFindAPIContainer)