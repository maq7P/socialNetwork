import React from 'react';
import style from './header.module.css';
import logo from '../../assets/images/logo.png'
import Person from "../common/Person/Person";
import imgUserDefault_1 from "../../assets/images/user-defualt-2.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<header className={style.header}>
        <div className={style.container}>
            <img src={logo} className={style.logo}/>
            <NavLink to={'/login'}>
                <div className={style.userLogin}>
                    <div className={style.userName}>
                        {props.isAuth ? props.login : 'Login'}
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