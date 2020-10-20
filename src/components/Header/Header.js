import React from 'react';
import style from './header.module.css';

const Header = () => (
    <header className={style.header}>
      <div className="container">
        <img src='img/logo.png' className="logo"/>
      </div>
    </header>
)
export default Header;