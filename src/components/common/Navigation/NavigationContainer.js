import React from "react";
import Navigation from "./Navigation";
import {connect} from "react-redux";
import {set_profile_user} from "../../../redux/profileReducer";
import {loginAPI, profileAPI} from "../../../api/api";
class NavigationURLContainer extends React.Component{
    updateProfile = (e) => {
        if(e.target.textContent === 'My profile'){
            loginAPI.getLogin()
                .then((response) => {
                    let {id} = response.data
                    if(id !== this.props.profileInfo.userId){
                        profileAPI.getProfile(id)
                            .then((data) => {
                                this.props.set_profile_user(data)
                            })
                    }
            })
        }
    }
    render(){
        return (
                <Navigation
                    {...this.props}
                    updateProfile={this.updateProfile}/>
            )
    }
}
let mapStateToProps = (state) => {
    return {
        navigation: state.settingsOfLinks.navigation,
        profileInfo: state.profilePage.profileInfo
    }
}

export default connect(mapStateToProps, {set_profile_user})(NavigationURLContainer)