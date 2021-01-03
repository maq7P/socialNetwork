import React from 'react';
import style from './header.module.css';
import logo from '../../assets/images/logo.png'
import imgUserDefault_1 from "../../assets/images/user-defualt-2.png";
import {Redirect, NavLink, Link} from "react-router-dom";

const Header = (props) => {
    console.log(props);
    if (props.isAuth) {
        return (
            <header className={style.header}>
                <div className={style.container}>
                    <img src={logo} className={style.logo}/>
                    <div>
                        <NavLink to={'/'} className={style.userLogin}>
                            <div className={style.userName}>
                                {props.login}
                            </div>
                            <div className={style.userImg}>
                                <img src={props.photo  ?
                                    props.photo :
                                    imgUserDefault_1}/>
                            </div>
                        </NavLink>
                        <button
                            className={style.btn} 
                            onClick={() => {
                                props.logout()
                            }}>Log Out
                        </button>
                    </div>
                </div>
            </header>
        )
    }
    return (<header className={style.header}>
        <div className={style.container}>
            <img src={logo} className={style.logo}/>
            <NavLink to={'/'}>
                <div className={style.userLogin}>
                    <div className={style.userName}>
                        Login
                    </div>
                    <div className={style.userImg}>
                        <img src={props.photo  ?
                            props.photo :
                            imgUserDefault_1}/>
                    </div>
                </div>
            </NavLink>
        </div>
    </header>)
}
export default Header;