import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {set_default_id, set_profile_user, toggle_preloader} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {loginAPI, profileAPI} from "../../api/api";


class ProfileAPIContainer extends React.Component{
    componentDidMount() {
        loginAPI.getLogin().then((response) => {
            let {id} = response.data
            let userId = this.props.location.pathname.split('/')[3] ?
                this.props.location.pathname.split('/')[3] : id

            if(id !== userId){
                this.props.toggle_preloader(true)
                profileAPI.getProfile(userId)
                    .then((data) => {
                        this.props.toggle_preloader(false)
                        this.props.set_profile_user(data)
                    })
            }else{
                profileAPI.getProfile(userId)
                    .then((data) => {
                        this.props.set_profile_user(data)
                    })
            }
        })
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
        flagLoading: state.profilePage.flagLoading,
        defaultId:  state.profilePage.defaultId
    }
}
const ProfileURLContainer = withRouter(ProfileAPIContainer)

const ProfileContainer = connect(mapStateToProps, {set_profile_user, toggle_preloader, set_default_id})(ProfileURLContainer)

export default ProfileContainer;