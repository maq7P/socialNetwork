import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {set_user_data} from "../../redux/authReducer";
import {loginAPI, profileAPI} from "../../api/api";

class HeaderAPIContainer extends React.Component{
    componentDidMount(){
        loginAPI.getLogin().then((response) => {
            let {id, email, login} = response.data
            this.props.set_user_data(id, email, login, null)
            if(this.props.isAuth){
                profileAPI.getProfile(id)
                    .then((data) => {
                        this.props.set_user_data(id, email, login, data.photos.large)
                })
            }
        })
    }
    render(){
        return (<Header {...this.props}/>)
    }
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
const HeaderContainer = connect(mapStateToProps, {set_user_data})(HeaderAPIContainer);

export default HeaderContainer;