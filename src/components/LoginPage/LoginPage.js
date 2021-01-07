import React from "react";
import {Field, reduxForm} from 'redux-form'
import {required} from "../../utilities/validators";
import {ErrorFormAuth, Input} from "../common/FormsControl/FormsControl";
import {connect} from "react-redux";
import { login, stop_submit } from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
/* 
    handleSubmit: 
    1) e.preventDefault
    2) get all from form and put in data
    3) props.onChange(data)
*/
const LoginFrom = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[required]} name='Email' type='text' placeholder='login'/>
            </div>
            <div>
                <Field component={Input} validate={[required]} name='Password' type='password' placeholder='password'/>
            </div>
            <div>
                <Field component='input' type='checkbox' name='RememberMe'/>
                remember me
            </div>


            <div>
                <ErrorFormAuth errorMessage={props.err}/>
            </div>
            {
                props.captcha 
                ? 
                <div>
                    <img src={props.captcha}></img> 
                    <Field component='input' type='text' name='captcha' placeholder='Введите текст с картинки'/>
                </div> : ''
            }
            <button className="btn-default">Login</button>
        </form>
    )
}
const LoginReduxForm = 
reduxForm({
    form: 'login'
})(LoginFrom)

const LoginPage = (props) => {
    const onSubmit = (data) => {
        if(props.err){
            props.stop_submit(null)
        }
        props.login(data.Email, data.Password, data.RememberMe, data.captcha)
    }
    if(props.isAuth){
        return(
            <Redirect to={'/profile/overview'}/>
        )
    }
    return (
        <>
            <h3>LOGIN</h3>
            <LoginReduxForm 
                err={props.err}
                captcha={props.captcha} 
                onSubmit={onSubmit}/>
        </>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    logInName: state.auth.login,
    captcha: state.auth.captcha,
    err: state.auth.err,
})
export default connect(mapStateToProps, {login, stop_submit})(LoginPage)
