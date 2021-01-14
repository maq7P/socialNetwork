import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    put_profile_status,
    got_profile_status,
    got_profile_user,
    set_profile_user,
    toggle_preloader
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileURLContainer extends React.Component{
    componentDidMount() {
        const id = this.props.location.pathname.split('/')[3];
        console.log(this.props.location.pathname);
        this.props.got_profile_user(id)
        
    }
    render(){
        return(
            <>
                {this.props.flagLoading ?
                        <Preloader/> :
                        <Profile {...this.props} 
                            profileInfo={this.props.profileInfo}
                            status={this.props.status}
                            id={this.props.location.pathname.split('/')[3]}/>
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        dataLinks: state.settingsOfLinks.profile,
        profileInfo: state.profilePage.profileInfo,
        flagLoading: state.profilePage.flagLoading,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, {
        set_profile_user,
        toggle_preloader,
        got_profile_user,
        got_profile_status,
        put_profile_status
    }),
    withAuthRedirect,
    withRouter,
)(ProfileURLContainer)