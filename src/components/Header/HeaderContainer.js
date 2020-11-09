import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {got_user_data, set_user_avatar, set_user_data} from "../../redux/authReducer";
import {loginAPI, profileAPI} from "../../api/api";

class HeaderAPIContainer extends React.Component{
    componentDidMount(){
        this.props.got_user_data(this.props.isAuth)
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
const HeaderContainer = connect(mapStateToProps, {got_user_data, set_user_data, set_user_avatar})(HeaderAPIContainer);

export default HeaderContainer;