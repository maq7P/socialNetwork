import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {got_profile_user, set_default_id, set_profile_user, toggle_preloader} from "../../redux/profileReducer";
import {withRouter, Redirect} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileURLContainer extends React.Component{
    componentDidMount() {
        this.props.got_profile_user(this.props.location.pathname.split('/')[3])
    }
    render(){
        return(
            <>
                {this.props.flagLoading ?
                        <Preloader/> :
                        <Profile {...this.props} profileInfo={this.props.profileInfo}/>
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        dataLinks: state.settingsOfLinks.profile,
        profileInfo: state.profilePage.profileInfo,
        flagLoading: state.profilePage.flagLoading
    }
}

export default compose(
    connect(mapStateToProps, {set_profile_user, toggle_preloader, got_profile_user}),
    withAuthRedirect,
    withRouter,
)(ProfileURLContainer)